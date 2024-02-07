let myMap = new Map();
myMap.set('баня', 'деревянная');
myMap.set('кастрюля', 'железная');
myMap.set('москва', 'златоглавая');

for (let [key, value] of myMap) {
    console.log(`Ключ - ${key}, значение - ${value}`);