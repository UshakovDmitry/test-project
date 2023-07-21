<template>
  <section class="main">
    <h1 class="main__title">Добро пожаловать на наш сайт!</h1>
    <p class="main__container">
      Мы - небольшая команда разработчиков, которая тесно сотрудничает и учится
      у Яндекса. Наша любовь к технологиям, особенно к Яндексу, вдохновляет нас
      на создание удивительных продуктов и сервисов.
    </p>
  </section>
</template>

<script setup></script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.main__title {
  font-size: 22px;
  color: #333;
}

.main__container {
  display: grid;
}
</style>
