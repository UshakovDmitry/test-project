<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__subtitle">Ой! Страница не найдена</p>
      <p class="not-found__description">Мы не можем найти страницу, которую вы ищете.</p>
      <router-link to="/welcome-page" class="not-found__button">Вернуться на Главную</router-link>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(120deg, #b8c6db 0%, #f5f7fa 100%);
  animation: fadeIn 2s ease-in-out;
}

.not-found__content {
  color: #536976;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.1);
  animation: slideInFromLeft 2s;
}

.not-found__title {
  font-size: 100px;
  color: #536976;
  animation: bounce 1s infinite;
}

.not-found__subtitle {
  font-size: 32px;
  margin: 20px 0;
  animation: slideInFromRight 2s;
}

.not-found__description {
  color: #536976;
  animation: slideInFromLeft 2s 1s;
}

.not-found__button {
  display: inline-block;
  color: #536976;
  border: 2px solid #536976;
  padding: 10px 30px;
  margin-top: 20px;
  text-decoration: none;
  border-radius: 50px;
  transition: background 0.5s, color 0.5s;
  animation: slideInFromRight 2s 1s;
}

.not-found__button:hover {
  background: #536976;
  color: #f5f7fa;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInFromLeft {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideInFromRight {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
