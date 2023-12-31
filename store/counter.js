import {
    defineStore
} from "pinia";
import { useProductsStore } from "./products";

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
        data: {
            basked: 0,
            favorites: 0,
        },
    }),
    actions: {
        async getCounter() {
            try {
                const productsStore = useProductsStore()
                if (typeof localStorage !== "undefined") {
                    await productsStore.getProducts()
                    const basked = productsStore.data.products.filter(e => e.inCart === true);
                    const favorites = productsStore.data.products.filter(e => e.inFavorites === true);
                    if (basked && favorites) {
                        this.data.basked = basked.length;
                        this.data.favorites = favorites.length;
                    } else {
                        localStorage.setItem("basked", JSON.stringify([]));
                        localStorage.setItem("favorites", JSON.stringify([]));
                    }
                }
            } catch (err) {
                console.log("Error: ", err);
            }
        },
        addBasked() {
            try {
                this.data.basked += 1;
            } catch (err) {
                console.log("Error: ", err);
            }
        },
        addFavorites() {
            try {
                this.data.favorites += 1;
            } catch (err) {
                console.log("Error: ", err);
            }
        },
        deleteOne(key) {
            try {
                this.data[key] -= 1;
            } catch (err) {
                console.log("Error: ", err);
            }
        },
        deleteMany(key) {
            try {
                this.data[key] = 0;
            } catch (err) {
                console.log("Error: ", err);
            }
        },
    },
});