<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',
  }
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background-color: #41B883;
  color: white;
  border: 0;
}
.btn-right {
  align-self: flex-end;
}
.btn-mt {
  margin-top: 15px;
}
</style>