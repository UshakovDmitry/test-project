/* eslint-disable no-unused-vars */
export default class LoginModel {
  email;
  password;
  errorMessages;
  modalMessage;
  isShow;
  constructor(config) {
    this.email = "";
    this.password = "";
    this.errorMessages = "";
    this.isShow = false;
    this.modalMessage = "";
  }
}
