<template>
  <div v-if="posts.length > 0">
    <h1>Post list</h1>

    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>


  </div>
  <h1 v-else style="color: red">
    Список постов пуст
  </h1>
</template>

<script>
import PostItem from './PostItem.vue'
  export default {
  components: { PostItem },
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.post-list-move {
  transition: transform .4s ease;
}
</style>