<template>
  <img :src="product.image" class="room-img" />
  <h4 class="red" :style="style" @click="openModal">
    {{ product.title }} 원룸
  </h4>
  <p>{{ product.price }} 만원</p>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    openModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style></style>
