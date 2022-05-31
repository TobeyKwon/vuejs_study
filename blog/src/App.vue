<template>
  <header-nav />
  <router-link to="/">홈</router-link>&nbsp;
  <router-link to="/posts">리스트</router-link>
  <router-view :posts="posts"></router-view>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import posts from "./assets/list";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
  data() {
    return {
      posts,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
