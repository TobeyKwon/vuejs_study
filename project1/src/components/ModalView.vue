<template>
  <div class="black-bg">
    <div class="white-bg">
      <button class="close-btn" @click="closeModal">x</button>
      <img :src="product.image" class="room-img" />
      <h4>{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <p>{{ product.price }} 만원</p>
      <input v-model.number="month" />
      <p>{{ month }}개월 선택함 : {{ product.price }} 원</p>
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
  data() {
    return {
      month: 3,
    };
  },
  components: {
    DiscountView,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  watch: {
    month(a) {
      if (!isNaN(a)) {
        alert("숫자만 입력해주세요");
        this.month = 3;
      }
    },
  },
  beforeUpdate() {
    if (this.month < 2) {
      alert(`2개월 이상 선택해주세요.`);
    }
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
