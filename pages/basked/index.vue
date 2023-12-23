<template>
    <div v-if="basked.length > 0">
        <div class="basked-header-wrapper">
            <h1>Savat</h1>
            <button @click="removeAllBasked" class="clear-btn">Barchasini O'chirish</button>
        </div>
            <div class="wrapper">
                <ul class="items-list">
                    <li v-for="product in basked" class="item" :key="product._id" :id="product._id">
                        <img :src="product.product_img" alt="" width="170" height="100">
                        <div class="item__title-wrapper">
                            <NuxtLink class="link" :to="'/product/' + product._id">
                                <h3 class="item__title">{{ product.product_title }}</h3>
                            </NuxtLink>
                            <p class="item__brand"><b>Brand:</b> {{ product.brand.brand_name }}</p>
                        </div>
                        <div class="item__counter-wrapper">
                            <button @click="e => removeOne(e.target.closest('.item').id)" class="item__plus-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M19.2188 9.71875H0.78125C0.349766 9.71875 0 10.0685 0 10.5C0 10.9315 0.349766 11.2812 0.78125 11.2812H19.2188C19.6502 11.2812 20 10.9315 20 10.5C20 10.0685 19.6502 9.71875 19.2188 9.71875Z" fill="#000814"/>
                                </svg>
                            </button>
                            <p class="item__count">{{ product.count }}</p>
                            <button @click="e => addOne(e.target.closest('.item').id)" class="item__plus-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <g clip-path="url(#clip0_391_10561)">
                                        <path d="M19.2188 9.71875H10.7812V1.28125C10.7812 0.849766 10.4315 0.5 10 0.5C9.56852 0.5 9.21875 0.849766 9.21875 1.28125V9.71875H0.78125C0.349766 9.71875 0 10.0685 0 10.5C0 10.9315 0.349766 11.2812 0.78125 11.2812H9.21875V19.7188C9.21875 20.1502 9.56852 20.5 10 20.5C10.4315 20.5 10.7812 20.1502 10.7812 19.7188V11.2812H19.2188C19.6502 11.2812 20 10.9315 20 10.5C20 10.0685 19.6502 9.71875 19.2188 9.71875Z" fill="#000814"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_391_10561">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <p class="item__price"><b>{{ product.product_price * product.count }}</b> So'm</p>
                        <button @click="removeBasked" class="item__remove-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_391_10589)">
                                    <path d="M12.7594 7.24603C12.5007 7.24603 12.291 7.45571 12.291 7.71442V16.5668C12.291 16.8254 12.5007 17.0352 12.7594 17.0352C13.0181 17.0352 13.2278 16.8254 13.2278 16.5668V7.71442C13.2278 7.45571 13.0181 7.24603 12.7594 7.24603Z" fill="#AFB0B4"/>
                                    <path d="M7.23205 7.24603C6.97335 7.24603 6.76367 7.45571 6.76367 7.71442V16.5668C6.76367 16.8254 6.97335 17.0352 7.23205 17.0352C7.49076 17.0352 7.70044 16.8254 7.70044 16.5668V7.71442C7.70044 7.45571 7.49076 7.24603 7.23205 7.24603Z" fill="#AFB0B4"/>
                                    <path d="M3.20333 5.95413V17.4941C3.20333 18.1762 3.45344 18.8167 3.89035 19.2763C4.32525 19.7372 4.93049 19.9988 5.56391 19.9999H14.4259C15.0594 19.9988 15.6647 19.7372 16.0994 19.2763C16.5363 18.8167 16.7864 18.1762 16.7864 17.4941V5.95413C17.6549 5.7236 18.2177 4.88454 18.1016 3.99333C17.9852 3.1023 17.2261 2.43577 16.3274 2.43559H13.9293V1.85011C13.932 1.35776 13.7374 0.884988 13.3888 0.537177C13.0403 0.189549 12.5668 -0.00402466 12.0744 5.06487e-07H7.91533C7.42298 -0.00402466 6.94948 0.189549 6.60093 0.537177C6.25239 0.884988 6.05772 1.35776 6.06046 1.85011V2.43559H3.66238C2.76367 2.43577 2.00456 3.1023 1.8882 3.99333C1.77202 4.88454 2.33481 5.7236 3.20333 5.95413ZM14.4259 19.0632H5.56391C4.76308 19.0632 4.14009 18.3752 4.14009 17.4941V5.9953H15.8497V17.4941C15.8497 18.3752 15.2267 19.0632 14.4259 19.0632ZM6.99723 1.85011C6.99412 1.60622 7.08999 1.37148 7.26307 1.19932C7.43597 1.02715 7.67126 0.932558 7.91533 0.936766H12.0744C12.3185 0.932558 12.5538 1.02715 12.7267 1.19932C12.8998 1.3713 12.9956 1.60622 12.9925 1.85011V2.43559H6.99723V1.85011ZM3.66238 3.37236H16.3274C16.793 3.37236 17.1705 3.74981 17.1705 4.21544C17.1705 4.68108 16.793 5.05853 16.3274 5.05853H3.66238C3.19674 5.05853 2.81929 4.68108 2.81929 4.21544C2.81929 3.74981 3.19674 3.37236 3.66238 3.37236Z" fill="#AFB0B4"/>
                                    <path d="M9.99573 7.24603C9.73702 7.24603 9.52734 7.45571 9.52734 7.71442V16.5668C9.52734 16.8254 9.73702 17.0352 9.99573 17.0352C10.2544 17.0352 10.4641 16.8254 10.4641 16.5668V7.71442C10.4641 7.45571 10.2544 7.24603 9.99573 7.24603Z" fill="#AFB0B4"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_391_10589">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="item__remove-txt">Remove</p>
                        </button>
                    </li>
                </ul>
                <div class="orders-wrapper">
                    <h2>Your order</h2>
                    <p class="orders-count">There is {{ basked.length }} item in the cart</p>
                    <span>
                        <p>Total amount:</p>
                        <p><b>{{ totalSum }}</b> So'm</p>
                    </span>
                    <button class="order-btn">Buy Now</button>
                </div>
            </div>
        </div>
        <p class="baskedEmpty" v-else>Savatchada hech qanday elementlar yo'q.</p>
        <h2>Best Sellers</h2>
        <ul class="cards-list">
            <card v-for="product in productsStore.data.products.slice(0, 4)"
                @click="cardClick"
                v-bind:key="product._id"
                :id="product._id"
                :title="product.product_title"
                :img="product.product_img"
                :description="product.product_desc"
                :views="product.views"
                :price="product.product_price"
                :inCart="product.inCart"
                :inFavorites="product.inFavorites"
            />
    </ul>
</template>

<script setup>
    import { useCounterStore } from '~/store/counter'
    import { useProductsStore } from '~/store/products'
    import card from '~/components/cardComponent.vue'
    import { addCount, removeCount } from '~/utils/countBasked';
    const counterStore = useCounterStore()
    const productsStore = useProductsStore()

    productsStore.getProducts()
    const basked = ref([])
    const totalSum = ref(0)
    onMounted(async() => {
        basked.value = await JSON.parse(localStorage.getItem('basked'))
        totalSum.value = calculateTotalCost(basked.value);
    })

    const cardClick = (e) => {
        console.log(e.target);
        if(e.target.id == 'addBaskedBtn') {
            console.log('hello');
            basked.value = JSON.parse(localStorage.getItem('basked'))
        }
    }

    const addOne = (id) => {
        try {
            addCount(id)
            basked.value = JSON.parse(localStorage.getItem('basked'))
            totalSum.value = calculateTotalCost(basked.value);
        } catch(err) {
            console.log("Error: ", err)
        }
    }

    const removeOne = (id) => {
        try {
            removeCount(id)
            basked.value = JSON.parse(localStorage.getItem('basked'))
            totalSum.value = calculateTotalCost(basked.value);
        } catch(err) {
            console.log("Error: ", err)
        }
    }

    const removeBasked = (e) => {
        const id = e.target.closest('.item').id;
        basked.value = basked.value.filter(e => e._id !== id)
        localStorage.setItem('basked', JSON.stringify(basked.value))
        counterStore.deleteOne('basked')
        totalSum.value = calculateTotalCost(basked.value);
        productsStore.data.products.forEach(element => {
            if(element._id == id) {
                element.inCart = false
            }
        }) 
    }

    const removeAllBasked = () => {
        localStorage.setItem('basked', JSON.stringify([]))
        basked.value = []
        counterStore.deleteMany('basked')
        totalSum.value = 0;
        productsStore.getProducts()
    }

    function calculateTotalCost(products) {
        let totalCost = 0;

        for (const product of products) {
            totalCost += product.product_price * product.count;
        }

        return totalCost;
    }

</script>