<template>
  <div>
    <post-comp v-for="(post, idx) in posts" :key="idx" :post="post" />
  </div>
</template>

<script>
import PostComp from "./PostComp.vue";

export default {
  props: {
    posts: Object,
  },
  components: {
    PostComp,
  },
};
</script>

<style></style>
