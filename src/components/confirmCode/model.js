export default class ConfirmCodeModel {
    constructor() {
      // Создаем 6 разных объектов
      this.inputs = Array.from({ length: 4 }, () => ({ value: '' }));
    }
  }
  