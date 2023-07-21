<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header>  </Header>
  <main class="layout__content">
    <slot></slot>
    <router-view></router-view>
  </main>
  <Footer></Footer>
  
</template>

<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
</script>

<style >
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background-color: #080710;

}

.layout__content {
  flex-grow: 1;
  height: calc(100vh - 140px);
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

