<template>
  <div>
    <!-- <div class="start" :class="{ end: modalStatus }">
      <modal-view
        v-if="modalStatus"
        :product="product"
        @closeModal="closeModal"
      />
    </div> -->
    <transition name="fade">
      <discount-view v-if="showDiscount" />
    </transition>
    <button @click="sortProducts">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <transition name="fade">
      <modal-view
        v-if="modalStatus"
        :product="product"
        @closeModal="closeModal"
      />
    </transition>

    <div class="menu">
      <a href="" v-for="(메뉴, i) in 메뉴들" :key="i">{{ 메뉴 }}</a>
    </div>
    <product-detail
      v-for="(p, i) in products"
      :key="i"
      :product="p"
      @openModal="openModal(p)"
    />
  </div>
</template>

<script>
import importData from "@/assets/oneroom";
import ModalView from "@/components/ModalView";
import ProductDetail from "@/components/ProductDetail.vue";
import DiscountView from "@/components/DiscountView.vue";

export default {
  name: "App",
  data() {
    return {
      modalStatus: false,
      메뉴들: ["Home", "Shop", "About"],
      products: importData,
      product: null,
      originalProducts: [...importData],
      showDiscount: true,
    };
  },
  methods: {
    openModal(product) {
      this.modalStatus = true;
      this.product = product;
    },
    closeModal() {
      this.modalStatus = false;
      this.product = null;
    },
    sortProducts() {
      this.products.sort((a, b) => a.price - b.price);
    },
    sortBack() {
      this.products = [...this.originalProducts];
    },
  },
  components: {
    ModalView,
    ProductDetail,
    DiscountView,
  },
  mounted() {
    setTimeout(() => {
      this.showDiscount = false;
      console.log(this);
    }, 2000);
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.close-btn {
  position: fixed;
  right: 35px;
}

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  transform: translateY(0px);
}
.fade-leave-active {
  transition: all 2s;
}
.fade-leave-to {
  transform: translateY(-1000px);
}
</style>
