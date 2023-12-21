// addFavorites.js
import { useProductsStore } from "~/store/products";
import { useCounterStore } from "~/store/counter";

const addFavorites = (id) => {
    const productsStore = useProductsStore();
    const counterStore = useCounterStore();
    counterStore.addFavorites();
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const findProduct = productsStore.data.products.find(e => e._id === id);
    findProduct.inFavorites = true;

    favorites.push(findProduct);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export default addFavorites;
