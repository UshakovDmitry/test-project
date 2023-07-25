<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form class="feedback-form" @submit.prevent="submitForm">
    <h2 class="feedback-form__title">Обратная связь</h2>

    <label class="feedback-form__label" for="message">Ваше сообщение</label>
    <textarea
      class="feedback-form__textarea"
      id="message"
      v-model="localFeedbackMessage"
      placeholder="Ваше сообщение..."
    ></textarea>

    <button
      class="feedback-form__submit-button"
      type="submit"
      @click="sendFeedback"
    >
      Отправить
    </button>

  </form>
</template>

<script setup>
import { ref, watchEffect,defineProps,defineEmits } from 'vue';

const props = defineProps({
  feedbackMessage: {
    type: String,
    default: ''
  }
});

let localFeedbackMessage = ref(props.feedbackMessage);

watchEffect(() => {
  localFeedbackMessage.value = props.feedbackMessage;
});

const emit = defineEmits(['sendFeedback', 'update:feedbackMessage']);

const sendFeedback = () => {
  emit('sendFeedback');
  emit('update:feedbackMessage', localFeedbackMessage.value);
};

const submitForm = () => {
  sendFeedback();
};
</script>

<!-- Ваш стиль... -->


<!-- Ваш стиль... -->




<style scoped>
.feedback-form {
  width: 560px;
  margin: 50px auto;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  font-family: Arial, sans-serif;
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

.feedback-form__textarea {
  display: block;
  width: 100%;
  height: 100px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.07);
  padding: 0 10px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  resize: none;
  transition: all 0.3s ease;
}

.feedback-form__textarea::placeholder {
  color: #e5e5e5;
}

.feedback-form__textarea:hover,
.feedback-form__textarea:focus {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
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
  transition: all 0.3s ease;
}

.feedback-form__submit-button:hover {
  background-color: #f8f8f8;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.feedback-form__submit-button:active {
  transform: scale(0.98);
}
</style>
