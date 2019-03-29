//Задача. Дано масив ідентифікаційних кодів користувачів, які заходили на сайт протягом дня.
// Розробити функцію, яка б з"ясовувала, чи є у даному масиві вказаний ідентифікаційний номер
function foundId(id, arrId) {
    for (let i = 0; i < arrId.length; i++) {
        if (id == arrId[i]) {
            return console.log(true);
        }
    }
    return console.log(false);
}

//Задача. Розробити функцію, яка серед заданої послідовності символів (у функцію
//можна передати довільну кількість символів) виводить тільки голосні
function vowels() {
    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] == "A" || arguments[i] == "a" || arguments[i] == "E" || arguments[i] == "e"
            || arguments[i] == "I" || arguments[i] == "i" || arguments[i] == "O" || arguments[i] == "o"
            || arguments[i] == "U" || arguments[i] == "u" || arguments[i] == "Y" || arguments[i] == "y") {
            document.write(arguments[i]);
        }

    }
    return;
}

//Задача. Дано масив вакансій. Вивести на екран скільки разів зустрічається кожна вакансія
//Приклад: масив вакансіій ["HR","програміст","HR","тестувальник","HR","програміст"]
//Потрібно вивести: HR - 1,  програміст -2, тестувальник - 1.
function countVacancy(arrVacancy) {
    let count = 1;

    for (let i = 0; i < arrVacancy.length; i++) {

        for (let j = i + 1; j < arrVacancy.length; j++) {
            if (arrVacancy[i] == arrVacancy[j]) {
                count++;
                arrVacancy.splice(j, 1);
                j--;
            }
        }

        document.write(`${arrVacancy[i]} - ${count}, `);
        count = 1;
    }
    return;
}

function countVacancy2(arrVacancy) {

    function compare(x, i, arr) {
        let count2 = 1;

        for (let j = i + 1; j < arr.length; j++) {
            if (x == arr[j]) {
                count2++;
                arr.splice(j, 1);
                j--;
            }
        }

        return document.write(`${x} - ${count2}, `);
    }

    return arrVacancy.forEach(compare);
}