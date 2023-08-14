<template>
  <div v-if="isShow" class="modal-overlay">
    <div class="modal">
      <h2 class="modal-title">Подтвердите действие</h2>
      <p>Вы уверены, что хотите выполнить это действие?</p>
      <button @click="closeModal" class="modal-close-btn">Закрыть</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true); // Это просто для демонстрации. В реальном коде вы будете использовать входные параметры или состояние модели.

const closeModal = () => {
  isShow.value = false;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
}

.modal-title {
  font-size: 20px;
  margin-bottom: 15px;
}

.modal-close-btn {
  cursor: pointer;
  background-color: #ff5b5b;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  display: block;
  margin-left: auto;
}
</style>
