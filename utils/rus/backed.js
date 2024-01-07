// addBasked.js
import { useProductsStore } from "~/store/rus/products";
import { useCounterStore } from "~/store/rus/counter";

const addBasked = (id) => {
    const productsStore = useProductsStore();
    const counterStore = useCounterStore();
    counterStore.addBasked();
    const basked = JSON.parse(localStorage.getItem('baskedRus')) || [];
    const findProduct = productsStore.data.products.find(e => e._id === id);
    findProduct.count = 1;
    findProduct.inCart = true;

    basked.push(findProduct);
    localStorage.setItem('basked', JSON.stringify(basked));
    productsStore.updateProductIBasked(id, true);
};

export default addBasked;
