import { useProductsStore } from "~/store/products";
import { useCounterStore } from "~/store/counter";

const addBasked = (id) => {
    const productsStore = useProductsStore();
    productsStore.getProducts()
    const counterStore = useCounterStore();
    counterStore.addBasked();
    const basked = ref(null)
    basked.value = JSON.parse(localStorage.getItem('basked'))
    if(basked.value !== null) {
        const findProduct = productsStore.data.products.find(e => e._id == id);
        findProduct.count = 0
        basked.value.push(findProduct);
        localStorage.setItem('basked', JSON.stringify(basked.value))
    } else {
        basked.value = []
        const findProduct = productsStore.data.products.find(e => e._id == id);
        findProduct.count = 0
        basked.value.push(findProduct);
        localStorage.setItem('basked', JSON.stringify(basked.value))
    }
}

export default addBasked;