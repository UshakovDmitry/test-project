<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="login">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form @submit.prevent="login">
      <h3>Авторизация</h3>
      <label for="username"></label>
      <input
        type="email"
        id="username"
        v-model="model.email"
        placeholder="Email"
      />

      <label for="password"></label>
      <input
        type="password"
        id="password"
        v-model="model.password"
        placeholder="Password"
      />
      <button @click="viewModel.handleLogin">Войти</button>
      <p class="error">{{ model.errorMessages }}</p>
    </form>
    <!-- Модальное окно успешной авторизации -->
    <ModalComponent :show="model.isShow" :message="model.modalMessage" />

  </section>
</template>

<script setup>
import { ref } from "vue";
import ModalComponent from "@/components/modal.vue";

import LoginModel from "./model.js";
import LoginViewodel from "./viewModel.js";

const model = ref(new LoginModel());
const viewModel = ref(new LoginViewodel(model.value));
</script>

<style scoped>
.group {
  position: relative;
}

.input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #6c6c6c;
  color: #ffffff;
  background-color: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #999999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus ~ label,
.input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #0e94f4;
}
.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #0e94f4;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  width: 50%;
}
.highlight {
  position: absolute;
  height: 60%;
  width: 0px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
  animation: input-focus 0.5s ease;
}

@keyframes input-focus {
  from {
    background: #1486d7;
  }
  to {
    width: 100%;
    background: transparent;
  }
}
.login {
  background-color: #080710;
}
.background {
  position: absolute;
  width: 430px;
  height: 480px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.background .shape {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.shape:first-child {
  background-color: rgba(202, 39, 180, 0.13);
  box-shadow: 0 0 40px rgba(202, 39, 180, 0.13);
  top: -130px;
  left: -130px;
}

.shape:last-child {
  background-color: rgba(99, 197, 66, 0.13);
  box-shadow: 0 0 40px rgba(99, 197, 66, 0.13);

  bottom: -120px;
  right: -100px;
}

form {
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

form * {
  color: #fff;
  outline: none;
  border: none;
  letter-spacing: 0.5px;
}

form h3 {
  text-align: center;
  font-size: 32px;
  line-height: 42px;
  font-weight: 500;
}
label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
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
::placeholder {
  color: #e5e5e5;
}

input:focus {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

button {
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
.error {
  color: rgb(238, 246, 6);
  text-align: center;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  font-size: 22px;
  border-radius: 16px;
  padding: 10px;

}
</style>
