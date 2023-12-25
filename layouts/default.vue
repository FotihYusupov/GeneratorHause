<template>
  <div @click="closeCategories">
    <header>

      <div class="container">

        <section class="header">
          <div class="header__wrapper">
            <nuxt-link to="/">
              <img src="~/public/Logo.png" alt="">
            </nuxt-link>
            <div class="header__category-btn-wrapper" id="btnWrapper">
              <button @click="openCategories" class="header__category-wrapper" id="openCategories">
                <svg class="pointer-events" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.8327 8.95832H14.166C12.1493 8.95832 11.041 7.84999 11.041 5.83332V4.16666C11.041 2.14999 12.1493 1.04166 14.166 1.04166H15.8327C17.8493 1.04166 18.9577 2.14999 18.9577 4.16666V5.83332C18.9577 7.84999 17.8493 8.95832 15.8327 8.95832ZM14.166 2.29166C12.8493 2.29166 12.291 2.84999 12.291 4.16666V5.83332C12.291 7.14999 12.8493 7.70832 14.166 7.70832H15.8327C17.1493 7.70832 17.7077 7.14999 17.7077 5.83332V4.16666C17.7077 2.84999 17.1493 2.29166 15.8327 2.29166H14.166Z"
                    fill="#000814" />
                  <path
                    d="M5.83268 18.9583H4.16602C2.14935 18.9583 1.04102 17.85 1.04102 15.8333V14.1667C1.04102 12.15 2.14935 11.0417 4.16602 11.0417H5.83268C7.84935 11.0417 8.95768 12.15 8.95768 14.1667V15.8333C8.95768 17.85 7.84935 18.9583 5.83268 18.9583ZM4.16602 12.2917C2.84935 12.2917 2.29102 12.85 2.29102 14.1667V15.8333C2.29102 17.15 2.84935 17.7083 4.16602 17.7083H5.83268C7.14935 17.7083 7.70768 17.15 7.70768 15.8333V14.1667C7.70768 12.85 7.14935 12.2917 5.83268 12.2917H4.16602Z"
                    fill="#000814" />
                  <path
                    d="M4.99935 8.95832C2.81602 8.95832 1.04102 7.18332 1.04102 4.99999C1.04102 2.81666 2.81602 1.04166 4.99935 1.04166C7.18268 1.04166 8.95768 2.81666 8.95768 4.99999C8.95768 7.18332 7.18268 8.95832 4.99935 8.95832ZM4.99935 2.29166C3.50768 2.29166 2.29102 3.50832 2.29102 4.99999C2.29102 6.49166 3.50768 7.70832 4.99935 7.70832C6.49102 7.70832 7.70768 6.49166 7.70768 4.99999C7.70768 3.50832 6.49102 2.29166 4.99935 2.29166Z"
                    fill="#000814" />
                  <path
                    d="M14.9993 18.9583C12.816 18.9583 11.041 17.1833 11.041 15C11.041 12.8167 12.816 11.0417 14.9993 11.0417C17.1827 11.0417 18.9577 12.8167 18.9577 15C18.9577 17.1833 17.1827 18.9583 14.9993 18.9583ZM14.9993 12.2917C13.5077 12.2917 12.291 13.5083 12.291 15C12.291 16.4917 13.5077 17.7083 14.9993 17.7083C16.491 17.7083 17.7077 16.4917 17.7077 15C17.7077 13.5083 16.491 12.2917 14.9993 12.2917Z"
                    fill="#000814" />
                </svg>
                <p class="pointer-events header__category-text">Category</p>
              </button>
              <div class="header__categories-wrapper">
                <div class="header__categories">
                  <NuxtLink class="header__categories-link" :to="'/category/657aef6f7633bfd3cdb02765'">Karcher
                    stabilizator</NuxtLink>
                  <NuxtLink class="header__categories-link" :to="'/category/657aef9a7633bfd3cdb02766'">Motokultivator
                  </NuxtLink>
                  <NuxtLink class="header__categories-link" :to="'/category/657aefb47633bfd3cdb02767'">Betona meshalka
                  </NuxtLink>
                  <NuxtLink class="header__categories-link" :to="'/category/657aefcd7633bfd3cdb02768'">Invertor Generator
                  </NuxtLink>
                  <NuxtLink class="header__categories-link" :to="'/category/657aefe47633bfd3cdb02769'">Benzinli generator
                  </NuxtLink>
                  <NuxtLink class="header__categories-link" :to="'/category/657aeff97633bfd3cdb0276a'">Dizelni generator
                  </NuxtLink>
                  <NuxtLink class="header__categories-link" :to="'/category/657af00c7633bfd3cdb0276b'">Gazvi generator
                  </NuxtLink>
                </div>
              </div>
            </div>
            <form @submit="search" class="header__search-wrapper">
            <input @input="searchProductsFn" class="header__search-input" id="searchInput" type="text" name="search"
              placeholder="What are you looking for..." required>
            <button class="header__search-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.58268 18.125C4.87435 18.125 1.04102 14.2917 1.04102 9.58332C1.04102 4.87499 4.87435 1.04166 9.58268 1.04166C14.291 1.04166 18.1243 4.87499 18.1243 9.58332C18.1243 14.2917 14.291 18.125 9.58268 18.125ZM9.58268 2.29166C5.55768 2.29166 2.29102 5.56666 2.29102 9.58332C2.29102 13.6 5.55768 16.875 9.58268 16.875C13.6077 16.875 16.8743 13.6 16.8743 9.58332C16.8743 5.56666 13.6077 2.29166 9.58268 2.29166Z"
                  fill="#000814" />
                <path
                  d="M18.3326 18.9583C18.1742 18.9583 18.0159 18.9 17.8909 18.775L16.2242 17.1083C15.9826 16.8667 15.9826 16.4667 16.2242 16.225C16.4659 15.9833 16.8659 15.9833 17.1076 16.225L18.7742 17.8917C19.0159 18.1333 19.0159 18.5333 18.7742 18.775C18.6492 18.9 18.4909 18.9583 18.3326 18.9583Z"
                  fill="#000814" />
              </svg>
              <p class="header__search-text">Search</p>
            </button>
          </form>
          <ul v-if="searchProducts.length > 0" id="searchList" class="search-products">
            <li class="search-products__item" v-for="product in searchProducts.slice(0, 4)" v-bind:key="product._id">
              <NuxtLink class="link" :to="'/product/' + product._id">
                <img class="search-products__item-img" :src="product.product_img[0]" alt="">
                <div>
                  <h3>{{ product.product_title }}</h3>
                  <p>{{ product.product_desc }}</p>
                </div>
                <p>{{ product.product_price }} So'm</p>
              </NuxtLink>
            </li>
          </ul>
          <div class="header__storage-wrapper">
            <NuxtLink class="header__storage" to="/favorites">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.516 17.3417C10.2327 17.4417 9.76602 17.4417 9.48268 17.3417C7.06602 16.5167 1.66602 13.075 1.66602 7.24168C1.66602 4.66668 3.74102 2.58334 6.29935 2.58334C7.81602 2.58334 9.15768 3.31668 9.99935 4.45001C10.841 3.31668 12.191 2.58334 13.6993 2.58334C16.2577 2.58334 18.3327 4.66668 18.3327 7.24168C18.3327 13.075 12.9327 16.5167 10.516 17.3417Z"
                  stroke="#000814" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p class="header__storage-text">favorites</p>
              <span class="header__storage-num">{{ counterStore.data.favorites }}</span>
            </NuxtLink>
            <div class="header__basked-wrapper">
              <NuxtLink class="header__storage" to="/basked">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.46512 6.44185C4.34952 6.44185 4.25581 6.53556 4.25581 6.65115V17.5349C4.25581 17.6505 4.34952 17.7442 4.46512 17.7442H16.186C16.3017 17.7442 16.3953 17.6505 16.3953 17.5349V6.65115C16.3953 6.53556 16.3017 6.44185 16.186 6.44185H4.46512ZM3 6.65115C3 5.84199 3.65595 5.18604 4.46512 5.18604H16.186C16.9952 5.18604 17.6512 5.84199 17.6512 6.65115V17.5349C17.6512 18.344 16.9952 19 16.186 19H4.46512C3.65595 19 3 18.344 3 17.5349V6.65115Z"
                    fill="black" />
                  <path
                    d="M10.3257 2.25581C9.05416 2.25581 8.02339 3.2866 8.02339 4.55814V7.48837C8.02339 7.83515 7.74227 8.11628 7.39549 8.11628C7.0487 8.11628 6.76758 7.83515 6.76758 7.48837V4.55814C6.76758 2.59303 8.36061 1 10.3257 1C12.2908 1 13.8839 2.59303 13.8839 4.55814V7.48837C13.8839 7.83515 13.6027 8.11628 13.256 8.11628C12.9092 8.11628 12.628 7.83515 12.628 7.48837V4.55814C12.628 3.2866 11.5973 2.25581 10.3257 2.25581Z"
                    fill="black" />
                </svg>
                <p class="header__storage-text">basked</p>
                <span class="header__storage-num">{{ counterStore.data.basked }}</span>
              </NuxtLink>
              <div v-if="counterStore.data.basked > 0" class="header__store-products">
                <ul class="header__store-products-list">
                  <li class="header__store-item"
                    v-for="product in productsStore.data.products.filter(e => e.inCart === true).slice(0, 4)"
                    :id="product._id" v-bind:key="product._id">
                    <img :src="product.product_img[0]">
                    <div class="header__store-item-wrapper">
                      <h3 class="header__store-item-title">{{ product.product_title }}</h3>
                      <p class="header__store-item-price">{{ product.product_price }} So'm</p>
                    </div>
                    <button @click="removeBasked" class="header__store-item-delete">
                      <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                        viewBox="0 0 21 21" fill="none">
                        <g opacity="0.3" clip-path="url(#clip0_502_10609)">
                          <path
                            d="M13.4274 7.7381C13.1687 7.7381 12.959 7.94777 12.959 8.20648V17.0589C12.959 17.3174 13.1687 17.5273 13.4274 17.5273C13.6861 17.5273 13.8957 17.3174 13.8957 17.0589V8.20648C13.8957 7.94777 13.6861 7.7381 13.4274 7.7381Z"
                            fill="#000814" />
                          <path
                            d="M7.90002 7.7381C7.64132 7.7381 7.43164 7.94777 7.43164 8.20648V17.0589C7.43164 17.3174 7.64132 17.5273 7.90002 17.5273C8.15873 17.5273 8.36841 17.3174 8.36841 17.0589V8.20648C8.36841 7.94777 8.15873 7.7381 7.90002 7.7381Z"
                            fill="#000814" />
                          <path
                            d="M3.8713 6.4462V17.9862C3.8713 18.6682 4.12141 19.3088 4.55832 19.7684C4.99322 20.2293 5.59846 20.4909 6.23187 20.492H15.0938C15.7274 20.4909 16.3327 20.2293 16.7674 19.7684C17.2043 19.3088 17.4544 18.6682 17.4544 17.9862V6.4462C18.3229 6.21567 18.8857 5.3766 18.7695 4.48539C18.6532 3.59437 17.8941 2.92784 16.9953 2.92766H14.5973V2.34218C14.6 1.84983 14.4053 1.37705 14.0568 1.02924C13.7082 0.681615 13.2347 0.488041 12.7424 0.492066H8.5833C8.09095 0.488041 7.61744 0.681615 7.2689 1.02924C6.92036 1.37705 6.72569 1.84983 6.72843 2.34218V2.92766H4.33035C3.43164 2.92784 2.67253 3.59437 2.55617 4.48539C2.43999 5.3766 3.00278 6.21567 3.8713 6.4462ZM15.0938 19.5552H6.23187C5.43105 19.5552 4.80806 18.8673 4.80806 17.9862V6.48736H16.5176V17.9862C16.5176 18.8673 15.8946 19.5552 15.0938 19.5552ZM7.6652 2.34218C7.66209 2.09829 7.75796 1.86355 7.93104 1.69138C8.10394 1.51921 8.33923 1.42462 8.5833 1.42883H12.7424C12.9865 1.42462 13.2218 1.51921 13.3947 1.69138C13.5677 1.86337 13.6636 2.09829 13.6605 2.34218V2.92766H7.6652V2.34218ZM4.33035 3.86442H16.9953C17.461 3.86442 17.8384 4.24187 17.8384 4.70751C17.8384 5.17315 17.461 5.5506 16.9953 5.5506H4.33035C3.86471 5.5506 3.48726 5.17315 3.48726 4.70751C3.48726 4.24187 3.86471 3.86442 4.33035 3.86442Z"
                            fill="#000814" />
                          <path
                            d="M10.6637 7.7381C10.405 7.7381 10.1953 7.94777 10.1953 8.20648V17.0589C10.1953 17.3174 10.405 17.5273 10.6637 17.5273C10.9224 17.5273 11.1321 17.3174 11.1321 17.0589V8.20648C11.1321 7.94777 10.9224 7.7381 10.6637 7.7381Z"
                            fill="#000814" />
                        </g>
                        <defs>
                          <clipPath id="clip0_502_10609">
                            <rect width="20" height="20" fill="white" transform="translate(0.667969 0.492065)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </li>
                </ul>
                <NuxtLink class="header__store-products-btn" to="/basked">Buy Now</NuxtLink>
              </div>
            </div>
          </div>
          </div>
          

        </section>
        <section class="bottom-header">
          <NuxtLink class="bottom-header-link">
            Main page
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Gasoline Generator
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Inventor Generator
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Diesel generator
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Stabilizer
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Karcher stabilizer
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Concrete geshalka
          </NuxtLink>
          <NuxtLink class="bottom-header-link">
            Gaseous stabilizator
          </NuxtLink>
        </section>

      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="container">
      <section class="footer">
        <div class="footer__wrapper">
          <div class="footer__about">
            <h3 class="footer__about-title">About us</h3>
            <p class="footer__about-text">
              "Generator House" is a product sales company
              dedicated to providing quality products to our
              customers. our team works tirelessly to ensure
              that each of our products meets the highest
              standards. Our main goal is software development.
              <br>
              <br>
              <i><b>Our Mission</b></i>
              <br>
              Our mission is to make the shopping process easy
              and enjoyable for our customers. We always strive
              to provide our customers with the highest level of
              service and always value their feedback.
            </p>
          </div>
          <div class="footer__categories">
            <h3 class="footer__categories-title">Categories</h3>
            <NuxtLink class="footer__categories-link" :to="'/category/657aef6f7633bfd3cdb02765'">Karcher stabilizator
            </NuxtLink>
            <NuxtLink class="footer__categories-link" :to="'/category/657aef9a7633bfd3cdb02766'">Motokultivator</NuxtLink>
            <NuxtLink class="footer__categories-link" :to="'/category/657aefb47633bfd3cdb02767'">Betona meshalka
            </NuxtLink>
            <NuxtLink class="footer__categories-link" :to="'/category/657aefcd7633bfd3cdb02768'">Invertor Generator
            </NuxtLink>
            <NuxtLink class="footer__categories-link" :to="'/category/657aefe47633bfd3cdb02769'">Benzinli generator
            </NuxtLink>
            <NuxtLink class="footer__categories-link" :to="'/category/657aeff97633bfd3cdb0276a'">Dizelni generator
            </NuxtLink>
            <NuxtLink class="footer__categories-link" :to="'/category/657af00c7633bfd3cdb0276b'">Gazvi generator
            </NuxtLink>
          </div>
          <div class="footer__contact-wrapper">
            <h3 class="footer__categories-title">Contacts</h3>
            <span class="footer__contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M20.3583 26.5418C19.04 26.5418 17.6516 26.2268 16.2166 25.6202C14.8166 25.0252 13.405 24.2085 12.0283 23.2168C10.6633 22.2135 9.34498 21.0935 8.09665 19.8685C6.85998 18.6202 5.73998 17.3018 4.74831 15.9485C3.74498 14.5485 2.93998 13.1485 2.36831 11.7952C1.76165 10.3485 1.45831 8.9485 1.45831 7.63016C1.45831 6.72016 1.62165 5.85683 1.93665 5.05183C2.26331 4.2235 2.78831 3.4535 3.49998 2.7885C4.39831 1.90183 5.42498 1.4585 6.52165 1.4585C6.97665 1.4585 7.44331 1.5635 7.83998 1.75016C8.29498 1.96016 8.67998 2.27516 8.95998 2.69516L11.6666 6.51016C11.9116 6.8485 12.0983 7.17516 12.2266 7.50183C12.3783 7.85183 12.46 8.20183 12.46 8.54016C12.46 8.9835 12.3316 9.41516 12.0866 9.8235C11.9116 10.1385 11.6433 10.4768 11.305 10.8152L10.5116 11.6435C10.5233 11.6785 10.535 11.7018 10.5466 11.7252C10.6866 11.9702 10.9666 12.3902 11.5033 13.0202C12.075 13.6735 12.6116 14.2685 13.1483 14.8168C13.8366 15.4935 14.4083 16.0302 14.945 16.4735C15.61 17.0335 16.0416 17.3135 16.2983 17.4418L16.275 17.5002L17.1266 16.6602C17.4883 16.2985 17.8383 16.0302 18.1766 15.8552C18.8183 15.4585 19.635 15.3885 20.4516 15.7268C20.755 15.8552 21.0816 16.0302 21.4316 16.2752L25.305 19.0285C25.7366 19.3202 26.0516 19.6935 26.2383 20.1368C26.4133 20.5802 26.495 20.9885 26.495 21.3968C26.495 21.9568 26.3666 22.5168 26.1216 23.0418C25.8766 23.5668 25.5733 24.0218 25.1883 24.4418C24.5233 25.1768 23.8 25.7018 22.96 26.0402C22.155 26.3668 21.28 26.5418 20.3583 26.5418ZM6.52165 3.2085C5.87998 3.2085 5.28498 3.4885 4.71331 4.0485C4.17665 4.55016 3.80331 5.0985 3.56998 5.6935C3.32498 6.30016 3.20831 6.94183 3.20831 7.63016C3.20831 8.71516 3.46498 9.8935 3.97831 11.1068C4.50331 12.3435 5.23831 13.6268 6.17165 14.9102C7.10498 16.1935 8.16665 17.4418 9.33331 18.6202C10.5 19.7752 11.76 20.8485 13.055 21.7935C14.315 22.7152 15.61 23.4618 16.8933 23.9985C18.8883 24.8502 20.755 25.0485 22.295 24.4068C22.89 24.1618 23.415 23.7885 23.8933 23.2518C24.1616 22.9602 24.3716 22.6452 24.5466 22.2718C24.6866 21.9802 24.7566 21.6768 24.7566 21.3735C24.7566 21.1868 24.7216 21.0002 24.6283 20.7902C24.5933 20.7202 24.5233 20.5918 24.3016 20.4402L20.4283 17.6868C20.195 17.5235 19.985 17.4068 19.7866 17.3252C19.53 17.2202 19.425 17.1152 19.0283 17.3602C18.795 17.4768 18.585 17.6518 18.3516 17.8852L17.465 18.7602C17.01 19.2035 16.31 19.3085 15.7733 19.1102L15.4583 18.9702C14.98 18.7135 14.42 18.3168 13.8016 17.7918C13.2416 17.3135 12.635 16.7535 11.9 16.0302C11.3283 15.4468 10.7566 14.8285 10.1616 14.1402C9.61331 13.4985 9.21665 12.9502 8.97165 12.4952L8.83165 12.1452C8.76165 11.8768 8.73831 11.7252 8.73831 11.5618C8.73831 11.1418 8.88998 10.7685 9.18165 10.4768L10.0566 9.56683C10.29 9.3335 10.465 9.11183 10.5816 8.9135C10.675 8.76183 10.71 8.6335 10.71 8.51683C10.71 8.4235 10.675 8.2835 10.6166 8.1435C10.535 7.95683 10.4066 7.74683 10.2433 7.52516L7.53665 3.6985C7.41998 3.53516 7.27998 3.4185 7.10498 3.33683C6.91831 3.25516 6.71998 3.2085 6.52165 3.2085ZM16.275 17.5118L16.0883 18.3052L16.4033 17.4885C16.345 17.4768 16.2983 17.4885 16.275 17.5118Z"
                  fill="#FFD60A" />
              </svg>
              <a class="footer__contact-link" target="_blank" href="tel:+998934729335">+998 93 472 93 35</a>
            </span>
            <span class="footer__contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M19.8333 24.7918H8.16665C3.90831 24.7918 1.45831 22.3418 1.45831 18.0835V9.91683C1.45831 5.6585 3.90831 3.2085 8.16665 3.2085H16.3333C16.8116 3.2085 17.2083 3.60516 17.2083 4.0835C17.2083 4.56183 16.8116 4.9585 16.3333 4.9585H8.16665C4.82998 4.9585 3.20831 6.58016 3.20831 9.91683V18.0835C3.20831 21.4202 4.82998 23.0418 8.16665 23.0418H19.8333C23.17 23.0418 24.7916 21.4202 24.7916 18.0835V12.2502C24.7916 11.7718 25.1883 11.3752 25.6666 11.3752C26.145 11.3752 26.5416 11.7718 26.5416 12.2502V18.0835C26.5416 22.3418 24.0916 24.7918 19.8333 24.7918Z"
                  fill="#FFD60A" />
                <path
                  d="M13.9998 15.0152C13.0198 15.0152 12.0281 14.7119 11.2698 14.0936L7.61809 11.1769C7.24476 10.8736 7.17477 10.3252 7.4781 9.95189C7.78143 9.57856 8.32975 9.50857 8.70308 9.8119L12.3548 12.7286C13.2414 13.4402 14.7464 13.4402 15.6331 12.7286L17.0097 11.6319C17.3831 11.3286 17.9431 11.3869 18.2348 11.7719C18.5381 12.1452 18.4798 12.7052 18.0948 12.9969L16.7181 14.0936C15.9714 14.7119 14.9798 15.0152 13.9998 15.0152Z"
                  fill="#FFD60A" />
                <path
                  d="M22.75 10.2083C20.6616 10.2083 18.9583 8.505 18.9583 6.41667C18.9583 4.32833 20.6616 2.625 22.75 2.625C24.8383 2.625 26.5416 4.32833 26.5416 6.41667C26.5416 8.505 24.8383 10.2083 22.75 10.2083ZM22.75 4.375C21.63 4.375 20.7083 5.29667 20.7083 6.41667C20.7083 7.53667 21.63 8.45833 22.75 8.45833C23.87 8.45833 24.7916 7.53667 24.7916 6.41667C24.7916 5.29667 23.87 4.375 22.75 4.375Z"
                  fill="#FFD60A" />
              </svg>
              <a class="footer__contact-link" targetr="_blank"
                href="mailto:Generatorhouse@gmail.com">Generatorhouse@gmail.com</a>
            </span>
            <span class="footer__contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 16.5315C11.515 16.5315 9.48499 14.5132 9.48499 12.0165C9.48499 9.51985 11.515 7.51318 14 7.51318C16.485 7.51318 18.515 9.53152 18.515 12.0282C18.515 14.5249 16.485 16.5315 14 16.5315ZM14 9.26318C12.4833 9.26318 11.235 10.4999 11.235 12.0282C11.235 13.5565 12.4717 14.7932 14 14.7932C15.5283 14.7932 16.765 13.5565 16.765 12.0282C16.765 10.4999 15.5167 9.26318 14 9.26318Z"
                  fill="#FFD60A" />
                <path
                  d="M14 26.5535C12.2734 26.5535 10.535 25.9002 9.18169 24.6052C5.74002 21.2918 1.93669 16.0068 3.37169 9.7185C4.66669 4.0135 9.64836 1.4585 14 1.4585C14 1.4585 14 1.4585 14.0117 1.4585C18.3634 1.4585 23.345 4.0135 24.64 9.73016C26.0634 16.0185 22.26 21.2918 18.8184 24.6052C17.465 25.9002 15.7267 26.5535 14 26.5535ZM14 3.2085C10.605 3.2085 6.24169 5.01683 5.08669 10.1035C3.82669 15.5985 7.28002 20.3352 10.4067 23.3335C12.425 25.2818 15.5867 25.2818 17.605 23.3335C20.72 20.3352 24.1734 15.5985 22.9367 10.1035C21.77 5.01683 17.395 3.2085 14 3.2085Z"
                  fill="#FFD60A" />
              </svg>
              <a class="footer__contact-link" target="_blank" href="https://maps.app.goo.gl/gZYbQJWEhLAwo4kH8">Toshkent
                Xalqa Avtomabil Yo'li</a>
            </span>
            <h3 class="footer__messenger-title">Follow us</h3>
            <div class="footer__messengers-wrapper">
              <a class="footer__messenger" href="https://www.instagram.com/generator_house555/" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_119_6260)">
                    <path
                      d="M25.302 5.92139C24.8736 5.92139 24.5251 6.26995 24.5251 6.69826C24.5251 7.12657 24.8736 7.47514 25.302 7.47514C25.7303 7.47514 26.0788 7.12664 26.0788 6.69826C26.0788 6.26989 25.7303 5.92139 25.302 5.92139Z"
                      fill="#FFD60A" />
                    <path
                      d="M16 9.11279C12.2024 9.11279 9.11273 12.2024 9.11273 16C9.11273 19.7977 12.2024 22.8874 16 22.8874C19.7977 22.8874 22.8873 19.7977 22.8873 16.0001C22.8873 12.2025 19.7977 9.11279 16 9.11279Z"
                      fill="#FFD60A" />
                    <path
                      d="M23.2277 0H8.77231C3.93525 0 0 3.93525 0 8.77238V23.2277C0 28.0648 3.93525 32 8.77231 32H23.2277C28.0648 32 32 28.0648 32 23.2277V8.77238C32 3.93525 28.0648 0 23.2277 0ZM16 24.777C11.1603 24.777 7.22306 20.8397 7.22306 16C7.22306 11.1603 11.1604 7.22312 16 7.22312C20.8396 7.22312 24.777 11.1604 24.777 16C24.777 20.8396 20.8396 24.777 16 24.777ZM25.3019 9.36475C23.8316 9.36475 22.6353 8.1685 22.6353 6.69812C22.6353 5.22775 23.8316 4.03144 25.3019 4.03144C26.7723 4.03144 27.9686 5.22769 27.9686 6.69806C27.9686 8.16844 26.7723 9.36475 25.3019 9.36475Z"
                      fill="#FFD60A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_119_6260">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a class="footer__messenger" href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_119_6257)">
                    <path
                      d="M16 0C7.16342 0 0 7.16342 0 16C0 24.8366 7.16342 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16342 24.8366 0 16 0ZM22.1041 8.14813L19.8911 8.14911C18.1557 8.14911 17.8202 8.97375 17.8202 10.1837V12.8517H21.9584L21.9564 17.0305H17.8205V27.7544H13.5042V17.0305H9.89594V12.8517H13.5042V9.7699C13.5042 6.19343 15.6893 4.24561 18.8795 4.24561L22.1044 4.25052L22.1041 8.14813Z"
                      fill="#FFD60A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_119_6257">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a class="footer__messenger" href="http://x.com" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#FFD60A" />
                  <path
                    d="M21.7236 7.0625H24.756L18.1312 14.6342L25.9247 24.9375H19.8225L15.043 18.6886L9.57414 24.9375H6.53998L13.6258 16.8387L6.14948 7.0625H12.4066L16.7269 12.7743L21.7236 7.0625ZM20.6594 23.1225H22.3396L11.4936 8.78217H9.69056L20.6594 23.1225Z"
                    fill="white" />
                </svg>
              </a>
              <a class="footer__messenger" href="https://t.me/Jasur_generator555" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_119_6270)">
                    <path
                      d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z"
                      fill="#FFD60A" />
                    <path
                      d="M4.36699 16.6767L9.15616 18.4641L11.0098 24.4254C11.1283 24.8071 11.5951 24.9481 11.9049 24.6947L14.5745 22.5187C14.8544 22.2906 15.2528 22.2793 15.5451 22.4916L20.36 25.9873C20.6915 26.228 21.1611 26.0465 21.2443 25.646L24.7714 8.6803C24.8621 8.24267 24.4322 7.87773 24.0157 8.03881L4.36157 15.6208C3.87652 15.8079 3.88065 16.4945 4.36699 16.6767ZM10.7111 17.5128L20.0703 11.7483C20.2384 11.645 20.4116 11.8726 20.267 12.0066L12.543 19.1865C12.2714 19.4391 12.0964 19.7775 12.0466 20.1445L11.7837 22.0945C11.7487 22.3548 11.383 22.3806 11.3111 22.1285L10.2992 18.5728C10.1835 18.1674 10.3523 17.7342 10.7111 17.5128Z"
                      fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_119_6270">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <span class="footer__map-wrapper">
              <p class="footer__map-text">Toshkent Xalqa Avtomabil Yo'li</p>
              <a class="footer__map-link" href="https://maps.app.goo.gl/gZYbQJWEhLAwo4kH8" target="_blank"
                rel="noopener noreferrer">
                <p class="footer__map">Map</p>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="fi_11515688" clip-path="url(#clip0_229_3343)">
                    <g id="Group">
                      <path id="Vector"
                        d="M7.9987 0.5C4.87403 0.5 2.33203 3.042 2.33203 6.16667C2.33203 11.6787 7.59937 14.9793 7.82404 15.1173C7.87737 15.15 7.93804 15.1667 7.9987 15.1667C8.05937 15.1667 8.12004 15.15 8.17337 15.1173C8.39804 14.9793 13.6654 11.6787 13.6654 6.16667C13.6654 3.042 11.1234 0.5 7.9987 0.5ZM7.9987 9.16667C6.3447 9.16667 4.9987 7.82067 4.9987 6.16667C4.9987 4.51267 6.3447 3.16667 7.9987 3.16667C9.6527 3.16667 10.9987 4.51267 10.9987 6.16667C10.9987 7.82067 9.6527 9.16667 7.9987 9.16667Z"
                        fill="white" />
                      <path id="Vector_2"
                        d="M11.3987 13.4334C11.2867 13.4121 11.1727 13.4487 11.094 13.5307C9.78133 14.9081 8.57466 15.6541 8.52332 15.6854C8.36599 15.7827 8.18466 15.8334 7.99999 15.8334C7.81532 15.8334 7.63399 15.7821 7.47599 15.6854C7.42532 15.6541 6.21865 14.9081 4.90598 13.5307C4.82798 13.4494 4.71198 13.4114 4.60132 13.4334C3.09665 13.7241 2.33398 14.1947 2.33398 14.8334C2.33398 16.1521 6.04065 16.5001 8.00066 16.5001C9.96066 16.5001 13.6673 16.1521 13.6673 14.8334C13.666 14.1947 12.9027 13.7241 11.3987 13.4334Z"
                        fill="white" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_229_3343">
                      <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/store/counter'
