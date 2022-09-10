//main object to manage states
let calculator = {
    displayValue: '',
    firstValue: null, 
    SecondValue: '',
    operator: null, 
    subtotal: '',
    };

//Destructuring object to access keys easily
let v1 = calculator.firstValue;
let v2 = calculator.SecondValue;
let displayValue = calculator.displayValue;
let operator = calculator.operator;
let subtotal = calculator.subtotal;  

//Variables needed to validate inputs
let operatorList = ["+", "-", "*", "/"];


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

    let n1 = parseFloat(s1);
    let n2 = parseFloat(s2);
    
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


//DISPLAY VALUES EACH ROUND
function display(value) {
    
    let currentNumber = document.getElementById("display").value;
    
    document.getElementById("btn-clear").value = 'C'; // activate btn C over AC everytime a key is clicked
    
    switch (value) {
        
        case 'c':
            clear();
            break;
            
        case '.':
            inputDecimal(value);
            break;
                
        case '=':
            subtotal = operate(operator, v1, v2);
            displayValue = parseFloat(subtotal.toFixed(10));
            break;
            
        case '+':
        case '-':
        case '*':
        case '/':
                if (displayValue == ''){
                    operator = value;
                
                } else {
                    if (operatorList.includes(value) && !operator){
                        v1 = document.getElementById("display").value;
                        operator = value;
                        displayValue = '';
                        v2 = "";    
                    } else if (operatorList.includes(value) && operator){
                        v2 = document.getElementById("display").value;
                        subtotal = operate(operator, v1, v2);
                        displayValue = parseFloat(subtotal.toFixed(10));
                        v1 = subtotal;
                        operator = value;
                        v2 = "";
                    }
                }
            break;
                
            default:
                if (value === 'backspace'){
                    displayValue = displayValue.slice(0, -1);
                    v2 = displayValue;
                } else{
                    v2 += value;
                    if (!v1) {
                        displayValue = currentNumber + value;
                    } else {
                        displayValue = v2;
                    }
                }
                break;
    }
    displayUpdate();
}
                        
function inputDecimal(dot) {
    // if nothing is displayed as v2, add '0.'
    if (v2 === '') {
        displayValue = "0.";
        displayUpdate();
    }
    if (!displayValue.includes(dot)) {
        displayValue += ".";
        v2 = displayValue;
    // if nothing is displayed as v2, add '0.'
    displayUpdate();
    }
}


//REFRESHS DISPLAY VALUES EACH ROUND
function displayUpdate(){
    document.getElementById("display").value = displayValue;
}


//CLEAR DISPLAY
function clear() {
//if display is already clear, reset history
    if(displayValue == null){
        v1 = '';
        operator = '';
        subtotal = 0;
    }

    v2 = '';
    displayValue = null;
    displayUpdate();
    document.getElementById("btn-clear").value = 'AC'; //activate btn AC
}
    