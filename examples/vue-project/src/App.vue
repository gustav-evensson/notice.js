<script setup>
import noticeComponent from './components/noticeComponent.vue';
</script>

<template>
  <div class="home">
    <notice-component ref="noticeContainer" class="dark bottom-center"/>
    <button @click="$refs.noticeContainer.createNotice('test from parent', 'alert', 'persisted')">Create Notice</button>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button{
    background-color: white;
    color: black;
    border: none;
    font-size: 20px;
    border-radius: 12px;
    padding: 10px 30px;
  }
</style>
