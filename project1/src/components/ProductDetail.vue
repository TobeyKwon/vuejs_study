<template>
  <div>
    <img :src="product.image" class="room-img" />
    <h4 class="red" :style="style" @click="$emit('openModal')">
      {{ product.title }} 원룸
    </h4>
    <p>{{ product.price }} 만원</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style></style>
