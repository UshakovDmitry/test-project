<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <transition name="modal">
    <div class="modal" v-if="show">
      <div class="modal__content">
        <h2 class="modal__title">Успешно!</h2>
        <p class="modal__message">{{message}}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from "vue";
 defineProps({
  show: Boolean,
  message: String,
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__content {
  position: relative;
  width: 70%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.modal-enter-active, .modal-leave-active {
  transition: all 1s; 
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.modal::before {
  transition: all 1s;
}

.modal-enter::before, .modal-leave-to::before {
  opacity: 0;
}
</style>
