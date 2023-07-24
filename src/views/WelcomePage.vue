<template>
  <section class="main">
    <h1 class="main__title">Добро пожаловать на мой сайт</h1>
    <!-- <div class="main__container">
      <div class="main__images">
        <figure class="main__image-container">
          <img
            class="main__image main__image--new"
            src="../assets/images/new-img.jpg"
            alt="Мое текущее фото"
          />
          <figcaption class="main__caption">Мое текущее фото</figcaption>
        </figure>
        <figure class="main__image-container">
          <img
            class="main__image main__image--old"
            src="../assets/images/old-img.jpeg"
            alt="Мое школьное фото"
          />
          <figcaption class="main__caption">Мое школьное фото</figcaption>
        </figure>
      </div>
      <div class="main__description">
        <h2 class="main__description-title">Мой путь в программировании</h2>
        <p class="main__description-text">
          Здесь рассказ о том, как я начал свой путь в программировании и как
          это стало для меня интересным и увлекательным занятием.
        </p>
      </div>
    </div> -->
  </section>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  overflow: hidden;
  padding: 20px;
  color: white; /* Set the text color to white */
}

.main__title {
  font-size: 30px;
  margin-bottom: 20px;
}

.main__container {
  display: flex;
}

.main__images {
  display: flex;
  flex-direction: column;
}

.main__image-container {
  margin-bottom: 20px;
}

.main__image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.main__image:hover {
  transform: scale(1.1);
}

.main__caption {
  margin-top: 10px;
  font-size: 20px;
}

.main__description {
  padding-left: 20px;
}

.main__description-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.main__description-text {
  font-size: 18px;
}
</style>
