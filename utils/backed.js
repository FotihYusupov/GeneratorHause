import { useProductsStore } from "~/store/products";

const addBasked = (id) => {
    const productsStore = useProductsStore();
    productsStore.getProducts()
    const basked = ref(null)
    basked.value = JSON.parse(localStorage.getItem('basked'))
    if(basked.value !== null) {
        const findProduct = productsStore.data.products.find(e => e._id == id);
        basked.value.push(findProduct);
        localStorage.setItem('basked', JSON.stringify(basked.value))
    } else {
        basked.value = []
        const findProduct = productsStore.data.products.find(e => e._id == id);
        basked.value.push(findProduct);
        localStorage.setItem('basked', JSON.stringify(basked.value))
    }
}

export default addBasked;