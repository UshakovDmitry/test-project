<template>
  <section class="main">
    <h1 class="main__title">Добро пожаловать на мой сайт</h1>
    <div class="main__container">
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
        <h2 class="main__description-title">
          Привет! Меня зовут Дмитрий, и я <span class="highlight">обожаю веб-разработку</span>.
        </h2>
        <p class="main__description-text">
          Мне всегда <span class="highlight">нравился дизайн</span>, именно поэтому я решил заняться <span class="highlight">frontend</span>. 
        </p>
        <p class="main__description-text">
          Я начинал с <span class="highlight">фриланса</span>, что дало мне возможность попробовать себя в разных проектах и получить кучу опыта. Помогал разрабатывать сайты для друзей, и это только усилило мою любовь к программированию.
        </p>
        <p class="main__description-text">
          Мне нравится создавать что-то новое, решать сложные задачи и видеть результаты своей работы. Я всегда в курсе последних <span class="highlight">новинок в мире веб-разработки</span>. Это делает мою работу интересной и помогает мне развиваться. 
        </p>
        <p class="main__description-text">
          В общем, мой путь в программировании это мой выбор и моя страсть. Если тебе нужен разработчик, который любит свою работу, буду рад помочь. Давай создавать что-то крутое вместе!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

.main {
  width: 100%;
  min-height: calc(100vh - 100px);  /* Assuming the height of header and footer combined is 100px */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding: 50px 20px;  50px top and bottom padding to clear the header and footer“ */
  background-color: #1a1a2e;
  color: white;
}

.main__title {
  font-size: 30px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.main__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.main__images {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
}

.main__image-container {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.main__image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.main__image:hover {
  transform: scale(1.1);
}

.main__caption {
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
}

.main__description {
  width: 100%;
  max-width: 600px;
  text-align: left;
}

.main__description-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.main__description-text {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.6;
}

.highlight {
  color: #ff6347;
}

@media (max-width: 768px) {
  .main__container {
    flex-direction: column;
    align-items: center;
  }

  .main__images {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .main__description {
    text-align: center;
  }
}
</style>
