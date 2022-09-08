let values = [];
let operations = [];
let subtotal = "";
let currentValue = "";
let count = 0;

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

//DISPLAY VALUES EACH ROUND
function display(value) {
    let operator = ["+", "-", "*", "/"];
    let numberRegex = /^[0-9]+$/;
    let currentNumber = document.getElementById("display").value;
    

    if (value.match(numberRegex) && subtotal == "") {
        document.getElementById("display").value += value;
    } else {
        // 
    }

    if (operator.includes(value)){
        operations.push(value);
        values.push(currentNumber);
        clear();
        
        if (values.length % 2 == 0) {
            values.push(result(values[0], values[1]));
            values.slice(0,2);
            operations.shift();
            document.getElementById("display").value = values[0];
        }
    } 
    
}

//CLEAR ALL THE VALUES
function clear() {
    document.getElementById("display").value = "";
}
 
//CALCULATE SUBTOTAL
function result(v1, v2){
    
    let total;
       
    total = operate(operations[operations.length - 2], v1, v2);

    values = [];
    values.push(total);
    subtotal = total;
    currentValue = "";
    
}