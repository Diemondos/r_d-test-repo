// Стрілкова функція для підсумовування елементів масиву
const sumArray = (arr: (number | string)[]): number => {
  return arr.reduce((sum: number, current: number | string) => {
    const num: number = Number(current);
    return isNaN(num) ? sum : sum + num;
  }, 0);
};

// Масив рядків
const stringArray: string[] = ["5", "15", "25"];
// Масив чисел
const numberArray: number[] = [100, 200, 300];

// Виклики функції
console.log("Сума рядкового масиву:", sumArray(stringArray));
console.log("Сума числового масиву:", sumArray(numberArray));