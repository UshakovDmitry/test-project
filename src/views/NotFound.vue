<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__subtitle">Ой! Кажется, вы упали</p>
      <p class="not-found__text">Похоже, вы поступили, как неуклюжий космонавт и улетели в неизвестное. Давайте <router-link to="/" class="not-found__link">вернемся домой</router-link>!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
  animation: fadeIn 2s ease-in-out;
}

.not-found__content {
  color: #fff;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  font-family: 'Orbitron', sans-serif;
}

.not-found__title {
  font-size: 100px;
  animation: bounce 1s infinite, colorChange 6s infinite;
}

.not-found__subtitle {
  font-size: 32px;
  margin: 20px 0;
}

.not-found__text, .not-found__link {
  color: #fff;
  text-decoration: none;
}

.not-found__link:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes colorChange {
  0% { color: #f093fb; }
  25% { color: #f5576c; }
  50% { color: #f093fb; }
  75% { color: #f5576c; }
  100% { color: #f093fb; }
}
</style>
