<template>
  <form @submit.prevent class="form">
    <h4>Add new post</h4>
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
    <button
      @click="createPost"
      class="btn" 
      type="submit">Add post</button>
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
    },
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

.btn {
  margin-top: 15px;
  padding: 10px 15px;
  align-self: flex-end;
  background-color: #41B883;
  color: white;
  border: 0;
}
</style>