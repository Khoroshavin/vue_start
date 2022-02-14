<template>
  <div>
    <h1>Page with posts</h1>

    <my-input v-model="searchQuery" placeholder="Search" />

    <div class="app__btns">
      <my-button @click="showModal" class="btn">
        Add post
      </my-button>
      <my-select v-model="selectedSort" v-bind:options="sortOptions" />
    </div>

    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- PAGINATION -->
    <!-- <div class="page__wrapper">
    <div
      v-for="pageNum in totalPages"
      :key="pageNum"
      class="page"
      :class="{
        'page-curent': page === pageNum
      }"
      @click="changePage(pageNum)"
      >
      {{ pageNum }}
      </div>
  </div> -->

    <my-modal v-model:show="modalVisible">
      <post-form @create='createPost' />
    </my-modal>


  </div>
</template>

<script>
  // импортируем компоненты
  import PostForm from "@/components/PostForm";
  import PostList from "@/components/PostList";
  import axios from "axios";

  export default {
    // регистрируем компоненты
    components: {
      PostForm,
      PostList
    },
    data() {
      return {
        posts: [],
        modalVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: '10',
        totalPages: 0,
        sortOptions: [{
            value: 'title',
            name: 'Sort by title'
          },
          {
            value: 'body',
            name: 'Sort by description'
          },
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
      // PAGINATION
      // changePage(pageNum) {
      //   this.page = pageNum;
      // },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
        } catch (error) {
          alert('Error' + error)
        } finally {
          this.isPostsLoading = false;
        }

      },
      async loadMorePosts() {
        try {
          this.page +=1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          // добавляем посты в конец массива
          this.posts = [...this.posts, ...response.data];
        } catch (error) {
          alert('Error' + error)
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
      // PAGINATION
      // page() {
      //   this.fetchPosts()
      // }
    }
  }
</script>
<style>
  .app__btns {
    margin: 15px 0 30px;
    display: flex;
    justify-content: space-between;
  }

  .page__wrapper {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  .page {
    margin: 5px;
    padding: 10px;
    border: 1px solid #41B883;
  }

  .page-curent {
    background-color: #41B883;
    color: #fff;
  }

  .observer {
    height: 35px;
  }
</style>