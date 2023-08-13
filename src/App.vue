<template>
  <router-view />
</template>

<script setup>
</script>

<style>
@font-face {
  font-family: "Fredoka One";
  src: url("./assets/fonts/Cera-Pro-Regular-Italic.ttf");
}
/* Глобальные стили и стили по умолчанию */
html,
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(197, 167, 240, 0.64);
}
h1,
h2,
p,
span,
div,
button,
figcaption {
  font-family: "Fredoka One", cursive;
}
</style>
