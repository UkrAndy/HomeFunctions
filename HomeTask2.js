//Задача. Дано масив ідентифікаційних кодів користувачів, які заходили на сайт протягом дня.
// Розробити функцію, яка б з"ясовувала, чи є у даному масиві вказаний ідентифікаційний номер
onst IdSearch = (idNum, ...idarr) => {
    for (let i = 0; i < idarr.length; i++) {
        if (idNum == idarr[i]) return document.write(`Користувач з ідентифікаційним номером ${idNum} сьогодні заходив`)
        else return document.write(`Користувач з ідентифікаційним номером ${idNum} сьогодні не заходив`)
    }
}
//Задача. Розробити функцію, яка серед заданої послідовності символів (у функцію
//можна передати довільну кількість символів) виводить тільки голосні
const FindVowel = (text) => {
    let letter = text.split('')
    let golos = ''
    for (let i = 0; i < letter.length; i++) {
        switch (letter[i]) {
            case 'а':
            case 'е':
            case 'є':
            case 'и':
            case 'і':
            case 'ї':
            case 'о':
            case 'у':
            case 'ю':
            case 'я':
                golos += letter[i]
                break
        }
    }
    return golos
}
//Задача. Дано масив вакансій. Вивести на екран скільки разів зустрічається кожна вакансія
//Приклад: масив вакансіій ["HR","програміст","HR","тестувальник","HR","програміст"]
//Потрібно вивести: HR - 1,  програміст -2, тестувальник - 1.

const vaсancy = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let count = 1
        for (x = i + 1; x < arr.length; x++) {
            if (arr[i] === arr[x]) {
                arr.splice(x, 1)
                count += 1
            }
        }
        document.write(`${arr[i]} - ${count}`)
    }
    return
}
