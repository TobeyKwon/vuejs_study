<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountPolicy }}% 할인</h4>
  </div>
</template>
<script>
export default {
  data() {
    return { discountPolicy: 30 };
  },
  mounted() {
    let interval = setInterval(() => {
      this.discountPolicy -= 10;
      if (this.discountPolicy == 0) {
        clearInterval(interval);
      }
    }, 1000);
  },
};
</script>
<style>
.discount {
  background-color: rgba(238, 238, 238, 0.592);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
