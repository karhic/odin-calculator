let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let topDisplayValue = "";
let bottomDisplayValue = "";
function add(a, b){
  return a + b;
}
function subtract(a, b){
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a, b){
  return a / b;
}
function operate(num1, num2, operator){
  if (operator == "+"){
    return add(num1, num2);
  } else if (operator == "-"){
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/"){
    return divide(num1, num2);
  };
}
function updateDisplay(){
  let topDisplay = document.querySelector("#display-area-top");
  let bottomDisplay = document.querySelector("#display-area-bottom");
  topDisplay.textContent = topDisplayValue;
  bottomDisplay.textContent = bottomDisplayValue;
}
let numbers = ["zero", "one", "two", "three", "four", "five", "six",
               "seven", "eight", "nine"];
/*certain css implementations forbid ids that start with digits.
  we start on 1 below since 0 needs special treatment*/
for (let i  = 1; i <= 9 ; i++){
  let numberButton = document.querySelector("#" + numbers[i]);
  numberButton.addEventListener("click", () => {
    if (operator == "") {
      num1 += i.toString();
    } else { num2 += i.toString();};
    bottomDisplayValue = num1 + operator + num2;
    updateDisplay();
  });
}
let zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => {
  if (num1 && !num2 && !operator) {
    num1 += "0";
  } else if (num1 && operator && num2) {
    num2 += "0";
  }
  bottomDisplayValue = num1 + operator + num2;
  updateDisplay();
});
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");
let equalsButton = document.querySelector("#equals");
addButton.addEventListener("click", () => {
  if (!operator){
    operator = "+";
    bottomDisplayValue = num1 + operator + num2;
    updateDisplay();
  } else {
    equals();
    operator = "+";
    num2 = "";
    bottomDisplayValue = num1 + operator;
    updateDisplay();
  }
  });
subtractButton.addEventListener("click", () => {
  if (!operator){operator = "-"};
  bottomDisplayValue = num1 + operator + num2;
  updateDisplay();
});
divideButton.addEventListener("click", () => {
  if(!operator){operator = "/"};
  bottomDisplayValue = num1 + operator + num2;
  updateDisplay();
});
multiplyButton.addEventListener("click", () => {
  if(!operator){operator = "x"};
  bottomDisplayValue = num1 + operator + num2;
  updateDisplay();
});
equalsButton.addEventListener("click",equals);
function equals() {
  if (num1 && num2 && operator) {
   topDisplayValue = num1 + operator + num2 + "=";
   updateDisplay();
  } 
  if (num1 && num2 && operator == "+"){
    num1 = add(parseInt(num1), parseInt(num2));
    operator = "";
    num2 = "";
    bottomDisplayValue = num1;
    updateDisplay();
  }
  if (num1 && num2 && operator == "-"){
    num1 = subtract(parseInt(num1), parseInt(num2));
    operator = "";
    num2 = "";
    bottomDisplayValue = num1;
    updateDisplay();
  }
  if (num1 && num2 && operator == "x"){
    num1 = multiply(parseInt(num1), parseInt(num2));
    operator = "";
    num2 = "";
    bottomDisplayValue = num1;
    updateDisplay();
  }
  if (num1 && num2 && operator == "/"){
    num1 = divide(parseInt(num1), parseInt(num2));
    operator = "";
    num2 = "";
    bottomDisplayValue = num1;
    updateDisplay();
  }

};
