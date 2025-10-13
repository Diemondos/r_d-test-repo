// Функція для підсумовування елементів масиву
function sumArray(arr: (number | string)[]): number {
  return arr.reduce((sum: number, current: number | string) => {
    const num: number = Number(current);
    return isNaN(num) ? sum : sum + num;
  }, 0);
}

// Масив рядків
const stringArray: string[] = ["1", "2", "3", "4"];
// Масив чисел
const numberArray: number[] = [10, 20, 30, 40];

// Виклики функції
console.log("Сума рядкового масиву:", sumArray(stringArray));
console.log("Сума числового масиву:", sumArray(numberArray));