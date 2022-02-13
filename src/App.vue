<template>
  <div class="app">
  <!-- подключаем компоненты -->
  <post-form
    @create='createPost'
  />
  <post-list 
    :posts="posts"
  />


  </div>
</template>


<script>
// импортируем компоненты
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  // регистрируем компоненты
  components: {
    PostForm, PostList
  },
  data() {
    return{
      posts: [
        {id: 1, title: 'Post about JS 1', description: 'JavaScript 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: 2, title: 'Post about JS 2', description: 'JavaScript 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: 3, title: 'Post about JS 3', description: 'JavaScript 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}
</style>