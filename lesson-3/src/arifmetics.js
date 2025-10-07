const num1 = 10;
const num2 = 3;

const str1 = '5';
const str2 = 'Привіт';

const bool1 = true;
const bool2 = false;

console.log('Додавання чисел:', num1 + num2);
console.log('Віднімання чисел:', num1 - num2);
console.log('Множення чисел:', num1 * num2);
console.log('Ділення чисел:', num1 / num2);
console.log('Остача від ділення:', num1 % num2);

console.log('Число + рядок (конкатенація):', num1 + str1);
console.log('Рядок + число:', str1 + num2);
console.log('Число * рядок (преобразується):', num1 * str1);

console.log('Число + true:', num1 + bool1);
console.log('Число + false:', num1 + bool2);
console.log('true + true:', bool1 + bool1);
console.log('false + false:', bool2 + bool2);

console.log('Рядок + true:', str2 + bool1);
console.log(`true * '5':`, bool1 * str1);
console.log(`false + '5':`, bool2 + str1);
