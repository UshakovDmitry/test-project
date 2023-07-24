<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="footer__container">
      <ul class="footer__socials">
        <SocialIcon
          v-for="social in socialMedia"
          :key="social.icon"
          :socialIcon="social.icon"
          :socialLink="social.link"
          :socialName="social.name"
        />
      </ul>
    </div>
  </footer>
</template>

<script setup>
import SocialIcon from "@/components/SocialIcon.vue";
import Icon from "@/assets/icons/instagram.svg";
const socialMedia = [
  {
    name: "Instagram",
    icon: Icon,
    link: "https://www.instagram.com/ushakov.08/",
  },
  {
    name: "Facebook",
    icon: "./assets/icons/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=100004233817312",
  },
  {
    name: "Twitter",
    icon: "icons/twitter.svg",
    link: "https://twitter.com/frontend_mobile",
  },
  {
    name: "Telegram",
    icon: "icons/telegram.svg",
    link: "https://t.me/Mobil_08",
  },
  {
    name: "Youtube",
    icon: "icons/youtube.svg",
    link: "https://www.youtube.com/channel/UCG3WUUgs5DJWZmDWWLMQXFg",
  },
  {
    name: "GitHub",
    icon: "icons/github.svg",
    link: "https://github.com/UshakovDmitry",
  },
  {
    name: "LinkedIn",
    icon: "icons/linkedin.svg",
    link: "https://www.linkedin.com/in/dmitry-ushakov-016438255/",
  }
  // Добавьте другие социальные сети, если необходимо
];
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.06);
  z-index: 1000;
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
</style>
