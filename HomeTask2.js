//Задача. Дано масив ідентифікаційних кодів користувачів, які заходили на сайт протягом дня.
// Розробити функцію, яка б з"ясовувала, чи є у даному масиві вказаний ідентифікаційний номер
const IdSearch = (idNum, ...idarr) => {
    let count = 0
    for (let i = 0; i < idarr.length; i++) {
        if (idNum == idarr[i]) count += 1
    }
    let ne = ''
    if (count == 0) ne = "НЕ"
    return `Користувач з ідентифікаційним номером ${idNum} сьогодні ${ne} заходив`
}
//Задача. Розробити функцію, яка серед заданої послідовності символів (у функцію
//можна передати довільну кількість символів) виводить тільки голосні
const FindVowel = (text) => {
    let letter = text.split('')
    let golos = ''
    for (let i = 0; i < letter.length; i++) {
        switch (letter[i]) {
            case 'а': golos += letter[i]
                break
            case 'е': golos += letter[i]
                break
            case 'є': golos += letter[i]
                break
            case 'и': golos += letter[i]
                break
            case 'і': golos += letter[i]
                break
            case 'ї': golos += letter[i]
                break
            case 'о': golos += letter[i]
                break
            case 'у': golos += letter[i]
                break
            case 'ю': golos += letter[i]
                break
            case 'я': golos += letter[i]
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
