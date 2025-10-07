const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Початок робочого тижня. Збирайся на роботу!');
        break;
    case 'Tuesday':
        console.log('Другий день тижня. Вже трохи легше.');
        break;
    case 'Wednesday':
        console.log('Середа — екватор тижня.');
        break;
    case 'Thursday':
        console.log('Ще трохи — і пʼятниця.');
        break;
    case 'Friday':
        console.log(`Нарешті пʼятниця! Час завершувати справи.`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Вихідні! Можна відпочити.');
        break;
    default:
        console.log('Невідомий день. Перевір правильність введення.');
}
