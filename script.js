let calculator = {
    displayValue: '',
    firstValue: null, 
    SecondValue: '',
    operator: null, 
    subtotal: '',
    };

let v1 = calculator.firstValue;
let v2 = calculator.SecondValue;
let displayValue = calculator.displayValue;
let operator = calculator.operator;
let subtotal = calculator.subtotal;  

let operatorList = ["+", "-", "*", "/"];
let numberRegex = /^[0-9]+$/;


//ADD FUNCTION
function add(n1, n2){
    return n1 + n2;
};

//SUBTRACT FUNCTION
function subtract(n1, n2) {
    return n1 - n2;
};

//MULTIPLY FUNCTION
function multiply(n1, n2){
    return n1 * n2;
};

//DIVIDE FUNCTION
function divide(n1, n2){
    return n1 / n2;
};

//OPERATION FUNCTION
function operate(operator, s1, s2){

    let n1 = parseInt(s1);
    let n2 = parseInt(s2);
    
    switch(operator) {
        case "+": 
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2);
    } 
};

//REFRESHS DISPLAY VALUES EACH ROUND
function displayUpdate(){
    document.getElementById("display").value = displayValue;
}

//DISPLAY VALUES EACH ROUND
function display(value) {

    let currentNumber = document.getElementById("display").value;
    
    if (value.match(numberRegex)) {
        if (!v1) {
            displayValue = currentNumber + value;
            displayUpdate();    
        } else {
        v2 += value;
        displayValue = v2;
        displayUpdate();
        }
    } else if (operatorList.includes(value) && !operator){
        v1 = document.getElementById("display").value;
        operator = value;
        displayValue = '';
        displayUpdate();

    } else if (operatorList.includes(value) && operator){
        v2 = document.getElementById("display").value;
        subtotal = operate(operator, v1, v2);
        displayValue = subtotal;
        v1 = subtotal;
        operator = value;
        v2 = "";
        displayUpdate();
    }
}


//CLEAR ALL THE VALUES
function clear() {
    displayValue = '0';
    displayUpdate();
}
