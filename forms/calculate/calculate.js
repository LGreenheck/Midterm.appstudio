
number1 = parseInt(prompt("Enter a number:"))
number2 = parseInt(prompt("Enter another number:"))
number3 = parseInt(prompt("Enter one more number:"))

function calcAvgSquare (num1, num2, num3) {
    let average = ((num1 + num2 + num3)/3)*(num1*num1)
    return average;
    }
    
let calculation = calcAvgSquare(number1, number2, number3)
console.log(`The answer is ${calculation}`)

