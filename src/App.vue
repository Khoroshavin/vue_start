<template>
  <div class="app">
  <!-- подключаем компоненты -->
  <post-form/>
  <post-list :posts="posts"/>


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
        {id: 1, title: 'Post about JS 1', desc: 'JavaScript 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: 2, title: 'Post about JS 2', desc: 'JavaScript 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: 3, title: 'Post about JS 3', desc: 'JavaScript 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      ],
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        desc: this.description,
      }
      this.posts.push(newPost);
      this.title= '';
      this.description= '';
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