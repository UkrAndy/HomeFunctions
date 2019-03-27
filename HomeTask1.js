//Задача. Створити функцію для виведення на екран (через document.write)
// малюнка з вказаним URL (URL передається через формальний параметр)
function showImage(url) {
    // Записати код тут
    return document.write(`<img src=${url} alt="Pic">`)
}
//Задача. Розробити функцію для формування з повної форми ПІБ скорочену
//Наприклад з "Іванов Володимир Петрович" => "Іванов В. П."
function getShortName(fullName) {
    // Записати код тут
    let f = fullName.split(' ')
    return `${f[0]} ${f[1][0].toUpperCase()}. ${f[2][0].toUpperCase()}.`
}
