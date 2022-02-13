<template>
  <div class="post" v-for="post in posts">
    <div><strong>Title: </strong>{{ post.title }}</div>
    <div><strong>Description: </strong>{{ post.desc }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>
.post {
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #41B883;
  border-radius: 20px;
}
</style>