<template>
    <div class="body">
      <div class="header-layout">
        <img src="/static/assets/images/logo.png" alt="Логотип компании" class="amount-image amount-image_size" />
        <p class="title">Резервное подтверждение выдачи заказа</p>
      </div>
  
      <div class="container">
        <h2 class="title">Подтверждение заказа</h2>
        <p class="description">Введите SMS-код, отправленный на ваш номер</p>
  
        <div class="form__group input__group">
          <input v-for="n in 4" :key="n" ref="inputs" type="tel" class="form__input" v-model="inputValues[n]" @input="onInputEvent(n, $event)" @keydown="handleKeyDown" maxlength="1" />
        </div>
  
        <p v-if="showWarning" class="input-warning">Не допустимый формат</p>
        
        <div class="resend-code">
          <p class="resend-code__text">Не получили код?</p>
          <div>
            <a href="#" @click.prevent="resendCode" class="resend-code__link">Отправить заново</a>
            <p v-if="isCountdownActive" class="resend-code__text">{{ resendMessage }}</p>
          </div>
        </div>
  
        <div class="form__group">
          <button :disabled="!allInputsFilled" @click="handleSubmit" class="form__button">Подтвердить по SMS</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const inputValues = ref({});
  const showWarning = ref(false);
  const isCountdownActive = ref(false);
  const resendMessage = ref('');
  
  const allInputsFilled = computed(() => Object.values(inputValues.value).every(val => val !== ''));
  
  const inputs = ref(null); // для массива input элементов
  
  onMounted(() => {
    startCountdown();
  });
  
  function handleKeyDown(event) {
    let keyCode = event.keyCode || event.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 46 && keyCode !== 13) {
      showWarning.value = true;
      event.preventDefault();
    } else {
      showWarning.value = false;
      if (keyCode === 13) {
        handleSubmit();
      }
    }
  }
  
  function onInputEvent(id, event) {
    if (event.data) {
      moveToNext(id);
    } else if (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward") {
      moveToPrev(id);
    }
  }
  
  function moveToNext(id) {
    if (id < 4 && inputs.value[id]) {
      inputs.value[id].focus();
    }
  }
  
  function moveToPrev(id) {
    if (id > 1 && inputs.value[id - 2]) {
      inputs.value[id - 2].focus();
    }
  }
  
  function startCountdown() {
    if (isCountdownActive.value) {
      return;
    }
    isCountdownActive.value = true;
    let remainingTime = 77;
    resendMessage.value = `Отправить повторно можно через ${remainingTime} секунд`;
  
    const interval = setInterval(() => {
      remainingTime--;
  
      if (remainingTime <= 0) {
        clearInterval(interval);
        isCountdownActive.value = false;
        resendMessage.value = '';
      } else {
        resendMessage.value = `Отправить повторно можно через ${remainingTime} секунд`;
      }
    }, 1000);
  }
  
  function resendCode() {
    // Здесь может быть код запроса для повторной отправки кода, если необходимо
    startCountdown();
  }
  
  function handleSubmit() {
    if (!allInputsFilled.value) return;
    // const code = Object.values(inputValues.value).join('');
    // Здесь может быть код для отправки данных формы, если необходимо
  }
  </script>
  
  
<style scoped>
.header-layout {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100px;
      margin: 0;
    }

    .form {
      width: 300px;
      margin: 0 auto;

    }

    .form__group {
      margin-bottom: 20px;
    }

    .form__button {
      cursor: pointer;
      border-radius: 8px;
      background-color: #00A153;
      color: #FFF;
      text-align: center;
      padding: 10px 24px;
      width: 100%;
      border: none;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.15px;
      margin-top: 20px;
    }

    .form__button:disabled {
      border-radius: 8px;
      background: rgba(35, 54, 45, 0.30);
      color: rgba(35, 54, 45, 0.30);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.15px;
      cursor: not-allowed;
      margin-top: 20px;

    }

    .input__group {
      display: flex;
      justify-content: center;
      gap: 16px;
      max-width: 220px;
      padding-top: 10px;
      margin: 0 auto;
    }

    .form__input {
      width: 45px;
      height: 45px;
      text-align: center;
      font-size: 24px;
      line-height: 24px;
      border-radius: 8px;
      border: 1px solid rgba(35, 54, 45, 0.12);
      background-color: #FFF;
      box-sizing: border-box;
    }

    .form__input:focus {
      border: 1px solid #00A153;
      outline: none;
    }

    .input-warning {
      color: red;
      text-align: center;
      display: none;
    }

    .body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: space-between;
      height: auto;
      width: 334px;
      padding: 16px;
      border-radius: 16px;
      border: 1px solid rgba(35, 54, 45, 0.12);
      background-color: #ffffff;
    }

    .title {
      color: #23362D;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.1px;
    }

    .description {
      margin-top: 10px;
      color: rgba(35, 53, 44, 0.6);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.4px;
    }

    .resend-code {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      align-items: center;
      width: 100%;
    }

    .resend-code__text {
      color: #23362D;
      text-align: center;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.4px;
      max-width: 150px;
    }

    .resend-code__link {
      color: #00A153;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.25px;
      text-decoration-line: underline;
    }
</style>
