<template>
  <div class="navbar">
    <div
      @click="$router.push('/')"
    >
      Vue 3
    </div>
    <div class="navbar__btns">
      <my-button
        @click="$router.push('/posts')"
        class="btn-mr"
      >Posts</my-button>
      <my-button
        @click="$router.push('/about')"
      >About app</my-button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar {
  padding: 0 15px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: 2px 2px 4px gray;
}
.navbar__btns {
  margin-left: auto;
}
</style>