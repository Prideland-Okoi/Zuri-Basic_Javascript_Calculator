function welcome() {
    alert("Welcome to PrideApp, Press Ok to start Operation");
}
welcome();

function calculation() {
    let num1, num2, operation;
    num1 = window.prompt("Please enter the first number: ");
    operation = window.prompt(" Please type in the math operation you would like to perform\n    '+' for addition \n    '-' for subtraction\n    '*' for multiplication\n    '/' for division\n    '%' for modulus\n    ");
    num2 = window.prompt("Please enter the second number: ");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operation == "+") {
        ans = num1 + num2;
        alert(ans);
    } else if (operation == "-") {
        ans = num1 - num2;
        alert(ans);
    } else if (operation == "*") {
        ans = num1 * num2;
        alert(ans);
    } else if (operation == "/") {
        ans = num1 / num2;
        alert(ans);
    } else if (operation == "%") {
        ans = num1 % num2;
        alert(ans);
    } else {
        alert("You have not typed a valid operator, please run the program again");
    }
}

function again() {
    let calculate_again;
    calculate_again = window.prompt("\n    Do you want to calculate again?\n    Please type Y for YES or N for NO. \n    ");

    if (calculate_again.toUpperCase() == "Y") {
        calculation();
    } else if (calculate_again.toUpperCase() == "N") {
        alert("See you later");
    } else {
        again();
    }
}
calculation();
again();
document.write(ans);
