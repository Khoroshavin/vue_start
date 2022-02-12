<template>
  <div class="app">

    <div></div>


    <form @submit.prevent class="form">
      <h4>Add new post</h4>
      <input 
        v-bind:value="title" 
        @input="title = $event.target.value "
        class="input" 
        type="text" 
        placeholder="Title">
      <input 
        v-bind:value="description"
        @input="description = $event.target.value " 
        class="input" 
        type="text" 
        placeholder="Descriptoin">
      <button 
        @click="createPost" 
        class="btn" 
        type="submit">Add post</button>
    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.desc }}</div>
    </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return{
      posts: [
        {id: 1, title: 'Post about JS 1', desc: 'JavaScript 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: 2, title: 'Post about JS 2', desc: 'JavaScript 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: 3, title: 'Post about JS 3', desc: 'JavaScript 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      ],
      title: '',
      description: '',
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

.form {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

.post {
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #41B883;
  border-radius: 20px;
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