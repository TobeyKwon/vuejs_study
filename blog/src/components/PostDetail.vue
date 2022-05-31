<template>
  <div class="card" style="width: 18rem">
    <h1>상세페이지</h1>
    <!-- <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.date }}</h6>
      <p class="card-text">
        {{ post.content }}
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style></style>
