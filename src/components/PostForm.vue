<template>
  <form @submit.prevent class="form">
    <h2>Add new post</h2>
    <input 
      v-model="post.title"
      class="input" 
      type="text" 
      placeholder="Title">
    <input 
      v-model="post.description"
      class="input" 
      type="text" 
      placeholder="Descriptoin">
    <my-button
      @click="createPost"
      class="btn-right btn-mt" 
      type="submit">Add post
    </my-button>
  </form>
</template>

<script>

  export default {
    data() {
      return {
        post: {
          title: '',
          description: '',
        }
      }
    },
    methods: {
      createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
          title: '',
          description: '',
        }
      },
    }
  }
</script>

<style scoped>
.form {
  margin-bottom: 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
}
.input {
  margin-top: 20px;
  padding: 10px 15px;
  border: 1px solid #34495E;
  width: 100%;
}
</style>