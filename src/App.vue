<template>
  <div class="app">
  <h1>Page with posts</h1>
  <my-button 
    @click="showModal"
    class="btn-mtbbr">
    Add post
  </my-button>
  
  <post-list 
    :posts="posts"
    @remove="removePost"
    v-if="!isPostsLoading"
  />
  <div v-else>Loading...</div>

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
import axios    from "axios";

export default {
  // регистрируем компоненты
  components: {
    PostForm, PostList
  },
  data() {
    return{
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
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
    },
    async fetchPosts() {
      try { 
        this.isPostsLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
      }
      catch (error) {
        alert('Error' + error)
      }
      finally {
        this.isPostsLoading = false;
      }

    },
  },
  mounted() {
    this.fetchPosts();
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