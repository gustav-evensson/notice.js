<script setup>
import noticeComponent from './components/noticeComponent.vue';

import { ref } from 'vue' 
const noticeContainer = ref()

function sendNotice(){
  noticeContainer.value.createNotice('Hello from parent', 'error', 5000)
}

</script>

<template>
  <div class="home">
    <notice-component ref="noticeContainer" class="top-right slide-left"/>
    <!-- <button @click="$refs.noticeContainer.createNotice('Hello from parent', 'alert', 'persisted')">Create Notice</button> This show the ability to call the function directly from a button --> 
    <button @click="sendNotice()">Create Notice Function</button>
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
