import { useProductsStore } from "~/store/products";
import { useCounterStore } from "~/store/counter";

const addFavorites = (id) => {
    const productsStore = useProductsStore();
    productsStore.getProducts()
    const counterStore = useCounterStore();
    counterStore.addFavorites();
    const favorites = ref(null)
    favorites.value = JSON.parse(localStorage.getItem('favorites'))
    if(favorites.value !== null) {
        const findProduct = productsStore.data.products.find(e => e._id == id);
        favorites.value.push(findProduct);
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    } else {
        favorites.value = []
        const findProduct = productsStore.data.products.find(e => e._id == id);
        favorites.value.push(findProduct);
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
}

export default addFavorites;