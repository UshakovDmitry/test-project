<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form @submit.prevent="register">
    <h3>Регистриция</h3>
    <label for="username">E-mail</label>
    <input
      type="text"
      id="username"
      placeholder="Email"
      v-model="props.email"
    />

    <label for="password">Пароль</label>
    <input
      type="password"
      id="password"
      v-model="props.password"
      placeholder="Password"
    />

    <button @click="viewModel.handleRegister()">Зарегистрироваться</button>
    <p>{{ props.errorMessages }}</p>
  </form>
  
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  email: String,
  password: String,
  errorMessages: String,
});
</script>

<style scoped>
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
  transition: all 0.5s ease;
}

.shape:first-child {
  background-color: rgba(14, 151, 237, 0.13);
  box-shadow: 0 20px 40px rgba(14, 151, 237, 0.13);
  top: -130px;
  right: -130px;
}

.shape:last-child {
  background-color: rgba(234, 135, 13, 0.13);
  box-shadow: 0 20px 40px rgba(234, 135, 13, 0.13);
  bottom: -120px;
  left: -100px;
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
</style>
