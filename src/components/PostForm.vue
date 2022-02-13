<template>
  <form @submit.prevent class="form">
    <h2>Add new post</h2>
    <my-input v-model="post.title" placeholder="Title" ></my-input>
    <my-input v-model="post.description" placeholder="Descriptoin" ></my-input>
    <my-button
      @click="createPost"
      class="btn-right btn-mt" 
      type="submit">
      Add post
    </my-button>
  </form>
</template>

<script>

  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
          title: '',
          body: '',
        }
      },
    }
  }
</script>

<style scoped>
.form {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>