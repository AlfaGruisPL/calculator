let x = +prompt("Ведіеть перше число");
let input = prompt("Яку дію ви хочете виконати: +, -, *, /?");
let y = +prompt("Ведіть друге число");

switch (input) {
    case "+":
        alert(x + y);
        break;

    case "-":
        alert(x - y);
        break;

    case "*":
        alert(x * y);
        break;

    case "/":
        alert(x / y);
        break;

    default:
        alert("Введено не коректне значення");
        break;
}