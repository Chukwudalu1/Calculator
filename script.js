const numberBtn = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const decimalBtn = document.querySelector('.decimal')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const equalsBtn = document.querySelector('.equal')
const firstNumber = document.querySelector('.firstNum')
const secondNumber =document.querySelector('.secondNum')  // Targeting the MOD

//Variables for operations
let Num1='';
let Operator='';
let Num2='';

//Adding event listners to buttons 
numberBtn.forEach((number) => number.addEventListener('click',function(e) {
  handleNumber(e.target.textContent)
  secondNumber.textContent=Num2;
}))

operatorBtn.forEach((operator) => operator.addEventListener('click',function(e) {
  handleOperator(e.target.textContent)
  firstNumber.textContent = Num1 + " " + Operator;
  secondNumber.textContent = Num2;
}))

clearBtn.addEventListener("click", function() {
  Num1 = " ";
  Operator = " ";
  Num2 = " ";
  firstNumber.textContent = " ";
  secondNumber.textContent = "0";
})

equalsBtn.addEventListener("click", function(){
  calculate();
})

decimalBtn.addEventListener("click", function(){
  decim();
})

deleteBtn.addEventListener("click", function(){
  DEL();
})


//Functions for the above eventlistener functions
function handleNumber(num) {
  if (Num2.length <=8) {
  Num2+=num;
  }
}/*&
function handleOperator(op){
  Operator =op;
  Num1=Num2;
  Num2='';
}*/

function DEL() {
  secondNumber.textContent = secondNumber.textContent.toString().slice(0, -1);
  //Num2 = DisplayValue;
// DisplayValue = Num2;
}
function decim() {
  if (!Num2.includes(".")) {
    Num2 +="."
    
  }
}

function handleOperator(op){
  Operator =op;
  operate(Operator, Num1, Num2);
  Num1=Num2;
  Num2='';
    

}
//Funcs for performing the operations
function Addition (value1, value2){ //This function returns the sum of two values
    return value1 + value2;
};
function Subtract (sub1, sub2){ //This function returns the difference between two values
    if (sub1>=sub2){ return sub1 - sub2  
    } else { return '-', sub1 - sub2
  }
};

function Multiply (num1, num2) { // This function multiplies two numbers and returns the result the result
    return num1 * num2
};

function Divide (div1, div2){
  if (div2 == 0) {return "Lol! wetin dey do you";}
  else {return div1 / div2}; 
};

function operate (operator, par1, par2){ // This function takes two operands and an operator and calls one of the above functions on the operation.
  switch (operator) {
    case "+":
      return Addition(par1, par2);
    case "-":
      return Subtract(par1, par2);
    case "x":
      return Multiply(par1, par2);
    case "/":
      return Divide(par1, par2);
      default: return " You used an invalid  operator";
  };
};

function calculate(){ //This function takes Num1 and Num2 and an operator and returns the result using the operate() func.
  Num1 = Number(Num1);
   Num2 = Number(Num2);
   secondNumber.textContent=operate(Operator, Num1, Num2);
   firstNumber.textContent= Num1+ Operator+Num2+ " ="
 }

function Display(number) { //This function populates the display on the screen with
  if (DisplayValue === "0") {
    DisplayValue = number.toString();
  } else {
    DisplayValue += number.toString();
  }
  document.getElementById("display").textContent = DisplayValue;
}