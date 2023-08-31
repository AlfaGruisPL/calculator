let num1 = +prompt("Введіть перше число:");
let operator = prompt("Яку дію Ви хочете виконати: +, -, *, /?");
let num2 = +prompt("Введіть друге число:");

switch (operator) {
    case "+":
        alert( `Сума Ваших введених чисел = ${num1 + num2}`);
        break;

    case "-":
        alert( `Різниця Ваших введених чисел = ${num1 - num2}`);
        break;

    case "*":
        alert( `Добуток Ваших введених чисел = ${num1 * num2}`);
        break;

    case "/":
        if(num2 <= 0){
            alert("На нуль ділити не можна!");
        }
        else{
            alert( `Частка Ваших введених чисел = ${num1 / num2}`);
        }
        break;

    default:
        alert("Введено не коректне значення");
        break;
}
