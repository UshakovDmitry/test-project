
export default class MainPageViewModel {
  model;
  constructor(model) {
    this.model = model;
  }
   sendFeedback() {
    console.log(this.model.feedbackMessage, "message");
  }
}
