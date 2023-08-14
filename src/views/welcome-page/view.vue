<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="main">
    <div class="page">
      <div class="order-status-form">
        <div class="header-layout">
          <img
            src="../../assets/images/alser.jpeg"
            alt="Логотип компании"
            class="img"
          />
          <p class="header-layout__text">
            Резервное подтверждение выдачи заказа
          </p>
        </div>
        <form id="myForm" class="form">
          <div class="form__item">
            <h3 class="form__title">Основная информация</h3>
            <label for="iin" class="form__label"
              >ИИН<span class="req">*</span></label
            >
            <!-- ... ваша предыдущая разметка ... -->

            <input
              v-model="model.iin"
              @input="validateFields('iin')"
              id="iin"
              name="iin"
              type="tel"
              class="form__input"
              :class="{ invalid: !model.iinValid }"
              placeholder="Введите 12-значный номер"
            />
            <div v-if="!model.iinValid" class="form__error">
              Недопустимый формат
            </div>
            <label for="orderNumberParthner" class="form__label"
              >Номер заказа ALSER.kz<span class="req"
                >*</span
              ></label>
            <input
              v-model="model.alserOrderNumber"
              @input="validateFields('alserOrderNumber')"
              id="alserOrderNumber"
              name="alserOrderNumber"
              type="tel"
              class="form__input"
              :class="{ invalid: !model.alserOrderNumberValid }"
              placeholder="Введите 7-значный номер"
            />
            <div v-if="!model.alserOrderNumberValid" class="form__error">
              Недопустимый формат
            </div>

            <!-- Аналогично для других полей -->
          </div>
          <div class="form__item">
            <label for="orderNumberParthner" class="form__label"
              >Номер заказа на площадке партнера<span class="req"
                >*</span
              ></label
            >
            <input
              id="orderNumberParthner"
              name="orderNumberParthner"
              type="tel"
              class="form__input"
              placeholder="Введите 9-значный номер"
            />
            <div id="orderNumberParthnerValidError" class="form__error">
              Недопустимый формат
            </div>
          </div>
          <div class="form__item">
            <button @click.prevent="viewModel.sendFeedback" class="form__button">Выдать заказ</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <confirm-form v-if="model.isShow"></confirm-form>
</template>

<script setup>
import { ref } from "vue";
import ConfirmForm from "@/components/confirmForm.vue";
import WelcomePageModel from "./model";
import WelcomePageViewModel from "./viewModel";

const model = ref(new WelcomePageModel());
const viewModel = ref(new WelcomePageViewModel(model.value));

const validateFields = (field) => {
  if (field === "iin")
    model.value.iinValid = viewModel.value.validateIIN(model.value.iin);
  if (field === "alserOrderNumber")
    model.value.alserOrderNumberValid =
      viewModel.value.validateAlserOrderNumber(model.value.alserOrderNumber);
  if (field === "orderNumberParthner")
    model.value.orderNumberParthnerValid =
      viewModel.value.validateOrderNumberParthner(
        model.value.orderNumberParthner
      );
};
</script>

<style scoped>
.img {
  width: 200px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.header-layout__text {
  margin-top: 0;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.form {
  max-width: 330px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(35, 54, 45, 0.12);
  background-color: #fff;
}

.form__title {
  color: #23362d;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}

.form__group {
  margin-bottom: 15px;
}

.form__label {
  color: #23362d;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
}

.form__input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  border-radius: 16px;
  border-radius: 8px;
  border: 1px solid rgba(35, 54, 45, 0.12);
  background-color: #fff;
}

.form__input.invalid {
  border: 1px solid #f83b3a;
}

.form__button {
  display: block;
  width: 100%;
  padding: 11px;
  background-color: #00a153;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  border-radius: 8px;
  margin-top: 30px;
  border: none;
  cursor: pointer;
}

.form__error {
  color: #f83b3a;
  font-size: 14px;
  min-height: 20px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.form__error.visible {
  visibility: visible;
  opacity: 1;
}

.error {
  color: #f83b3a;
  display: none;
}

.header-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin: 0;
}

.req {
  color: #f37421;
  vertical-align: super;
  font-size: 14px;
}
</style>
