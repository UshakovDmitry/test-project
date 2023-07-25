<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="footer__container">
      <ul class="footer__socials">
        <SocialIcon
          v-for="social in socialMedia"
          :key="social.icon"
          :socialLink="social.link"
          :socialName="social.name"
        />
      </ul>
    </div>
  </footer>
</template>

<script setup>
import SocialIcon from "@/components/SocialIcon.vue";
const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/ushakov.08/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100004233817312",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/frontend_mobile",
  },
  {
    name: "Telegram",
    link: "https://t.me/Mobil_08",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCG3WUUgs5DJWZmDWWLMQXFg",
  },
  {
    name: "GitHub",
    link: "https://github.com/UshakovDmitry",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dmitry-ushakov-016438255/",
  },
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
