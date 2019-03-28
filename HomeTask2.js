//Задача. Дано масив ідентифікаційних кодів користувачів, які заходили на сайт протягом дня.
// Розробити функцію, яка б з"ясовувала, чи є у даному масиві вказаний ідентифікаційний номер
function ident(arr, number) {
    let str = arr.indexOf(number)
    str = str >= 0 ? 'Є такий номер' : 'Нема номеру'
    return str
}
document.write(`${ident([2, 3, 4, 5, 6, 7], 1)} <br>`)

//Задача. Розробити функцію, яка серед заданої послідовності символів (у функцію
//можна передати довільну кількість символів) виводить тільки голосні
function letters() {
    let vowels = ''
    let str = ''
    let arrVowels = ['а', 'о', 'у', 'е', 'і', 'и', 'є', 'ї', 'ю', 'я']
    for (let i = 0; i < arguments.length; i++) {
        str += arguments[i];
    }
    letterArr = str.split('')
    letterArr.forEach((x, i, arr) => {
        vowels += arrVowels.indexOf(x) >= 0 ? x : ''
    });
    return vowels
}
document.write(`${letters('ф', 'ие', 'в', 'а', 'пфффаяп', 'р', 'о', 'д')}<br>`)

//Задача. Дано масив вакансій. Вивести на екран скільки разів зустрічається кожна вакансія
//Приклад: масив вакансіій ["HR","програміст","HR","тестувальник","HR","програміст"]
//Потрібно вивести: HR - 3,  програміст -2, тестувальник - 1.

function vacancy(arr) {
    let uniq = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        uniq.indexOf(arr[i]) < 0 ? uniq.push(arr[i]) : false
    }
    for (let i = 0; i < uniq.length; i++) {
        arr.forEach((x, z, arr) => {
            x == uniq[i] ? count++ : false
        });
        uniq[i] += ' - ' + count
        count = 0
    }
    return uniq
}
alert(vacancy(["HR", "програміст", "HR", "тестувальник", "HR", "програміст", "тестувальник", "HR", "програміст", "тестувальник", "HR", "програміст"]))
