<template>
  <modal-view v-if="modalStatus" :product="product" @closeModal="closeModal" />
  <div class="menu">
    <a href="" v-for="(메뉴, i) in 메뉴들" :key="i">{{ 메뉴 }}</a>
  </div>
  <div v-for="(p, i) in products" :key="i">
    <product-detail :product="p" @openModal="openModal(p)" />
  </div>
</template>

<script>
import importData from "@/assets/oneroom";
import ModalView from "@/components/ModalView";
import ProductDetail from "@/components/ProductDetail.vue";

export default {
  name: "App",
  data() {
    return {
      modalStatus: false,
      메뉴들: ["Home", "Shop", "About"],
      products: importData,
      product: null,
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
  },
  components: {
    ModalView,
    ProductDetail,
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
</style>
