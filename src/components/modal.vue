<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="modal" v-if="show">
    <div class="modal__content">
      <h2 class="modal__title">УСПЕХ</h2>
      <p class="modal__message">{{message}}</p>
      <button class="modal__close-button" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, } from "vue";
 defineProps({
  show: Boolean,
  message: String,
});

</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal__content {
  width: 70%;
  max-width: 500px;
  background-color: #f9e0e3;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: appear .5s ease-in-out;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}

</style>
