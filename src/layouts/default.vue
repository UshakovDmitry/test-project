<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout">
    <main class="layout__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: center;
}

.layout__content {
  max-width: 1100px;
  width: 100%;
  flex: 1;
  overflow: auto;
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>
