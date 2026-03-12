const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstNumber = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('num')) {
      currentInput += value;
      display.value = currentInput;
    }

    else if (button.classList.contains('op')) {
      if (currentInput === '') return;
      firstNumber = parseFloat(currentInput);
      operator = value;
      currentInput = '';
    }

    else if (button.id === 'equals') {
      if (currentInput === '' || firstNumber === null) return;
      const secondNumber = parseFloat(currentInput);
      let result;

      if (operator === '+') result = firstNumber + secondNumber;
      else if (operator === '-') result = firstNumber - secondNumber;
      else if (operator === '*') result = firstNumber * secondNumber;
      else if (operator === '/') result = secondNumber !== 0 ? firstNumber / secondNumber : 'Ошибка';

      display.value = result;
      currentInput = result.toString();
      firstNumber = null;
      operator = '';
    }

    else if (button.id === 'clear') {
      currentInput = '';
      firstNumber = null;
      operator = '';
      display.value = '';
    }
  });
});