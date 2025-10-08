// Стрілкова функція для підсумовування елементів масиву
const sumArray = (arr) =>
    arr.reduce((sum, current) => {
        let num = Number(current);
        return isNaN(num) ? sum : sum + num;
    }, 0);

// Масив рядків
const stringArray = ["1", "2", "3", "4"];
// Масив чисел
const numberArray = [10, 20, 30, 40];

// Виклик функції
console.log("Сума рядкового масиву:", sumArray(stringArray));
console.log("Сума числового масиву:", sumArray(numberArray));
