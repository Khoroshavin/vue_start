<template>
  <div class="post">
    <div>
      <div><strong>Post id: </strong>{{ post.id }}</div>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
        class="btn-mr"
      >
      Open
      </my-button>
      <my-button
        @click="$emit('remove', post)"
      >
      Remove
      </my-button>
      
    </div>
  </div>
</template>

<script>

export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style scoped>
.post {
  margin-top: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #41B883;
  border-radius: 15px;
}
.post__btns {
  display: flex;
  margin-left: 20px;
}
</style>