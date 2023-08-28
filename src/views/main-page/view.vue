<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="main">
    <div class="page">
      <div class="order-status-form">
        <div class="header-layout">
          {{ model.alserOrderNumberError }}
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
            <input
              v-model="model.iin"
              @input="validateFields('iin')"
              id="iin"
              name="iin"
              type="tel"
              class="form__input"
              :class="{ invalid: model.iinError }"
              placeholder="Введите 12-значный номер"
            />
            <div :class="{ visible: model.iinError }" class="form__error">
              {{ model.iinError }}
            </div>

            <label for="alserOrderNumber" class="form__label"
              >Номер заказа ALSER<span class="req">*</span></label
            >
            <input
              v-model="model.alserOrderNumber"
              @input="validateFields('alserOrderNumber')"
              id="alserOrderNumber"
              name="alserOrderNumber"
              type="tel"
              class="form__input"
              :class="{ invalid: model.alserOrderNumberError }"
              placeholder="Введите 7-значный номер"
            />
            <div
              :class="{ visible: model.alserOrderNumberError }"
              class="form__error"
            >
              {{ model.alserOrderNumberError }}
            </div>

            <label for="orderNumberParthner" class="form__label"
              >Номер на площадке партнера<span class="req">*</span></label
            >
            <input
              v-model="model.orderNumberParthner"
              @input="validateFields('orderNumberParthner')"
              id="orderNumberParthner"
              name="orderNumberParthner"
              type="tel"
              class="form__input"
              :class="{ invalid: model.orderNumberParthnerError }"
              placeholder="Введите 9-значный номер"
            />
            <div
              :class="{ visible: model.orderNumberParthnerError }"
              class="form__error"
            >
              {{ model.orderNumberParthnerError }}
            </div>
          </div>
          <div class="form__item">
            <button
              @click.prevent="viewModel.sendFeedback"
              class="form__button"
            >
              Выдать заказ
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <modal-window v-if="model.isShowModal">
    <confirm-form 
    :order-id="model.orderId"
    @check-code="viewModel.checkCode($event)"
    @requestCodefromKaspi="viewModel.requestCodefromKaspi($event)"
    ></confirm-form>
  </modal-window>
  <modal-window v-if="model.isErrorMessageModal">
    <error-message 
    :error-message="model.errorMessageText"
    @close="viewModel.closeErrorMessageModal($event)"
    ></error-message>
  </modal-window>
</template>

<script setup>
import { ref } from "vue";
import ErrorMessage from "@/components/errorMessage.vue";
import ModalWindow from "@/components/modal/modal.vue";
import ConfirmForm from "@/components/confirmCode/confirmCode.vue";
import MainPageModel from "./model";
import MainPageViewModel from "./viewModel";

const model = ref(new MainPageModel());
const viewModel = ref(new MainPageViewModel(model.value));

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
  margin-bottom: 10px; /* Добавлен отступ снизу */
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
  min-height: 20px; /* минимальная высота */
  opacity: 0; /* изначально скрыт */
  transition: opacity 0.3s ease; /* плавный переход для отображения и скрытия */
  visibility: hidden; /* изначально скрыт */
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
