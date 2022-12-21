//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let b1 = document.querySelector(".b-1");
b1.addEventListener("click", t1);

function t1() {
      for (let i = 1; i <= 50; i++) {
        document.querySelector(".out-1").innerHTML += `${i} `;
    }   
};


//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

let b2 = document.querySelector(".b-2");
b2.addEventListener("click", t2);

function t2() {
    for (let i = 2; i <= 122; i = i +2) {
        document.querySelector(".out-2").textContent += `${i} `
    }
};


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

let b3 = document.querySelector(".b-3");
b3.addEventListener("click", t3);

function t3() {
    for (let i = 25; i >= 7; i--) {
        document.querySelector(".out-3").innerHTML += `${i} `
    }
};


//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

let b4 = document.querySelector(".b-4");
b4.addEventListener("click", t4);

function t4() {
    for (let i = 77; i >= 35; i--) {
        document.querySelector(".out-4").innerHTML += `${i}_`
    }
};


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

let b5 = document.querySelector(".b-5");
b5.addEventListener("click", t5);

function t5() {
    for ( let i = 1; i <= 17; i++) {
        if (i % 2 ==0) {
            document.querySelector(".out-5").innerHTML += `${i}_**`
        } else {
            document.querySelector(".out-5").innerHTML += `${i}_*`
        }
    }
};


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
const $OUT_6 = document.querySelector(".out-6");
const $B_6 = document.querySelector(".b-6");
$B_6.addEventListener("click", t6);


function t6() {
    $OUT_6.innerHTML = '';
    
    const $I_6 = +document.querySelector(".i-6").value;
    for (let i = 0; i < $I_6; i++) {

        $OUT_6.innerHTML += '******' + '<br>';
        
    } 

};
// $B_6.onclick = t6;

//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.

const $OUT_7 = document.querySelector(".out-7");
const $B_7 = document.querySelector(".b-7");
$B_7.addEventListener("click", t7);

function t7() {
    $OUT_7.innerHTML = '';
    const $I_7 = +document.querySelector(".i-7").value;
    for (let i = $I_7; i >= 0; i--) {
        $OUT_7.innerHTML += `${i} `;
    }
};
// $B_7.onclick = t7;

//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.
const $B_8 = document.querySelector(".b-8");
const $OUT_8 = document.querySelector(".out-8");
$B_8.addEventListener("click", t8);

function t8() {
    $OUT_8.innerHTML = '';
    const $I_81 = +document.querySelector(".i-81").value;
    const $I_82 = +document.querySelector(".i-82").value;
    for (let i = $I_81; i <= $I_82; i++) {
        $OUT_8.innerHTML += `${i} `;
    }
};
// $B_8.onclick = t8;

//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
const $B_9 = document.querySelector(".b-9");
const $OUT_9 = document.querySelector(".out-9");
$B_9.addEventListener("click", t9);

function t9() {
    $OUT_9.innerHTML = '';
    const $I_91 = +document.querySelector(".i-91").value;
    const $I_92 = +document.querySelector(".i-92").value;
    let a;
    let b;
    if ($I_91 > $I_92) {
        a = $I_92;
        b = $I_91;
    } else {
        a = $I_91;
        b = $I_92;
    };

    for (let i = a; i <= b; i++) {
       
        $OUT_9.innerHTML += `${i} `;
    }
};

//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

const $B_10 = document.querySelector(".b-10");
$B_10.addEventListener("click", t10);

function t10() {
    for (let i = 1950; i <= 2000; i += 2) {
       
        document.querySelector(".out-10").innerHTML += `${i} `;
    }
};


//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
const $B_11 = document.querySelector(".b-11");
$B_11.addEventListener("click", t11);

function t11() {
    const $DIV_11 = document.querySelectorAll(".div-11");
    const $OUT_11 = document.querySelector(".out-11");
    for (let i = 0; i <= $DIV_11.length; i++) {
        $OUT_11.textContent += `${$DIV_11[i].textContent} `;
    }
}
// $B_11.onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
const $B_12 = document.querySelector(".b-12");
$B_12.addEventListener("click", t12);

function t12() {
    const $DIV_12 = document.querySelectorAll(".div-12");
    for (let i = 0; i <= $DIV_12.length; i++) {
        $DIV_12[i].style.background = 'orange';
    }
}


//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let $I_13 = document.querySelectorAll(".i-13");
const $B_13 = document.querySelector(".b-13");
$B_13.addEventListener("click", t13);

function t13() {
    for (let i = 0; i <= $I_13.length; i++) {
        $I_13[i].value = i + 1;
    }
}

// document.querySelector(".b-13").onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
const $B_14 = document.querySelector(".b-14");
$B_14.addEventListener("click", t14);
const $OUT_14 = document.querySelector(".out-14");

function t14() {
    $OUT_14.innerHTML = '';
    const $I_14 = document.querySelectorAll(".i-14");
    for (let i = 0; i < $I_14.length; i++) {
        if ($I_14[i].checked) {
            $OUT_14.textContent += $I_14[i].value;
        }
    }
}

// document.querySelector(".b-14").onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i
const $B_15 = document.querySelector(".b-15");
$B_15.addEventListener("click", f15);

function f15() {
    const $OUT_15 = document.querySelector(".out-15");
    for (let i = 0; i <= 10; i++) {
        $OUT_15.innerHTML += `${10 - i} ${i} `;
    }
}

// document.querySelector(".b-15").onclick = f15;
