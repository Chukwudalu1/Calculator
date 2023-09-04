const numberBtn = document.querySelectorAll('.number')
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const equalsBtn = document.querySelector('.equals')
const firstNumber = document.querySelect('.first-number')
const secondNumber =document.querySelect('.second-number')

firstNumber.textContent = '';
secondNumber.texContent = '';

const Addition = function(value1, value2){ //This function returns the sum of two values
    return value1 + value2;
};


const Subtract = function(sub1, sub2){ //This function returns the difference between two values
    if (sub1>=sub2){ return sub1 - sub2  
    } else { return '-', sub1 - sub2
  }
};


const Multiply = function(num1, num2) { // This function multiplies two numbers and returns the result the result
    return num1 * num2
};

const Divide= function(div1, div2){
  if (div2 == 0) {return "You must be a clown";}
  else {return div1 / div2}; 
}



const operate = function(par1,  operator, par2){ // This function takes two operands and an operator and calls one of the above functions on the operation.
  par1 = Number(par1);
  par2 = Number(par2);
  switch (operator) {
    case "+":
      return Addition(par1, par2);
    case "-":
      return Subtract(par1, par2);
    case "*":
      return Multiply(par1, par2);
    case "/":
      return Divide(par1, par2);
  }
};

numberBtn.forEach((number) =>{
  number.addEventListener("click", function(){
    
})







//