export default class WelcomePageViewModel {
  constructor(model) {
    this.model = model;
  }
  async getKaspiOrder(orderNumberParthner) {
    console.log (orderNumberParthner,)
    try {
      const response = await fetch(
        `https://kaspi.kz/shop/api/v2/orders/?filter[orders][code]=${orderNumberParthner}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/vnd.api+json",
            "X-Auth-Token": this.model.X_AUTH_TOKEN,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const responseData = await response.json();
      const data = responseData?.data;

      if (!data || data.length === 0) {
        return "ERROR";
      }

      const orderStatus = data[0]?.attributes?.status;
      const orderType = data[0]?.type;
      const orderId = data[0]?.id;

      if (orderStatus === "ACCEPTED_BY_MERCHANT") {
        return {
          status: orderStatus,
          type: orderType,
          orderId: orderId,
        };
      } else {
        return orderStatus;
      }
    } catch (error) {
      console.error("Ошибка при получении заказа", error);
      return "ERROR";
    }
  }

  areAllFieldsValid() {
    return (
      this.model.iinValid &&
      this.model.alserOrderNumberValid &&
      this.model.orderNumberParthnerValid
    );
  }

  async sendFeedback() {
    if (this.areAllFieldsValid()) {
    //   const kaspiOrderResponse = await this.getKaspiOrder(this.model.orderNumberParthner);

      // В зависимости от ответа, вы можете обновить вашу модель или выполнить другие действия
      console.log("Отправка данных на сервер");
this.model.isErrorMessageModal = true;
      // Если нужно, здесь вы можете добавить дополнительную обработку ответа

    } else {
      console.error("Ошибка: не все поля введены корректно.");
    }
  }

  validateIIN(iin) {
    const error = this.checkIINValidity(iin);
    if (error) {
      this.model.iinError = error;
      return false;
    }
    this.model.iinError = "";
    return true;
  }
  checkIINValidity(iinValue) {
    if (iinValue.length !== 12) return "Введите 12-значный номер";
    if (isNaN(iinValue)) return "ИИН должен содержать только цифры!";
    if (iinValue.replace(iinValue[0], "").length === 0)
      return "Все введенные цифры одинаковые! Введенный ИИН некорректен!";

    const iin11 = iinValue.substring(0, 11);
    const controlSum = parseInt(iinValue[11]);

    let digitsSum = [...Array(11).keys()].reduce(
      (acc, index) => acc + (index + 1) * parseInt(iin11[index]),
      0
    );

    let calculatedControlSum = digitsSum % 11;

    if (calculatedControlSum === 10) {
      const weights = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
      digitsSum = weights.reduce(
        (acc, weight, index) => acc + weight * parseInt(iin11[index]),
        0
      );
      calculatedControlSum = digitsSum % 11;
    }

    if (calculatedControlSum !== controlSum || digitsSum === 0)
      return "Введенный ИИН некорректен!";
    return null;
  }
  validateAlserOrderNumber(alserOrderNumber) {
    const orderNumberPattern = /^\d{7}$/;
    const isValid = orderNumberPattern.test(alserOrderNumber);

    this.model.alserOrderNumberValid = isValid;
    if (!isValid) {
      this.model.alserOrderNumberError = "Недопустимый формат";
    } else {
      this.model.alserOrderNumberError = "";
    }
    return isValid;
  }

  validateOrderNumberParthner(orderNumberParthner) {
    const orderNumberParthnerPattern = /^\d{9}$/;
    const isValid = orderNumberParthnerPattern.test(orderNumberParthner);

    this.model.orderNumberParthnerValid = isValid;
    if (!isValid) {
      this.model.orderNumberParthnerError = "Недопустимый формат";
    } else {
      this.model.orderNumberParthnerError = "";
    }
    return isValid;
  }
}
