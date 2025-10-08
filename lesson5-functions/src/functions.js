// Функція для підсумовування елементів масиву
function sumArray(arr) {
    return arr.reduce((sum, current) => {
        // Якщо елемент можна перетворити на число — додаємо
        let num = Number(current);
        return isNaN(num) ? sum : sum + num;
    }, 0);
}

// Масив рядків
const stringArray = ["1", "2", "3", "4"];
// Масив чисел
const numberArray = [10, 20, 30, 40];

// Виклик функції
console.log("Сума рядкового масиву:", sumArray(stringArray));
console.log("Сума числового масиву:", sumArray(numberArray));
