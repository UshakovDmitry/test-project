<template>
  <div class="confirm-code">
    <h2 class="title">Сообщение об ошибке</h2>
    <p class="description">{{ errorMessage }}</p>
    <button 
    @click="emits('close', false)"
    class="form__button"
    >Ok</button>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from "vue";
defineProps({
  errorMessage: String,
});
const emits = defineEmits(["close"]);
</script>
<style scoped>
.title {
  color: #23362d;
  text-align: center;
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin-bottom: 10px;
}

.description {
  color: #23362d;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-bottom: 20px;
}

.confirm-code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 100%;
  padding: 16px;
}
.resend-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.resend-code__text {
  color: #23362d;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  max-width: 150px;
}

.resend-code__link {
  color: #00a153;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration-line: underline;
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
  background-color: #00a153;
  color: #fff;
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
  background: rgba(35, 54, 45, 0.3);
  color: rgba(35, 54, 45, 0.3);
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

.code__input {
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  border-radius: 8px;
  border: 1px solid rgba(35, 54, 45, 0.12);
  background-color: #fff;
  box-sizing: border-box;
}

.code__input:focus {
  border: 1px solid #00a153;
  outline: none;
}

.input-warning {
  color: red;
  text-align: center;
  display: none;
}
</style>
