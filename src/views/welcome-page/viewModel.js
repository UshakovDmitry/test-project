import axios from "axios";

export default class WelcomePageViewModel {
  constructor(model) {
    this.model = model;
  }

  validateOrderStatus(orderStatus) {
    const OrderStatuses = {
      APPROVED_BY_BANK:
        "Заказ одобрен банком, но не принят в ALSER.kz. Необходимо связаться с call центром для уточнения актуальности заказа",
      ACCEPTED_BY_MERCHANT:
        "Описание по этому статусу не отображаем, так как в данном случае идем дальше по процессу и инициируем выдачу через API Kaspi",
      CANCELLED: "Заказ уже отменён и выдача невозможна",
      CANCELLING: "Заказ ожидает отмены и выдача невозможна",
      COMPLETED:
        "Заказ уже завершён в системе Kaspi и не требует дальнейших действий",
      KASPI_DELIVERY_RETURN_REQUESTED:
        "Заказ ожидает возврата, выдача по этому заказу невозможна",
      RETURN_ACCEPTED_BY_MERCHANT:
        "Заказ ожидает решения по возврату, выдача по этому заказу невозможна",
      RETURNED: "Заказ возвращён, выдача по этому заказу невозможна",
      SUSPENDED: "Заказ приостановлен, выдача по этому заказу невозможна",
      // Если статус не определен, то выводим ошибку
      ERROR: "Не удалось определить статус заказа",
    };
    return orderStatus in OrderStatuses
      ? OrderStatuses[orderStatus]
      : OrderStatuses.ERROR;
  }

  async getKaspiOrder(orderNumberParthner) {
    console.log("Получаю заказ");
    try {
      const response = await axios.get(
        `https://my-netlify-proxy.alser2.workers.dev/orders/?filter[orders][code]=${encodeURIComponent(orderNumberParthner)}`,
        {
          headers: {
            "Content-Type": "application/vnd.api+json",
            "X-Auth-Token": "F6fHIvrvku1e5/Tsb5BEWaX3bZvcqGkEki8oRE7hZj0=",
          },
        }
      );
      const data = response.data?.data;
      if (data && data.length > 0) {
        const orderStatus = data[0].attributes?.status;
        return { status: orderStatus };
      }
    } catch (error) {
      console.error("Ошибка при получении заказа", error);
    }
  }

  async checkCode(orderId, code) {
    console.log('Проверяю код', orderId);
    console.log('Проверяю код', code);

    try {
      const response = await axios.post(
        'https://my-netlify-proxy.alser2.workers.dev/checkCode',
        {
          data: {
            type: 'orders',
            id: orderId,
            attributes: {
              status: 'COMPLETED',
            },
          },
        },
        {
          headers: {
            'Content-Type': 'application/vnd.api+json',
            "X-Auth-Token": "F6fHIvrvku1e5/Tsb5BEWaX3bZvcqGkEki8oRE7hZj0=",
            // 'X-Security-Code': Number(code),
            'X-Send-Code': true,
          },
        }
      );
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Код подтвержден', response);
        return true;
      }
      if (response.status >= 400 && response.status <= 500) {
        console.log('Ошибка подтверждения кода', response.status);
        return false;
      }
    } catch (error) {
      console.log('Ошибка подтвержения', error);
      return false;
    }
  }
  
  async requestCodefromKaspi(orderId) {
    console.log('Отправляю запрос на получение кода', orderId);
    try {
      const response = await axios.post(
        'https://my-netlify-proxy.alser2.workers.dev/requestCode',
        {
          data: {
            type: 'orders',
            id: orderId,
            attributes: {
              status: 'COMPLETED',
            },
          },
        },
        {
          headers: {
            'Content-Type': 'application/vnd.api+json',
            "X-Auth-Token": "F6fHIvrvku1e5/Tsb5BEWaX3bZvcqGkEki8oRE7hZj0=",
            'X-Send-Code': true,
          },
        }
      );
  console.log('Отправляю запрос на получение кода', response);
      if (response.status >= 200 && response.status < 300) {
        return true;
      }
      if (response.status >= 400 && response.status <= 500) {
        console.log('Ошибка при отправке кода', response.status);
        return false;
      }
    } catch (error) {
      console.log('Ошибка при отправке кода', error);
      return false;
    }
  }
  

  async sendFeedback() {
    if (this.areAllFieldsValid()) {
      const kaspiOrderResponse = await this.getKaspiOrder(
        this.model.orderNumberParthner
      );
      let orderStatusFromKaspi = kaspiOrderResponse.status;
      let orderStatus = this.validateOrderStatus(orderStatusFromKaspi);
      if (orderStatusFromKaspi === "ACCEPTED_BY_MERCHANT"){
        const isCodeValid = await this.requestCodefromKaspi(this.model.orderNumberParthner);
        console.log('isCodeValid', isCodeValid);
        this.model.isShowModal = true;
      } else  
        this.model.isErrorMessageModal = true;
        this.model.errorMessageText = orderStatus;
      }
     else {
      console.error("Ошибка: не все поля введены корректно.");
    }
  }


















  areAllFieldsValid() {
    return (
      this.model.iinValid &&
      this.model.alserOrderNumberValid &&
      this.model.orderNumberParthnerValid
    );
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

  closeErrorMessageModal(bool) {
    console.log("Закрываю модальное окно с ошибкой");
    console.log(bool, "bool");
    this.model.isErrorMessageModal = bool
  }
}
