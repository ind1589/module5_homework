let arr = [1, 2, 3];
let firstElement = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
        console.log(false);
        break;
    }
}

if (arr.every(element => element === firstElement)) {
    console.log(true);
}