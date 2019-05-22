const output = document.querySelector('#output');
const buttons = document.querySelectorAll('button');

const clearOutput = () => (output.innerHTML = '');
const setOutput = content => (output.innerHTML = content);

function drawNinetyTriangle() {
  clearOutput();
  let result = '';

  for (let i = 0; i < 8; i++) {
    if (!!result) {
      result = `${result}<br />`;
    }
    for (let j = 0; j < i; j++) {
      result = `${result}*`;
    }
  }

  setOutput(result);
}

function displayPyramid() {
  const rows = 8;
  let result = '';

  clearOutput();

  for (var i = 0; i <= rows; i++) {
    for (var j = 0; j < rows - i; j++) {
      result = `${result}&nbsp`;
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      result = `${result}*`;
    }

    result = `${result}<br>`;
  }
  setOutput(result);
}

function displayReversePyramid() {
  const rows = 8;
  let result = '';

  clearOutput();

  for (var i = rows; i >= 0; i--) {
    for (var j = 0; j < rows - i; j++) {
      result = `${result}&nbsp`;
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      result = `${result}*`;
    }

    result = `${result}<br>`;
  }
  setOutput(result);
}

const buttonClick = event => {
  switch (event.target.id) {
    case 'ninety-degrees':
      drawNinetyTriangle();
      break;
    case 'pyramid':
      displayPyramid();
      break;
    case 'reverse-pyramid':
      displayReversePyramid();
      break;
    case 'clear':
      clearOutput();
      break;
  }
};

buttons.forEach(button => button.addEventListener('click', buttonClick));
