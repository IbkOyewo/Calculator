const buttons = document.querySelectorAll('button');
const answerField = document.querySelector('.answer-field');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });

  function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      // check if the answerField is not empty then only do the calculation
      if (answerField.value !== '') {
        // calculate and show the answer to answerField
        answerField.value = Function('return '+ answerField.value)();
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on answerField
      answerField.value = '';
    } else {
      // otherwise concatenate it to the answerField
      answerField.value += clickedButtonValue;
    }
  }