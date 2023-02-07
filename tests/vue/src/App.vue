<template>     
	<button @click="notice.createNotice('Test from vue module')" >Create Notice</button>
</template>

<script setup>
import Notice from 'notice.js'
import { onMounted } from 'vue';

let notice;

onMounted(() => {
  notice = new Notice({})
})

</script>

<style>
* {
	margin: 0;
}
img {
	width: 100%;
	height: 100vh;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
}
button {
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	z-index: 10;
	background-color: white;
	border: none;
	width: 250px;
	height: 60px;
	border-radius: 6px;
	font-size: 24px;
	cursor: pointer;
}
</style>
