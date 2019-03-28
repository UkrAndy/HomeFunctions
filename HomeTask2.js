//Задача. Дано масив ідентифікаційних кодів користувачів, які заходили на сайт протягом дня.
// Розробити функцію, яка б з"ясовувала, чи є у даному масиві вказаний ідентифікаційний номер
function search(a=[],b) {
    var t = false
    for(var i = 0; i < a.length; i++)
    {
        if(a[i] == b)
        {
            t = true
        }
    }
    return t
}

//Задача. Розробити функцію, яка серед заданої послідовності символів (у функцію
//можна передати довільну кількість символів) виводить тільки голосні

function search_vowelv(a) {
    var vowels=["а","е","є","и","і","ї","о","у","ю","я"]
    document.write(`<p> ${a} </p> <p>`)
    for(var i = 0; i < a.length; i++)
    {
        var b = false
        for(var j = 0; j < vowels.length; j++)
        {
            if(a[i] == vowels[j])
            {
                b = true
            }
        }
        if(b == true)
        {
            document.write(`${a[i]} `)
        }
    }
    document.write(`</p>`)
}

//Задача. Дано масив вакансій. Вивести на екран скільки разів зустрічається кожна вакансія
//Приклад: масив вакансіій ["HR","програміст","HR","тестувальник","HR","програміст"]
//Потрібно вивести: HR - 1,  програміст -2, тестувальник - 1.

function count(a=[]) {
    document.write(`${a}`)
    a.sort()
    var n = 1 
    for(var i = 1; i < a.length; i++)
    {
        if(a[i - 1] == a[i])
        {
            n++
        }
        else
        {
            document.write(`<p> ${a[i - 1]} - ${n} </p>`)
            n = 1;
        }
        if(i == a.length - 1)
        {
            document.write(`<p> ${a[i]} - ${n} </p>`)
        }
    } 
}  

var n = parseInt(prompt("Введінь номер завдання - ",''))

switch(n)
{
    case 1:
        var boo = search([1,5,7,10,21,50],3)

        if(boo == true)
        {
            document.write("<p> У даному масиві є вказаний ідентифікаційний номер </p>")
        }
        else
        {
            document.write("<p> У даному масиві немає вказаного ідентифікаційного номера </p>")
        }
    break
    case 2:
        var sea = search_vowelv(prompt("Введіть послідовність символів - "),'')
    break
    case 3:
        var cou = count(["HR","програміст","HR","тестувальник","HR","програміст"])
    break
}