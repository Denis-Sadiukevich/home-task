//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let b1 = document.querySelector(".b-1");
b1.addEventListener("click", f1);

function f1() {
    let out1 = document.querySelector(".out-1");
    for (let i = 0; i <= 2; i++) {
        for (let j = i; j <= i; j++) {
            out1.innerHTML += '***';
        }
        out1.innerHTML += '_';
    }
};


//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

let b2 = document.querySelector(".b-2");
b2.addEventListener("click", f2);

function f2() {
    let out2 = document.querySelector(".out-2");
    for (let i = 1; i <= 3; i++) {
        out2.innerHTML += `${i}` + '<br>';
        for (let j = i; j <= i; j++) {
            out2.innerHTML += '*_*_*_' + '<br>';
        }
    }
};


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

let b3 = document.querySelector(".b-3");
b3.addEventListener("click", f3);

function f3() {
    let out3 = document.querySelector(".out-3");
    for (let i = 0; i <= 3; i++) {
        for (let j = i; j <= i; j++) {
            out3.innerHTML += '*-*-*-';
        }
        out3.innerHTML += '<br>';
    }
};


//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

let b4 = document.querySelector(".b-4");
b4.addEventListener("click", f4);

function f4() {
    let out4 = document.querySelector(".out-4");
    for (let i = 1; i <= 3; i++) {
        out4.innerHTML += `${i}_`;
        for (let j = 1; j <= 5; j++) {
            out4.innerHTML += `${j} `;
        }
    }
};


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>

let b5 = document.querySelector(".b-5");
b5.addEventListener("click", f5);

function f5() {
    let out5 = document.querySelector(".out-5");
    for (let i = 0; i < 3; i++) {
        for (let j =0; j < 6; j++) {
            if (j % 2 == 0) {
                out5.innerHTML += '1';
            } else {
                out5.innerHTML += '0';
            }
        }
        out5.innerHTML += '<br>';
    }
}


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

let b6 = document.querySelector(".b-6");
b6.addEventListener("click", f6);

function f6() {
    let out6 = document.querySelector(".out-6");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 6; j++) {
            if (j == 2 || j == 5) {
                out6.innerHTML += 'x';
            } else if(j % 2 == 0) {
                out6.innerHTML += 1;
            } else {
                out6.innerHTML += 0;
            }
        }
        out6.innerHTML += '<br>';
    }
}


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

let b7 = document.querySelector(".b-7");
b7.addEventListener("click", f7);

function f7() {
    let out7 = document.querySelector(".out-7");
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            out7.innerHTML += '*';
        }
        out7.innerHTML += '<br>';
    }
}


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

let b8 = document.querySelector(".b-8");
b8.addEventListener("click", f8);

function f8() {
    let out8 = document.querySelector(".out-8");
    for (let i = 4; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            out8.innerHTML += '*';
        }
        out8.innerHTML += '<br>';
    }
}


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

let b9 = document.querySelector(".b-9");
b9.addEventListener("click", f9);

function f9() {
    let out9 = document.querySelector(".out-9");
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < i; j++) {
            out9.innerHTML += `${j} `;
        }
        out9.innerHTML += '<br>';
    }
}


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

let b10 = document.querySelector(".b-10");
b10.addEventListener("click", f10);

function f10() {
    let out10 = document.querySelector(".out-10");
    for (let i = 0; i < 5; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i == 0 && j < 10) {
                out10.innerHTML += `${i}` + (10 * i + j) + ' ';
            } else {
                out10.innerHTML += 10 * i + j + ' ';
            }
        }
        out10.innerHTML += '<br>';
    }
}