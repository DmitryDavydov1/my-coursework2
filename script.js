// Задание 1
'js'.toUpperCase();

// Задание 2
function filterByStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

// Задание 3
Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

// Задание 4
const nums = [52, 53, 49, 77, 21, 32];
Math.min(...nums);
Math.max(...nums);

// Задание 5
function random1to10() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

// Задание 6
function randomArray(n) {
    const length = Math.floor(n / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }
    return result;
}

// Задание 7
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 8
console.log(new Date());

// Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

// Задание 10
function formatDate(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${weekdays[date.getDay()]}.\nВремя: ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}