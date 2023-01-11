// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let ar1 = ['string', 123, 456, true, false];
let b1 = document.querySelector(".b-1");
b1.addEventListener("click", f1);
let out1 = document.querySelector(".out-1");
function f1() {
    out1.innerHTML += ar1;
}

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2 через пробел. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

let ar2 = ['hello', 789, 098, true, false];
let b2 = document.querySelector(".b-2");
b2.addEventListener("click", f2);
let out2 = document.querySelector(".out-2");
function f2() {
    out2.innerHTML += ar2;
}

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3 = ['str', 1, 2, 3, 54, false, 76];
let b3 = document.querySelector(".b-3");
b3.addEventListener("click", f3);
function f3() {
    let out3 = document.querySelector(".out-3");
    out3.innerHTML += ar3.length;
}

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

let ar4 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b4 = document.querySelector(".b-4");
b4.addEventListener("click", f4);
function f4() {
    let out4 = document.querySelector(".out-4");
    out4.innerHTML += ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
}

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b5 = document.querySelector(".b-5");
b5.addEventListener("click", f5);
function f5() {
    let out5 = document.querySelector(".out-5");
    out5.innerHTML += ar5[0] + ar5[2] + ar5[3];
}

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let ar6 = ['Denis Sadiukevich', 'Aries', 23, 'March'];
let b6 = document.querySelector(".b-6");
b6.addEventListener("click", f6);
function f6() {
    let out6 = document.querySelector(".out-6");
    for (let i = 0; i < ar6.length; i++) {
        out6.innerHTML += ar6[i] + ' ';
    }
}

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7 = ["china", "india", "brazil", "japan", "egypt"];
// ar7[7] = ["vietnam"];
// ar7[6] = ["turkey"];
// ar7[5] = ["italy"];
ar7.splice(5, 0, "italy", "turkey", "vietnam");
let b7 = document.querySelector(".b-7");
b7.addEventListener("click", f7);
function f7() {
    let out7 = document.querySelector(".out-7");
    for (let i = 0; i < ar7.length; i++) {
        out7.innerHTML += ar7[i] + ' ';
    }
}

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8 = [];
let b8 = document.querySelector(".b-8");
b8.addEventListener("click", f8);
function f8() {
    let out8 = document.querySelector(".out-8");
    let out81 = document.querySelector(".out-8-1");
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    for (let i = 0; i < ar8.length; i++) {
        out8.innerHTML += ar8[i] + '-';
    }
    out81.innerHTML += ar8.length;
}

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];
let b9 = document.querySelector(".b-9");
b9.addEventListener("click", f9);
function f9() {
    let out9 = document.querySelector(".out-9");
    out9.innerHTML += ar9[ar9.length - 1];
}

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];
let b10 = document.querySelector(".b-10");
b10.addEventListener("click", f10);
function f10() {
    let out10 = document.querySelector(".out-10");
    out10.innerHTML += ar10[1] + ar10[ar10.length - 1];
}

// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2, 3, 4, 5, 6, 7];
let b11 = document.querySelector(".b-11");
b11.addEventListener("click", f11);
function f11() {
    let out11 = document.querySelector(".out-11");
    if (ar11.length > 1) {
        let secondIndex = ar11[2];
        let fourthIndex = ar11[4];
        let ar_11 = ar11;
        ar_11[4] = secondIndex;
        ar_11[2] = fourthIndex;
        out11.innerHTML += ar_11;
    }
}

// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ["test", "west", "list", "class", "best"];
let b12 = document.querySelector(".b-12");
b12.addEventListener("click", f12);
function f12() {
    let out12 = document.querySelector(".out-12");
    let firstIndex = ar12[0];
    let lastIndex = ar12[ar12.length - 1];
    let ar_12 = ar12;
    if (ar12.length > 1) {
        ar_12[0] = lastIndex;
        ar_12[ar_12.length - 1] = firstIndex;
        for (let i = 0; i <= ar_12.length - 1; i++) {
            out12.innerHTML += ar_12[i] + ' ';
        }
    }
}

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3

let ar13 = ["test", "west", "list", "class", "best"];
let b13 = document.querySelector(".b-13");
b13.addEventListener("click", f13);
function f13() {
    let out13 = document.querySelector(".out-13");
    for (let i = 0; i <= ar13.length - 1; i++) {
        out13.innerHTML += i + ' ' + ar13[i] + ' ';
    }
}

// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, "hello", 66];
let b14 = document.querySelector(".b-14");
b14.addEventListener("click", f14);
function f14() {
    let out14 = document.querySelector(".out-14");
    for (let i = ar14.length - 1; i >= 0 ; i--) {
        out14.innerHTML += ar14[i] +' ';
    }
}

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let b15 = document.querySelector(".b-15");
b15.addEventListener("click", f15);
function f15() {
    let out15 = document.querySelector(".out-15");
    for (let i = 0; i <= ar15.length - 1; i++) {
        if (ar15[i] > 0) {
            out15.innerHTML += ar15[i] + ' ';
        }
    }
}

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
let b16 = document.querySelector(".b-16");
b16.addEventListener("click", f16);
function f16() {
    let out16_even = document.querySelector(".out-16-even");
    let out16_odd = document.querySelector(".out-16-odd");
    for (let i = 0; i <= ar16.length -1; i++)  {
        if (ar16[i] % 2 == 0) {
            ar16_even.push(ar16[i]);
            out16_even.innerHTML = ar16_even.join(' ');
        } else {
            ar16_odd.push(ar16[i]);
            out16_odd.innerHTML = ar16_odd.join(' ');
        }
    }
}

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let b17 = document.querySelector(".b-17");
b17.addEventListener("click", f17);

function f17() {
    let sum = 0;
    let out17 = document.querySelector(".out-17");
    for (let i = 0; i <= ar17.length - 1; i++) {
        if (ar17[i] > 3) {       
            sum++;
        }
        
    }
    out17.innerHTML = sum;
}

// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let b18 = document.querySelector(".b-18");
b18.addEventListener("click", f18);
function f18() {
    let out18 = document.querySelector(".out-18");
    out18.innerHTML = Math.max(...ar18);
}

// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
let b19 = document.querySelector(".b-19");
b19.addEventListener("click", f19);
function f19() {
    let out19 = document.querySelector(".out-19");
    out19.innerHTML = ar19.indexOf(Math.min(...ar19));
    }

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20 = [4, 5, 6, 7, 8, 9, 10];
let b20 = document.querySelector(".b-20");
b20.addEventListener("click", f20);
function f20() {
    let out20 = document.querySelector(".out-20");
    out20.innerHTML = ar20.reduce(function(sum, elem) {
        return sum + elem;
    });
};
