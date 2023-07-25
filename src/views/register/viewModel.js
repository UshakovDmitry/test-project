import { useRouter } from "vue-router";
import { LocalStorageProvider } from "@/provider/LocalStorage.provider";
import BASE_URL from "@/shared/consts";

export default class RegisterViewModel {
  model;
  router;
  constructor(model) {
    this.model = model;
    this.router = useRouter();
  }
  // Функция для регистрации
  async register() {
    try {
      console.log(BASE_URL);
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: LocalStorageProvider.JSONtoString({
          email: this.model.email,
          password: this.model.password,
        }),
      });

      const data = await response.json();
      this.model.errorMessages = "";

      if (!response.ok) {
        throw Error(data.message);
      }
      // открываем модальное окно с сообщением об успешной регистрации
      this.model.isShow = true;

      this.model.modalMessage = "Вы успешно зарегистрировались!";
      // Сохраняем JWT токен в локальное хранилище и переходим на страницу авторизации через 2 секунды
      setTimeout(() => {
        this.model.show = false;
        this.router.push({ name: "log-in" });
      }, 2000);
    } catch (err) {
      console.log(err.message);
      this.model.errorMessages = err.message;
    }
  }

  async handleRegister() {
    try {
      await this.register();
    } catch (err) {
      this.model.errorMessages = err.message;
    }
  }
}
