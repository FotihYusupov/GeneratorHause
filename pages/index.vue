<template>
    <Loader v-if="productsStore.data.loading" />
    <div v-else class="main">
        <div class="container">
            <div class="hero_swiper">
                <HeroSwiper :data="productsStore.data.products.filter(product => product.offer === true)" />
            </div>
            <div class="scroll-middle">
                <a href="/#categories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_1192_13798)">
                            <circle cx="16" cy="16" r="10" fill="white" />
                            <path
                                d="M0 15.9906C0 15.9969 0 16.0031 0 16.0094C0.1075 21.9637 1.30312 25.85 3.76187 28.2381C6.14937 30.6969 10.0356 31.8925 15.9906 32H16.0094C21.9644 31.8925 25.8506 30.6969 28.2381 28.2381C30.6969 25.85 31.8925 21.9637 32 16.0094V16V15.9906C31.8925 10.0356 30.6969 6.14938 28.2381 3.76188C25.85 1.30313 21.9637 0.1075 16.0094 0C16.0031 0 15.9969 0 15.9906 0C10.0363 0.1075 6.14937 1.30313 3.76187 3.76188C1.30312 6.15 0.1075 10.0363 0 15.9906ZM23.0544 11.9169C23.255 11.7163 23.5806 11.7163 23.7812 11.9169C23.8819 12.0175 23.9319 12.1487 23.9319 12.2806C23.9319 12.4125 23.8819 12.5437 23.7812 12.6444L16.3431 20.0831C16.1425 20.2838 15.8169 20.2838 15.6163 20.0831L8.21875 12.6856C8.01812 12.485 8.01812 12.1594 8.21875 11.9587C8.41938 11.7581 8.745 11.7581 8.94625 11.9587L15.9794 18.9925L23.0544 11.9169Z"
                                fill="#FFD60A" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1192_13798">
                                <rect width="32" height="32" fill="white" transform="matrix(0 -1 1 0 0 32)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <div class="sales_wrapper">
                <SaleProducts :sale="productsStore.data.products.filter(product => product.offer === true)" />
            </div>
            <div id="categories" class="categories_wrapper">
                <div class="title-wrapper">
                    <h2>Katalog orqali</h2>
                    <span class="title-wrapper__line"></span>
                </div>
                <div class="categories_container">
                    <div class="categories_item">
                        <p class="category_name">
                            Gazli generator
                        </p>
                        <img class="category_img" src="/category1.png" alt="">
                        <NuxtLink to="/category/659644bd0d8d7f5636a9c6f6" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="categories_item">
                        <p class="category_name">
                            Inverter generator
                        </p>
                        <img class="category_img" src="/category2.png" alt="">
                        <NuxtLink to="/category/659644bd0d8d7f5636a9c6f7" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="categories_item">
                        <p class="category_name">
                            Dizel generator
                        </p>
                        <img class="category_img" src="/category3.png" alt="">
                        <NuxtLink to="/category/659644bd0d8d7f5636a9c6f8" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="categories_item">
                        <p class="category_name">
                            Stabilizator
                        </p>
                        <img class="category_img" src="/category4.png" alt="">
                        <NuxtLink to="/category/6596496b757d180fa1fb351d" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="categories_item">
                        <p class="category_name">
                            Karcher
                        </p>
                        <img class="category_img" src="/category5.png" alt="">
                        <NuxtLink to="/category/659644bd0d8d7f5636a9c6f9" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="categories_item">
                        <p class="category_name">
                            Betonameshalka
                        </p>
                        <img class="category_img" src="/category6.png" alt="">
                        <NuxtLink to="/category/659644bd0d8d7f5636a9c6fa" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="categories_item">
                        <p class="category_name">
                            Benzinli generator
                        </p>
                        <img class="category_img" src="/category7.png" alt="">
                        <NuxtLink to="/category/659644bd0d8d7f5636a9c6fb" class="category_link">
                            <p>Tanishish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                                <path
                                    d="M29.7729 6.65226H0.703278C0.35749 6.65226 0.078125 6.35893 0.078125 5.99585C0.078125 5.63277 0.35749 5.33944 0.703278 5.33944H28.2627L24.4688 1.35585C24.2246 1.09944 24.2246 0.683032 24.4688 0.426622C24.713 0.170211 25.1096 0.170211 25.3538 0.426622L30.2163 5.53226C30.3961 5.72098 30.4488 6.00201 30.3511 6.24816C30.2535 6.49226 30.0249 6.65226 29.7729 6.65226Z"
                                    fill="#000814" />
                                <path
                                    d="M24.904 11.764C24.7438 11.764 24.5836 11.7005 24.4624 11.5712C24.2182 11.3148 24.2182 10.8984 24.4624 10.642L29.3308 5.5302C29.575 5.27379 29.9716 5.27379 30.2158 5.5302C30.46 5.78661 30.46 6.20302 30.2158 6.45943L25.3474 11.5712C25.2244 11.7005 25.0642 11.764 24.904 11.764Z"
                                    fill="#000814" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="popular_brands">
                <div class="title-wrapper">
                    <h2>Bizning hamkorlarimiz</h2>
                    <span class="title-wrapper__line"></span>
                </div>
                <div class="swipers_wrapper">
                    <RightSwiper />
                    <LeftSwiper />
                    <RightSwiper />
                </div>
            </div>
            <div class="title-wrapper">
                <h2>Yangi maxsulotlar</h2>
                <span class="title-wrapper__line"></span>
            </div>
            <ul class="cards-list list-category">
                <card v-for="product in newProducts" :id="product._id" v-bind:key="product._id"
                    :title="product.product_title" :img="product.product_img" :description="product.product_desc"
                    :views="product.views" :brand="product.brand.brand_name" :price="product.product_price"
                    :inCart="product.inCart" :inFavorites="product.inFavorites" />
            </ul>
        </div>
        <div>
            <div class="container title-wrapper">
                <h2>Ommabop mahsulotlar</h2>
                <span class="title-wrapper__line"></span>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card v-for="product in bestSellers.slice(start, end)" :id="product._id" v-bind:key="product._id"
                            :title="product.product_title" :brand="product.brand.brand_name" :img="product.product_img"
                            :description="product.product_desc" :views="product.views" :price="product.product_price"
                            :inCart="product.inCart" :inFavorites="product.inFavorites" />
                    </ul>
                    <div class="card-btns-wrapper">
                        <button class="pagination-btn" @click="removeCount" :disabled="start === 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_52_1446)">
                                    <path
                                        d="M24 48C37.234 48 48 37.234 48 24C48 10.766 37.234 0 24 0C10.766 0 0 10.766 0 24C0 37.234 10.766 48 24 48ZM16.586 22.586L26.586 12.586C26.976 12.196 27.488 12 28 12C28.512 12 29.0241 12.196 29.4141 12.586C30.196 13.368 30.196 14.632 29.4141 15.414L20.828 24L29.414 32.586C30.1959 33.368 30.1959 34.632 29.414 35.414C28.632 36.1959 27.368 36.1959 26.586 35.414L16.586 25.4139C15.804 24.632 15.804 23.368 16.586 22.586Z"
                                        fill="#FFD60A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_52_1446">
                                        <rect width="48" height="48" fill="white" transform="matrix(-1 0 0 -1 48 48)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button class="pagination-btn" @click="addCount" :disabled="end === 8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_52_1398)">
                                    <path
                                        d="M24 0C10.766 0 0 10.766 0 24C0 37.234 10.766 48 24 48C37.234 48 48 37.234 48 24C48 10.766 37.234 0 24 0ZM31.414 25.414L21.414 35.414C21.024 35.804 20.512 36 20 36C19.488 36 18.9759 35.804 18.5859 35.414C17.804 34.632 17.804 33.368 18.5859 32.586L27.172 24L18.586 15.414C17.8041 14.632 17.8041 13.368 18.586 12.586C19.368 11.8041 20.632 11.8041 21.414 12.586L31.414 22.5861C32.196 23.368 32.196 24.632 31.414 25.414Z"
                                        fill="#FFD60A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_52_1398">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container title-wrapper">
                <h2>Gazli generator</h2>
                <NuxtLink class="SeeAll" to="/category/659644bd0d8d7f5636a9c6f6">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '659644bd0d8d7f5636a9c6f6')"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :description="product.product_desc" :views="product.views"
                            :price="product.product_price" :brand="product.brand.brand_name" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>

            <div class="container title-wrapper">
                <h2>Inverter generator</h2>
                <span class="title-wrapper__line"></span>
                <NuxtLink class="SeeAll" to="/category/659644bd0d8d7f5636a9c6f7">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '659644bd0d8d7f5636a9c6f7').slice(0, 4)"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :brand="product.brand.brand_name" :description="product.product_desc"
                            :views="product.views" :price="product.product_price" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>

            <div class="container title-wrapper">
                <h2>Karcher</h2>
                <span class="title-wrapper__line"></span>
                <NuxtLink class="SeeAll" to="category/659644bd0d8d7f5636a9c6f9">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '659644bd0d8d7f5636a9c6f9').slice(0, 4)"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :brand="product.brand.brand_name" :description="product.product_desc"
                            :views="product.views" :price="product.product_price" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>
            <div class="container title-wrapper">
                <h2>Stabilizator</h2>
                <span class="title-wrapper__line"></span>
                <NuxtLink class="SeeAll" to="category/6596496b757d180fa1fb351d">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '6596496b757d180fa1fb351d').slice(0, 4)"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :brand="product.brand.brand_name" :description="product.product_desc"
                            :views="product.views" :price="product.product_price" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>
            <div class="container title-wrapper">
                <h2>Betonameshalka</h2>
                <span class="title-wrapper__line"></span>
                <NuxtLink class="SeeAll" to="category/659644bd0d8d7f5636a9c6fa">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '659644bd0d8d7f5636a9c6fa').slice(0, 4)"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :brand="product.brand.brand_name" :description="product.product_desc"
                            :views="product.views" :price="product.product_price" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>

            <div class="container title-wrapper">
                <h2>Benzinli generator</h2>
                <span class="title-wrapper__line"></span>
                <NuxtLink class="SeeAll" to="category/659644bd0d8d7f5636a9c6fb">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '659644bd0d8d7f5636a9c6fb').slice(0, 4)"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :description="product.product_desc" :views="product.views"
                            :price="product.product_price" :brand="product.brand.brand_name" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>

            <div class="container title-wrapper">
                <h2>Dizel generator</h2>
                <span class="title-wrapper__line"></span>
                <NuxtLink class="SeeAll" to="category/659644bd0d8d7f5636a9c6f8">Barchasi</NuxtLink>
            </div>
            <div class="list-category-wrapper">
                <div class="container">
                    <ul class="cards-list list-category">
                        <card
                            v-for="product in productsStore.data.products.filter(e => e.category._id == '659644bd0d8d7f5636a9c6f8').slice(0, 4)"
                            :id="product._id" v-bind:key="product._id" :title="product.product_title"
                            :img="product.product_img" :description="product.product_desc" :views="product.views"
                            :price="product.product_price" :brand="product.brand.brand_name" :inCart="product.inCart"
                            :inFavorites="product.inFavorites" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';
import { useProductsStore } from '~/store/products';

import card from '~/components/cardComponent.vue'

const categoriesStore = useCategoriesStore();
const productsStore = useProductsStore();

const newProducts = ref([])
const bestSellers = ref([])

const getData = async () => {
    await categoriesStore.getCategories();
    await productsStore.getProducts();
    newProducts.value = productsStore.data.products.reverse().slice(0, 8)
    bestSellers.value = productsStore.data.products.reverse()
}
getData();

const start = ref(0)
const end = ref(4)

const addCount = () => {
    start.value = start.value + 1
    end.value = end.value + 1
}

const removeCount = () => {
    start.value = start.value - 1
    end.value = end.value - 1
}
</script>