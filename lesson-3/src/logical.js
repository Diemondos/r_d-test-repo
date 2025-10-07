const number = 10;
const string = "10";
const booleanTrue = true;
const booleanFalse = false;
let undefinedVar;
const nullVar = null;

console.log('number == string:', number == string);
console.log('number === string:', number === string);
console.log('number != string:', number != string);
console.log('number !== string:', number !== string);

console.log('number > 5:', number > 5);
console.log('number < 5:', number < 5);
console.log('number >= 10:', number >= 10);
console.log('number <= 9:', number <= 9);

console.log('null == undefined:', nullVar == undefinedVar);
console.log('null === undefined:', nullVar === undefinedVar);

console.log('booleanTrue && booleanFalse:', booleanTrue && booleanFalse);
console.log('1booleanTrue || booleanFalse:', booleanTrue || booleanFalse);
console.log('!booleanTrue:', !booleanTrue);
console.log('!booleanFalse:', !booleanFalse);

console.log(`number > 5 && string === '10':`, number > 5 && string === '10');
console.log(`number > 5 || string === '5':`, number > 5 || string === '5');
console.log('!(number === 10):', !(number === 10));

console.log('Boolean(undefinedVar):', Boolean(undefinedVar));
console.log('Boolean(nullVar):', Boolean(nullVar));
console.log('Boolean(string):', Boolean(string));
