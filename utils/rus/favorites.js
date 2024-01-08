// addFavorites.js
import { useProductsStore } from "~/store/rus/products";
import { useCounterStore } from "~/store/rus/counter";

const addFavorites = (id) => {
    const productsStore = useProductsStore();
    const counterStore = useCounterStore();
    counterStore.addFavorites();
    const favorites = JSON.parse(localStorage.getItem('favoritesRus')) || [];

    const findProduct = productsStore.data.products.find(e => e._id === id);
    findProduct.inFavorites = true;

    favorites.push(findProduct);
    localStorage.setItem('favoritesRus', JSON.stringify(favorites));
};

export default addFavorites;
