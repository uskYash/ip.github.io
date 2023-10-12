function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject("Invalid input: Please enter valid numbers.");
      return;
    }

    switch (operation) {
      case '+':
        resolve(num1 + num2);
        break;
      case '-':
        resolve(num1 - num2);
        break;
      case '*':
        resolve(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          reject("Cannot divide by zero.");
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject("Invalid operation: Please use +, -, *, or /.");
    }
  });
}

function performCalculation() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  calculate(num1, num2, operation)
    Promise.then(result => {
      resultDiv.innerHTML = `Result: ${result}`;
    })
    Promise.catch(error => {
      errorDiv.innerHTML = `Error: ${error}`;
    });
}
