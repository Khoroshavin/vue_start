<template>
  <div class="app">
  <h1>Page with posts</h1>

  <my-input
    v-model="searchQuery"
    placeholder="Search"
  />

  <div class="app__btns">
    <my-button 
      @click="showModal"
      class="btn">
      Add post
    </my-button>
    <my-select
      v-model="selectedSort"
      v-bind:options="sortOptions"
    />
  </div>
  
  <post-list 
    :posts="sortedAndSearchedPosts"
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
import MyInput from './components/UI/MyInput.vue';

export default {
  // регистрируем компоненты
  components: {PostForm, PostList},
  data() {
    return{
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'title', name: 'Sort by title'},
        {value: 'body', name: 'Sort by description'}
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    
  }
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

.app__btns {
  margin: 15px 0 30px;
  display: flex;
  justify-content: space-between;
}
</style>