<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form class="register-form" @submit.prevent="handleSubmit">
    <h3 class="register-form__title">Регистрация</h3>
    <label class="register-form__label" for="username">E-mail</label>
    <input
      type="text"
      id="username"
      class="register-form__input"
      placeholder=""
      v-model="email"
    />

    <label class="register-form__label" for="password">Пароль</label>
    <input
      type="password"
      id="password"
      class="register-form__input"
      v-model="password"
      placeholder=""
    />

    <button type="submit" class="register-form__button">Зарегистрироваться</button>
    <p class="register-form__error">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps({
  errorMessage: String,
});

const emits = defineEmits(['register']);

let email = ref("");
let password = ref("");

const handleSubmit = () => {
  emits.register({ email: email.value, password: password.value });
};
</script>

<style scoped>
.register-form {
  height: 420px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 10px;
  border: 2px solid (255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

.register-form__title {
  text-align: center;
  font-size: 32px;
  line-height: 42px;
  font-weight: 500;
  color: #fff;
}

.register-form__label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

.register-form__input {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background-color: rgba(97, 93, 93, 0.07);
  padding: 0 10px;
  font-size: 18px;
  font-weight: 300;
  margin-top: 8px;
  color: #fff;
}

.register-form__input:focus {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

.register-form__button {
  margin-top: 50px;
  width: 100%;
  background-color: #fff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.register-form__error {
  color: rgb(238, 246, 6);
  text-align: center;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  font-size: 22px;
  border-radius: 16px;
  padding: 10px;
}
</style>
