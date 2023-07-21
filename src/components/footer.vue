<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="footer__container">
      <ul class="footer__socials">
        <li class="footer__social-item">
          <a href="#" target="_blank" class="footer__link">Instagram</a>
        </li>
        <li class="footer__social-item">
          <a href="#" target="_blank" class="footer__link">Facebook</a>
        </li>
        <li class="footer__social-item">
          <a href="#" target="_blank" class="footer__link">Twitter</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
.footer {
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.06);
}

.footer__container {
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__socials {
  list-style: none;
  display: flex;
  gap: 20px;
}

.footer__link {
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
  padding: 10px 15px;
}

.footer__link:hover {
  background-color: #e0e0e0;
}
</style>
