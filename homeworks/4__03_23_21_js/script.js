// присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16
//, true, false Вывести каждую при помощи console.log , alert, document.write
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let q = 1;
let w = 10;
let e = -999;
let r = 123;
let x = 3.14;
let s = 2.7;
let v = 16;
let t = true;
let f = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(x);
console.log(s);
console.log(v);
console.log(t);
console.log(f);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(q);
alert(w);
alert(e);
alert(r);
alert(x);
alert(s);
alert(v);
alert(t);
alert(f);

document.write(`<p>TASK_1 ${hello} ${owu} ${com} ${ua} ${q} ${w} ${e} ${r} ${x} ${s} ${v} ${t} ${f}</p>`);

//переопределить каждую переменную из задания 1 дав им произвольные значения
// Вывести каждую при помощи console.log , alert, document.write

hello = 'VLAD ';
owu = 'YAKUBETS ';
com = 'HOME';
ua = 'work';
q = 10;
w = 15;
e = -99;
r = 13;
x = 3;
s = 2.99;
v = 17;
t = false;
f = true;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(x);
console.log(s);
console.log(v);
console.log(t);
console.log(f);

alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(q);
alert(w);
alert(e);
alert(r);
alert(x);
alert(s);
alert(v);
alert(t);
alert(f);

document.write(`<p>TASK_2 ${hello} ${owu} ${com} ${ua} ${q} ${w} ${e} ${r} ${x} ${s} ${v} ${t} ${f}</p>`);

//Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
let day = 23;
let month = 3;
let year = 2021;
let name = 'Vlad';
let surName = 'Yakubets';
let guruYear = 'Dragon';

console.log(day);
console.log(month);
console.log(day, month, year);
console.log(name);
console.log(surName);
console.log(guruYear);
alert(day);
alert(month);
alert(year);
alert(name);
alert(surName);
alert(guruYear);
document.write(`<p>TASK_3 ${day}.${month}.${year}--${name} ${surName} ${guruYear}</p>`);

//при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// name і surName вже оголошені
name = prompt('Enter your name:');
surName = prompt('Enter your surname name:');
let faName = prompt('Enter your father`s name:');
console.log(name);
console.log(surName);
console.log(faName);
alert(name);
alert(surName);
alert(faName);
document.write(`<p>TASK_4 ${name} ${surName} ${faName}</p>`);

//Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = name +' '+ surName +' '+ faName;
console.log(person);

// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
console.log(+prompt('enter first number'));
console.log(+prompt('enter second number'));
console.log(+prompt('enter third number'));

//при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let num1, num2, num3, num4, result;
num1 = parseInt(prompt('enter first number'));
num2 = parseInt(prompt('enter second number'));
num3 = parseInt(prompt('enter third number'));
num4 = parseInt(prompt('enter fourth number'));
result=num1+num2+num3+num4;
console.log(result);

// при помощи prompt()  получить 3 числа с плавающей точекой.
// при помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
num1 = parseFloat(prompt('enter first float number'));
num2 = parseFloat(prompt('enter second float number'));
num3 = parseFloat(prompt('enter third float number'));
result=num1+num2+num3;
console.log(result);

//при помощи prompt()  получить 3 числа с плавающей точекой.
// Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
num1 = Math.round(+prompt('enter first float number'));
num2 = Math.round(+prompt('enter second float number'));
num3 = Math.round(+prompt('enter third float number'));
result=num1+num2+num3;
console.log(result);

//при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень.
// Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.
num1 = parseInt(prompt('enter first number'));
num2 = parseInt(prompt('enter second number'));
console.log(Math.pow(num1,num2));

//При помощи оператора опредеоения типа typeof
// определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
let b1 = 5 < 6;
let b2 = 5 > 6;
let b3 = 5 == 6;
let b4 = 5 >= 6;
let b5 = 10 >= 10;
let b6 = 10 <= 10;
let b7 = 10 < 10;
let b8 = 10 > 10;
let b9 = 10 != 10;
let b10 = 123 === '123';
let b11 = 123 == '123';

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); false
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0');true
// console.log(!!'null');true
// console.log(!!'undefined');true
// console.log(!!(3/'owu'));false
// console.log((111 > 11 || 45 < 111) ||  !!'0');true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false