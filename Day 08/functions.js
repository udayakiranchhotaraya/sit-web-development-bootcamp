// function functionName() {
//     function-body;
// }

function add() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    const sum = num1 + num2;
    console.log(sum);
    document.getElementById("res").innerHTML = sum;
}

function sub() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    const diff = num1 - num2;
    console.log(diff);
    document.getElementById("res").innerHTML = diff;
    // document.getElementById("res").innerHTML = .concat(diff);
}

function mul() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    const prod = num1 * num2;
    console.log(prod);
    document.getElementById("res").innerHTML = prod; 
}

function div() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    const qnt = num1 / num2;
    console.log(qnt);
    document.getElementById("res").innerHTML = qnt;
}