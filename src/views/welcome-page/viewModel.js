export default class WelcomePageViewModel {
    constructor(model) {
      this.model = model;
    }
  
    validateIIN(iin) {
      const pattern = /^\d{12}$/;
      return pattern.test(iin);
    }
  
    validateAlserOrderNumber(number) {
      const pattern = /^\d{7}$/;
      return pattern.test(number);
    }
  
    validateOrderNumberParthner(number) {
      const pattern = /^\d{9}$/;
      return pattern.test(number);
    }
  
    sendFeedback() {
      const iinValid = this.validateIIN(this.model.iin);
      const alserOrderNumberValid = this.validateAlserOrderNumber(this.model.alserOrderNumber);
      const orderNumberParthnerValid = this.validateOrderNumberParthner(this.model.orderNumberParthner);
  
      if (iinValid && alserOrderNumberValid && orderNumberParthnerValid) {
        this.model.isShow = true;
      } else {
        this.model.iinValid = iinValid;
        this.model.alserOrderNumberValid = alserOrderNumberValid;
        this.model.orderNumberParthnerValid = orderNumberParthnerValid;
      }
    }
  }
  