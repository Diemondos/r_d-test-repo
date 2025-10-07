// Масив рядків
const strings = ["яблуко", "банан", "вишня"];
// Масив чисел
const numbers = [1, 2, 3, 4, 5];
// Масив boolean
const booleans = [true, false, true, false];
// Масив any (різні типи)
const mixed = [1, "привіт", true, { key: "value" }];

console.log("----- forEach -----");
strings.forEach(str => console.log("Рядок:", str));
numbers.forEach(num => console.log("Число:", num));
booleans.forEach(bool => console.log("Булеве:", bool));
mixed.forEach(item => console.log("Any:", item));

console.log("----- map -----");
const upperStrings = strings.map(str => str.toUpperCase());
console.log("Uppercase рядки:", upperStrings);

const squaredNumbers = numbers.map(num => num * num);
console.log("Квадрати чисел:", squaredNumbers);

const negatedBooleans = booleans.map(bool => !bool);
console.log("Інверсія boolean:", negatedBooleans);

const mixedTypes = mixed.map(item => typeof item);
console.log("Типи елементів mixed:", mixedTypes);
