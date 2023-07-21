<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Layout>
      <section class="about">
        <h1 class="about__title">О нас</h1>
        <p class="about__description">
          Мы - небольшая команда разработчиков, которая тесно сотрудничает и учится у Яндекса.
          Наша любовь к технологиям, особенно к Яндексу, вдохновляет нас на создание
          удивительных продуктов и сервисов.
        </p>
        <img class="about__image" src="path/to/image.jpg" alt="О нас" />
      </section>
    </Layout>
  </template>
  
  <script setup>
  import Layout from '@/layouts/default.vue';
  </script>
  
  <style >
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  
  .about__title {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 1em;
  }
  
  .about__description {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 2em;
  }
  
  .about__image {
    width: 80%;
    max-width: 600px;
  }
  </style>
  