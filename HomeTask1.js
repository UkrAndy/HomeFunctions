//Задача. Створити функцію для виведення на екран (через document.write)
// малюнка з вказаним URL (URL передається через формальний параметр)
function showImage(url) {
    // Записати код тут
    let x = `<img src="${url}" alt="Малюнок">`
    return x;
}
document.write(`${showImage('https://www.e1.ru/news/images/resize_900/new1/479/012/images/0.jpg')} <br>`)

//Задача. Розробити функцію для формування з повної форми ПІБ скорочену
//Наприклад з "Іванов Володимир Петрович" => "Іванов В. П."
function getShortName(fullName) {
    // Записати код тут
    let arr = fullName.split(' ');
    arr[1] = arr[1][0] + '.'
    arr[2] = arr[2][0] + '.'
    let str = arr.join(' ')
    return str
}
document.write(`${getShortName('Магдюк Сергій Леонідович')} <br>`)
