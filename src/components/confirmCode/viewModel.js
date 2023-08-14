export default class ConfirmCodeViewModel {
    constructor(model) {
      this.model = model;
    }
  
    handleInput(index) {
      // Если значение в текущем инпуте установлено, переключиться на следующий
      if (this.model.inputs[index].value && index < 5) {
        this.focusOnInput(index + 1);
      }
    }
  
    handleKeydown(index, event) {
      // Если ключ - это backspace и значение инпута пустое
      if (event.code === 'Backspace' && !this.model.inputs[index].value && index > 0) {
        this.focusOnInput(index - 1);
      }
    }
  
    // Устанавливает фокус на указанный инпут
    focusOnInput(index) {
      const input = document.querySelector(`.code__input:nth-child(${index + 1})`);
      if (input) input.focus();
    }
  }
  