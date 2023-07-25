<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/welcome-page" class="header__title">logo</router-link>
      <nav v-if="!isAuthenticated">
        <router-link to="/log-in" class="header__btn">Login</router-link>
        <router-link to="/register" class="header__btn">Register</router-link>
      </nav>
      <nav v-else>
        <button class="header__btn" @click="logout">Logout</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

let isAuthenticated = ref(false);

const checkAuth = () => {
  isAuthenticated.value = !!localStorage.getItem('token');
};

onMounted(checkAuth);

// Обновляем статус при изменении локального хранилища
window.addEventListener('storage', checkAuth);

onBeforeUnmount(() => {
  window.removeEventListener('storage', checkAuth);
});

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  isAuthenticated.value = false;
  router.push('/welcome-page');
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  z-index: 1000;
}

.header__container {
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  font-size: 24px;
  text-decoration: none;
  color: #333;
}

.header__btn {
  color: #333;
  background: none;
  text-decoration: none;
  transition: background-color 0.3s ease;
  padding: 10px 15px;
  margin-left: 20px;
  border-radius: 8px;
}

.header__btn:hover {
  background-color: #e0e0e0;
  border-radius: 8px;
}
</style>
