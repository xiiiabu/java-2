let age = prompt('Возраст?');

let message = (age < 18) ? 'Вы еще молоды, Вам нужно учиться' :
  (age < 50) ? 'Вам нужно работать' :
  (age < 59) ? 'Вам скоро на пенсию' :
  (age < 100) ? 'Вы пенсионер' :
    'Что-то пошло не так' ;
alert( message );

// let age = prompt('Возраст?');
// let message;

// if (age < 18) {
//     message = 'Вы еще молоды, Вам нужно учиться';
// } else if (age < 50) {
//     message = 'Вам нужно работать';
// } else if (age < 59) {
//     message = 'Вам скоро на пенсию';
// } else if (age < 100) {
//     message = 'Вы пенсионер';
// } else {
//     message = 'Что-то пошло не так';
// }

// alert(message);


function showTimeMessage(time) {
    switch (true) {
        case (time >= 0 && time <= 6):
            alert(time + " часа ночи");
            break;
        case (time >= 7 && time <= 10):
            alert(time + " часов утра");
            break;
        case (time >= 11 && time <= 17):
            alert((time - 12) + " часа дня");
            break;
        case (time >= 18 && time <= 23):
            alert((time - 12) + " часов вечера");
            break;
        default:
            alert("Некорректное время");
    }
}

let time = prompt("Введите время в цифрах:");
showTimeMessage(parseInt(time));


function findMiddleNumber(a, b, c) {
    let middle;

    switch (true) {
        case (a > b && a < c) || (a < b && a > c):
            middle = a;
            break;
        case (b > a && b < c) || (b < a && b > c):
            middle = b;
            break;
        case (c > a && c < b) || (c < a && c > b):
            middle = c;
            break;
        default:
            middle = "Нет среднего числа"; 
    }

    alert("Среднее число: " + middle);
}


let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let num3 = parseFloat(prompt("Введите третье число:"));

findMiddleNumber(num1, num2, num3);

