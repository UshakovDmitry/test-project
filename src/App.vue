<template>
 <main class="container">
   <ComponentStart></ComponentStart>
 </main>
</template>

<script setup>
import ComponentStart from './components/ComponentStart.vue'


</script>

<style >
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.container {
  max-width: 1100px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 100vh;
}
</style>
