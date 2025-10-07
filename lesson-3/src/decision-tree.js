const age = 25;
const hasDriverLicense = true;
const isDrunk = false;

if (age >= 18) {
    console.log('Ви повнолітній.');
}

if (age < 18) {
    console.log('Ви неповнолітній, не можна водити авто.');
} else if (age >= 18 && hasDriverLicense && !isDrunk) {
    console.log('Ви можете керувати автомобілем.');
} else if (hasDriverLicense && isDrunk) {
    console.log(`Ви маєте посвідчення, але п'яні. Не можна водити!`);
} else {
    console.log('Ви не маєте права на керування транспортом.');
}

const weather = 'sunny';

if (weather === 'sunny') {
    console.log('Надворі сонячно. Одягніть окуляри!');
} else if (weather === 'rainy') {
    console.log('Надворі дощ. Візьміть парасолю.');
} else if (weather === 'snowy') {
    console.log('Йде сніг. Одягніть теплі речі.');
} else {
    console.log('Невідома погода. Перевірте прогноз.');
}

const temperature = 30;
const isSummer = true;

if (temperature > 25 && isSummer) {
    console.log('Гаряче літо! Не забудьте про воду.');
}
