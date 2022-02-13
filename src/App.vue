<template>
  <div class="app">
  <h1>Page with posts</h1>
  <my-button 
    @click="showModal"
    class="btn-mtbb">
    Add post
  </my-button>
  
  <post-list 
    :posts="posts"
    @remove="removePost"
  />

  <my-modal v-model:show="modalVisible">
    <post-form
      @create='createPost'
    />
  </my-modal>


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
      modalVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showModal() {
      this.modalVisible = true;
    }
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.app {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}
</style>