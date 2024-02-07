let userInput = prompt("Введите значение");
let number = Number(userInput);

if (typeof number === "number" && !isNaN(number)) {
    if (number % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}