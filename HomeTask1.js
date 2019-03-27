//Задача. Створити функцію для виведення на екран (через document.write)
// малюнка з вказаним URL (URL передається через формальний параметр)
function showImage(url) {
    document.write(`<img src="${url}">`);
}


//Задача. Розробити функцію для формування з повної форми ПІБ скорочену
//Наприклад з "Іванов Володимир Петрович" => "Іванов В. П."
function getShortName(fullName) {
    let arrPib = fullName.split(" ");
    let lastName = arrPib[0];
    let firstName = arrPib[1];
    let thirdName = arrPib[2];
    let firstNameSymbol = firstName.split("")[0];
    let thirdNameSymbol = thirdName.split("")[0];

    return document.write(`${lastName} ${firstNameSymbol}. ${thirdNameSymbol}.`);
}