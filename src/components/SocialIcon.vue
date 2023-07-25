<template>
  <a
    :href="socialLink"
    target="_blank"
    rel="noopener noreferrer"
    class="footer__link"
  >
    <span class="footer__social-name">{{ socialName }}</span>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

 defineProps({
  socialLink: String,
  socialName: String,
});

</script>

<style scoped>
.footer__link {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000;
  transition: background-color 0.3s ease;
  padding: 10px 15px;
  border-radius: 8px;
}

.footer__link:hover {
  background-color: #e0e0e0;
  border-radius: 8px;
}

.footer__social-name {
  margin-left: 8px;
}
</style>
