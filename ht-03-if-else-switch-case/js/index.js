// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let b1 = document.querySelector(".b-1");
b1.addEventListener("click", f1);

function f1() {
  let i1 = document.querySelector(".i-1").value;
  let out1 = document.querySelector(".out-1");
  if (i1==4) {
    out1.innerHTML = true;
  } else {
    out1.innerHTML = false;
  }
}
// document.querySelector(".b-1").onclick = f1;

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let b2 = document.querySelector(".b-2");
b2.addEventListener("click", f2);

function f2() {
  let out2 = document.querySelector(".out-2");
  if (a21 > a22) {
    out2.innerHTML = a21;
  } else {
    out2.innerHTML = a22;
  }
}
// document.querySelector(".b-2").onclick = f2;

// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
let b3 = document.querySelector(".b-3");
b3.addEventListener("click", f3);

function f3() {
  let i31 = +document.querySelector(".i-31").value;
  let i32 = +document.querySelector(".i-32").value;
  let out3 = document.querySelector(".out-3");
  if (i31 > i32) {
    out3.innerHTML = i31;
  } else {
    out3.innerHTML = i32;
  }
}

// document.querySelector(".b-3").onclick = f3;

// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
let b4 = document.querySelector(".b-4");
b4.addEventListener("click", f4);

function f4() {
  let out4 = document.querySelector(".out-4");
  let i4 = +document.querySelector(".i-4").value;
  if (2022-i4 >= 18) {
    out4.innerHTML = 1;
  } else {
    out4.innerHTML =0;
  }
}
// document.querySelector(".b-4").onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let b5 = document.querySelector(".b-5");
b5.addEventListener("click", f5);

function f5() {
  let i5 = +document.querySelector(".i-5").value;
  let out5 = document.querySelector(".out-5");
  if (i5 < 0) {
    out5.innerHTML = 'm';
  } else if (i5 == 0) {
    out5.innerHTML = 0;
  } else {
    out5.innerHTML = 1;
  }
}
// document.querySelector(".b-5").onclick = f5;

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.
let b6 = document.querySelector(".b-6");
b6.addEventListener("click", f6);

function f6() {
  let i6 = +document.querySelector(".i-6").value;
  let out6 = document.querySelector(".out-6");
  if (i6 % 2 === 0) {
    out6.innerHTML = 'even';
  } else {
    out6.innerHTML = 'odd';
  }
}
// document.querySelector(".b-6").onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.
let b7 = document.querySelector(".b-7");
b7.addEventListener("click", f7);

function f7() {
  let i71 = +document.querySelector(".i-71").value;
  let i72 = +document.querySelector(".i-72").value;
  let out7 = document.querySelector(".out-7");
  let result = i71 ** i72;
  out7.innerHTML = result;
}
// document.querySelector(".b-7").onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let b8 = document.querySelector(".b-8");
b8.addEventListener("click", f8);

function f8() {
  let s8 = +document.querySelector(".s-8").value;
  let out8 = document.querySelector(".out-8");
  switch (s8) {
    case 1:
    out8.innerHTML = 'one';
    break;
    case 2:
    out8.innerHTML = 'two';
    break;
    case 3:
    out8.innerHTML = 'three';
    break;
  }
}

// document.querySelector(".b-8").onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let b9 = document.querySelector(".b-9");
b9.addEventListener("click", f9);

function f9() {
  let i9 = +document.querySelector(".i-9").value;
  let out9 = document.querySelector(".out-9");
  if (i9 >= 1 && i9 <= 32) {
    out9.innerHTML = 1;
  } else if (i9 >= 33 && i9 <= 43) {
    out9.innerHTML = 2;
  } else if (i9 >= 44 && i9 <= 64) {
    out9.innerHTML = 3;
  } else {
    out9.innerHTML = 0;
  }
}

// document.querySelector(".b-9").onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let b10 = document.querySelector(".b-10");
b10.addEventListener("click", f10);

function f10() {
  let s100 = document.querySelector(".s-100").value;
  let out10 = document.querySelector(".out-10");
  out10.innerHTML = s100;
}

// document.querySelector(".b-10").onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

function f11() {
  let s110 = document.querySelector(".s-110").value;
  let out11 = document.querySelector(".out-11");
  out11.innerHTML = s110;
}

document.querySelector(".s-110").onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let b12 = document.querySelector(".b-12");
b12.addEventListener('click', f12);

function f12() {
  let i120 = document.querySelector(".i-120").value;
  let out12 = document.querySelector(".out-12");
  out12.innerHTML = typeof(i120);
}

// document.querySelector(".b-12").onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let b13 = document.querySelector(".b-13");
b13.addEventListener("click", f13);

function f13() {
  let i130 = document.querySelector(".i-130").value;
  let out13 = document.querySelector(".out-13");
  out13.innerHTML = typeof(i130);
  // все данные из инпутов предоставляются в типе данных "строка". Для приведения ее к цифровому значению применяем оператор "+".
}

// document.querySelector(".b-13").onclick = f13;

// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит четыре операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let b14 = document.querySelector(".b-14");
b14.addEventListener("click", f14);

function f14() {
  let i141 = +document.querySelector(".i-141").value;
  let i142 = +document.querySelector(".i-142").value;
  let s143 = document.querySelector(".s-143").value;
  let out14 = document.querySelector(".out-14");
  if (s143 == '+') {
    out14.innerHTML = i141 + i142;
  } else if (s143 == '-') {
    out14.innerHTML = i141 - i142;
  } else if (s143 == '*') {
    out14.innerHTML = i141 * i142;
  } else if (s143 == '/') {
    out14.innerHTML = i141 / i142;
  }
}
// document.querySelector(".b-14").onclick = f14;

// Task  15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let b15 = document.querySelector(".b-15");
b15.addEventListener('click', f15);

function f15() {
  let s151 = +document.querySelector(".s-151").value;
  let s152 = +document.querySelector(".s-152").value;
  let s153 = document.querySelector(".s-153").value;
  let out15 = document.querySelector(".out-15");
  if (s153 == '&&') {
    out15.innerHTML = s151 && s152;
  } else if (s153 == '||') {
    out15.innerHTML = s151 || s152;
  }
}

// document.querySelector(".b-15").onclick = f15;
