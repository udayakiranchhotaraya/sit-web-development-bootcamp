const MultiplicationSign = '\u00D7';
const DivisionSign = '\u00F7';

function clearDisplay() {
    document.getElementById("expression-aside").innerHTML = "";
    document.getElementById("expression-main").value = null;
}

function backspace() {
    document.getElementById("expression-main").value = document.getElementById("expression-main").value.substr(0, document.getElementById("expression-main").value.length - 1);
}

// function evaluateExpression(event) {
//     var keyPressed = event.code;
//     console.log(keyPressed);
//     let expression = document.getElementById("expression-main"); //.value;
//     // console.log(expression.value);
//     switch (keyPressed) {
//         case "Digit1":
//             expression.value += "1";
//             // console.log(keyPressed);
//             // document.getElementById("expression-aside").innerHTML = keyPressed;
//             break;
        
//         case "Digit2":
//             expression.value += "2";
//             break;

//         case "Digit3":
//             expression.value += "3";
//             break;

//         case "Digit4":
//             expression.value += "4";
//             break;

//         case "Digit5":
//             expression.value += "5";
//             break;

//         case "Digit6":
//             expression.value += "6";
//             break;

//         case "Digit7":
//             expression.value += "7";
//             break;

//         case "Digit8":
//             expression.value += "8";
//             break;

//         case "Digit9":
//             expression.value += "9";
//             break;

//         case "Digit0":
//             expression.value += "0";
//             break;
        
//         case "Backspace": 
//             backspace();
//             // expression.value = expression.value.substr(0, expression.value.length - 1);
//             break;

//         default:
//             break;
//     }
    
//}

function keyPressedExpression(event) {
    const keyPressed = event.key;
    // console.log(keyPressed);
    let expression = document.getElementById("expression-main");
    // console.log(expression.value);
    switch (keyPressed) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "+":
        case "-":
            expression.value += keyPressed;
            break;

        case "*":
            expression.value += MultiplicationSign;
            break;

        case "/":
            expression.value += DivisionSign;
            break;
            
        case "Enter":
        case "=":
            evaluateExpression();
            break;

        case "Backspace":
            backspace();
            break;
            
        default:
            break;
    }
}

function buttonClickedExpression(val) {
    let buttonClicked;
    if (val === "*") {
        buttonClicked = MultiplicationSign;
    } else if (val === "/") {
        buttonClicked = DivisionSign;
    } else {
        buttonClicked = val;
    }
    // console.log(buttonClicked);
    let expression = document.getElementById("expression-main");
    expression.value += buttonClicked;
}

function evaluateExpression() {
    let expression;
    document.getElementById("expression-aside").innerHTML = document.getElementById("expression-main").value;
    expression = document.getElementById("expression-main").value;
    // console.log(expression);
    expression = expression.replace(MultiplicationSign, "*");
    expression = expression.replace(DivisionSign, "/");
    // console.log(document.getElementById("expression-main").value);
    // console.log(expression);
    // const res = eval(document.getElementById("expression-main").value);
    const res = eval(expression);
    document.getElementById("expression-main").value = res;
}

// // Using Infix-to-Postfix and then evaluation
// function evaluateExpression() {
//     let expression = document.getElementById("expression-main").value;
//     document.getElementById("expression-aside").innerHTML = expression;
//     // console.log(expression);

//     // console.log(expression, isNaN(expression));
//     // const operands = expression.split(/[+]|[-]| MultiplicationSign |'DivisionSign'/);
    
//     // if (expression == "*") {
//     //     console.log(MultiplicationSign);
//     // }

//     // console.log(isOperator(expression));
//     // for (const character of expression) {
//     //     console.log(character, isOperator(character));
//     // }

//     // for (let index = 0; index < expression.length; index++) {
//     //     const element = expression[index];
//     //     // console.log(element, expression[index], index);

//     // }

//     const postfixExp = [""];
//     const operators = [];
//     infixToPostfix(expression, postfixExp, operators);
//     console.log(postfixExp);
//     console.log(operators);
//     console.log(expression);

// }

// function isOperator(param) {
//     if (param === "+" || param === "-" || param === MultiplicationSign || param === DivisionSign) {
//         return true;
//     }
//     return false;
// }

// function precedence(element) {
//     switch (element) {
//         case "+":
//         case "-":
//             return 1;
    
//         case MultiplicationSign:
//         case DivisionSign:
//             return 2;

//         default:
//             return -1;
//     }
// }

// function infixToPostfix(string, postfix, opStack) {
//     for (let index = 0; index < string.length; index++) {
//         var element = string[index];
//         // console.log(element, isOperator(element));

//         // Check if the current element is operator or character. If character 
//         if (!(isOperator(element))) {
//             // element = Number(element);
//             let num = postfix.pop();
//             postfix.push(num + element);
            
//             // console.log(element, "element");
//         } else if (isOperator(element)) {
//             while ((opStack.length > 0) && (precedence(string) <= precedence(opStack[opStack.length-1]))) {
//                 postfix.push(opStack.pop());
//                 opStack.push(element);
//             } 
//                 // console.log(element, "operator");
//             // else {
//             //     console.log(opStack.length);
//             //     opStack.push(element);
//             //     // console.log(element, "operator");
//             // }
//             opStack.push(element);
//             postfix.push("");
//         }
//     }
//     while (opStack.length > 0) {
//         postfix.push(opStack.pop());
//     }
// }