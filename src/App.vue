<template>
  <div>
    <div>quantity likes: <strong>{{ likes }}</strong></div>
    <div>quantity dislikes: <strong>{{ dislikes }}</strong></div>
    <div>
      <button @click="addLike">
        like
      </button>
      <button @click="addDislike">
        dislike
      </button>
    </div>
  </div>
  
 
</template>


<script>
export default {
  data() {
    return{
      likes: 10,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes++;
    },
    addDislike() {
      this.dislikes++;
    }
  },
}
</script>
<style>
  
</style>