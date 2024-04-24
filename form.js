"use strict";

document.getElementById('main-form').addEventListener("submit", checkForm);


function checkForm(event) {
    event.preventDefault();
    let el = document.getElementById('main-form');

    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;

    let fail = "";

    if(name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if(name.length <= 1 || name.lenth > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
        fail = "Пароли должны совпадать";
    else if(pass.split("&").length > 1)
        fail = "Некорректный пароль";

    if(fail != "") {
        document.getElementById('error').innerHTML = fail;

    } else {
        alert("Все данные корректно заполнены");
        window.location = 'https://itproger.com';
    }
}




// Function Declaration
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    alert("Вы согласны.");
}

function showCancel() {
    alert("Вы отменили выполнение.");
}

ask("Вы согласны?", showOk, showCancel);




// Function Expression
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);