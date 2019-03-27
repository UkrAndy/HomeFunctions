//Задача. Створити функцію для виведення на екран (через document.write)
// малюнка з вказаним URL (URL передається через формальний параметр)

function showImage(url) {
    document.write("<img src='" + url + "' alt='image'>")
}

showImage('http://xrest.ru/schemes/00/12/3f/c8/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%B0%D1%8F%20%D0%B7%D0%B5%D0%B1%D1%80%D0%B0-1.jpg')


//Задача. Розробити функцію для формування з повної форми ПІБ скорочену
//Наприклад з "Іванов Володимир Петрович" => "Іванов В. П."
let a = prompt('Введіть Прізвище')
let b = prompt('Введіть Ім"я')
let c = prompt('Введіть по батькові')

function getShortName(a, b, c) {
    alert(a + "." + b[0] + "." + c[0] + ".")           <-- Одна крапка лишня. Краще було використати шаблони
}
getShortName(a, b, c)
