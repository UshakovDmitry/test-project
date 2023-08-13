// import BASE_URL from "@/shared/consts";
// import { LocalStorageProvider } from "@/provider/LocalStorage.provider";

export default class WelcomePageViewModel {
  model;
  constructor(model) {
    this.model = model;
  }

  async sendFeedback() {
this.model.isShow = true;
    //     try {
//       const response = await fetch(`${BASE_URL}/feedback`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: LocalStorageProvider.JSONtoString({ text }),
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw Error(data.message);
//       }
//       this.model.feedbackMessage = "";
//       this.model.isShow = true;
//       this.model.modalMessage = "Ваше сообщение отправлено!";
//       setTimeout(() => {
//         this.model.isShow = false;
//       }, 2000);
//     } catch (err) {
//       this.model.statusMessage = err.message;
//     }
  }
}