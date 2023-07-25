<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout">
    <Header></Header>
    <main class="layout__content">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
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
