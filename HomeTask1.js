//Задача. Створити функцію для виведення на екран (через document.write)
// малюнка з вказаним URL (URL передається через формальний параметр)
function showImage(url) {
    document.write(`<p> <image src="${url}" height="200px"> </p>`)
}

//Задача. Розробити функцію для формування з повної форми ПІБ скорочену
//Наприклад з "Іванов Володимир Петрович" => "Іванов В. П."
function getShortName(fullName) {
    var name = fullName.split(' ')
    var name_arr = name[0] + ' ' + name[1][0] + '. ' + name[2][0] + '.' 
    document.write(`<p> ${name_arr} </p>`)
}

var n = prompt("Введіть номер завданя - ",'')

if(n == 1)
{
    var a = showImage("https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/share%20img/aventador-coupe-facebook-og.jpg") 
}
else
{
    var b = getShortName(prompt("Введіть ім'я"),'')
}