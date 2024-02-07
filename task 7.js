let arr = [1, 2, 3, 4, 5, 0];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        zeroCount++;
    } else if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Количество четных элементов: " + evenCount);
console.log("Количество нечетных элементов: " + oddCount);
console.log("Количество нулевых элементов: " + zeroCount);