let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value) && value !== ".") {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseFloat(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
    case "^":
      handleMath(symbol);
      break;
    case "%":
      buffer = (parseFloat(buffer) / 100).toString();
      break;
    case "√":
      buffer = Math.sqrt(parseFloat(buffer)).toString();
      break;
    case "!":
      buffer = factorial(buffer);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const floatBuffer = parseFloat(buffer);

  if (runningTotal === 0) {
    runningTotal = floatBuffer;
  } else {
    flushOperation(floatBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(floatBuffer) {
  switch (previousOperator) {
    case "+":
      runningTotal += floatBuffer;
      break;
    case "−":
      runningTotal -= floatBuffer;
      break;
    case "×":
      runningTotal *= floatBuffer;
      break;
    case "^":
      runningTotal = Math.pow(runningTotal, floatBuffer);
      break;
    case "÷":
      if (floatBuffer === 0) {
        alert("Cannot divide by 0");
        runningTotal = 0;
        buffer = "0";
        previousOperator = null;
        return;
      }
      runningTotal /= floatBuffer;
      break;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        buttonClick(event.target.innerText);
      }
    });
}

init();

function factorial(n) {
  if (n < 0) {
    return "Invalid input";
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function redirectToQuadraticSolver() {
  window.location.href = "Quadratic-Equation/index.html";
}
