<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="about">
    <h1 class="about__title">Приватная страница, доступная после авторизации</h1>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/8ggis-ppky4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    {{ model.feedbackMessage  }}
 <FeedbackForm :feedbackMessage="model.feedbackMessage"
 @sendFeedback="viewModel.sendFeedback" />
  </section>
</template>

<script setup>
import FeedbackForm from '@/components/FeedbackForm.vue';

import MainPageModel from "./model.js";
import MainPageViewModel from "./viewModel.js";
import { ref } from "vue";
const model = ref(new MainPageModel());
const viewModel = ref(new MainPageViewModel(model.value));
</script>

<style scoped>
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
  color: #f8f5f5;
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
/* ... предыдущие стили ... */

/* ... предыдущие стили ... */

/* Стили для формы обратной связи */
.feedback-form {
  max-width: 400px;
  margin: 50px auto; /* Располагаем форму ниже по странице */
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

.feedback-form * {
  color: #fff;
  outline: none;
  border: none;
  letter-spacing: 0.5px;
}

.feedback-form__title {
  text-align: center;
  font-size: 32px;
  line-height: 42px;
  font-weight: 500;
}

.feedback-form__label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

.feedback-form__input,
.feedback-form__textarea {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.07);
  padding: 0 10px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
}

.feedback-form__textarea {
  height: 100px;
}

.feedback-form__input::placeholder,
.feedback-form__textarea::placeholder {
  color: #e5e5e5;
}

.feedback-form__submit-button {
  margin-top: 30px;
  width: 100%;
  background-color: #fff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

/* ... остальные стили ... */
</style>