import { useCategoriesStore } from '~/store/categories';
import { useProductsStore } from '~/store/products';

const counterStore = useCounterStore()
counterStore.getCounter()

const productsStore = useProductsStore()
productsStore.getProducts()

const categoriesStore = useCategoriesStore()
categoriesStore.getCategories()

const searchProducts = ref([])

const search = async (e) => {
  e.preventDefault()
  await navigateTo(`/search/${searchInput.value}`)
}

const searchProductsFn = () => {
  const filteredProducts = productsStore.data.products.filter(product => {
    return product.product_title.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  searchProducts.value = filteredProducts;
  searchList.classList.add('search-products--open')
}

const openCategories = () => {
  btnWrapper.classList.toggle('header__category-btn-wrapper--active')
}

const closeCategories = (e) => {
  if (e.target.id !== 'openCategories') {
    btnWrapper.classList.remove('header__category-btn-wrapper--active')
    searchList.classList.remove('search-products--open')
  }
}

const removeBasked = (e) => {
  const id = e.target.closest('.header__store-item').id;
  let basked = JSON.parse(localStorage.getItem('basked'))
  basked = basked.filter(e => e._id !== id)
  localStorage.setItem('basked', JSON.stringify(basked))
  counterStore.deleteOne('basked')
  productsStore.data.products.forEach(element => {
    if (element._id == id) {
      element.inCart = false
    }
  })
  productsStore.updateProductIBasked(id, false)
}


</script>
