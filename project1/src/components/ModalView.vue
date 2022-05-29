<template>
  <div class="black-bg">
    <div class="white-bg">
      <button class="close-btn" @click="closeModal">x</button>
      <img :src="product.image" class="room-img" />
      <h4>{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <p>{{ product.price }} 만원</p>
      <discount-view />
    </div>
  </div>
</template>

<script>
import DiscountView from "./DiscountView.vue";
export default {
  props: {
    product: Object,
  },
  components: {
    DiscountView,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
