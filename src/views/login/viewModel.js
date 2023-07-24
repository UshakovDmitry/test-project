import { useRouter } from "vue-router";
import { LocalStorageProvider } from "@/provider/LocalStorage.provider";
import BASE_URL from "@/share/consts";

export default class LoginrViewModel {
  model;
  router;
  constructor(model) {
    this.model = model;
    this.router = useRouter();
  }
  // Функция для авторизации
  async login() {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
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
      // очищаем сообщения об ошибках при авторизации
      this.model.errorMessages = "";

      if (!response.ok) {
        this.model.errorMessages = data.message;
        throw Error(data.message);
      }
      // открываем модальное окно с сообщением об успешной регистрации
      this.model.isShow = true;
      // Сохраняем JWT токен в локальное хранилище
      LocalStorageProvider.setValue("token", data.token);
      localStorage.setItem(
        "token",
        LocalStorageProvider.JSONtoString(data.token)
      );

      // Переходим на главную страницу через 2 секунды
      setTimeout(() => {
        this.router.push({ name: "main-page" });
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  }

  async handleLogin() {
    try {
      await this.login();
    } catch (err) {
      this.model.errorMessages = err.message;
    }
  }
}
