//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str= 'Привет';
let num= 123;
let flag= true;
let txt= 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

//2. Создайте переменные a1, a2, a3, a4, a5.
// При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
let a1 = 5 + 3;
let a2= 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1,a2,a3,a4,a5);

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6,a7,a8,a9,a10);

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
let heightC = 10;
let dC = 4;
let v = 3.14* Math.pow(dC/2,2)*heightC;
console.log(v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let str = 'Hello world';
document.write(`<div>${str}</div>`);
alert(str);
console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
alert('Yakubets Vladyslav Romanovich\nAge:20\nHobby:Cycling');

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str1= 'Who ';
let str2 = 'are ';
let str3 = 'You?';
let concatenation = str1+str2+str3;
document.write(`<div>${concatenation}</div>`)

//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); 205 до стрічки додається число, в результаті число перетворюється в строку
//      document.write(str - a + "<br/>"); 15 від стрічки віднімається число, в результаті стрічка переводиться до типу number
//      document.write(str * "2" + "<br/>"); 40 дві стрінги перетворюються в number, якщо в них містяться лише числа
//      document.write(str / 2 + "<br/>"); 10 дві стрінги перетворюються в number, якщо в них містяться лише числа

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") 3 Integer це цілочисельний тип
//     parseInt("-7.875") -7
//     parseInt("435") 435
//     parseInt("Вася") NaN

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
    let str = prompt("Enter something", "ho-ho")
    console.log(str);

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let num1 = +prompt('enter first number');
let num2 = +prompt('enter second number');
let sum = num1+num2;
console.log(sum);

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя,
// фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name = prompt('enter your name');
let surName = prompt('enter your surname');
let age = +prompt('enter your age');
alert('Good evening '+name+' '+surName+' ,my congratulations that you are '+age);

// =====================
// ======ДОП============
// =====================

//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let n1=+prompt('enter number');
let n2=+prompt('enter number');
let n3=+prompt('enter number');
let tmp;
if (n1>n2){
    tmp=n2;
    n2=n1;
    n1=tmp;
}
if (n2>n3){
    tmp=n3;
    n3=n2;
    n2=tmp;
}
if (n1>n2) {
    tmp = n2;
    n2 = n1;
    n1 = tmp;
}
console.log(n1,n2,n3);

//2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
let ans = prompt('Which color do you see?', 'green, yellow or red');
switch (ans) {
    case('green'):
        alert('go');
        break;
    case('yellow'):
        alert('wait');
        break;
    case('red'):
        alert('stop');
        break;
    default:
        alert('do what you want.');
}

//3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
let ans1 = prompt('Traffic light is:', 'green, yellow, red or flashing');
let isRoadClear = prompt('Is road clear?', 'yes or no');
if (ans1 === 'green' && isRoadClear === 'yes') {
    alert('go');
} else if (ans1 === 'green' && isRoadClear === 'no') {
    alert('wait until road is clear');
} else if (ans1 === 'yellow' && isRoadClear === 'no') {
    alert('wait');
} else if (ans1 === 'yellow' && isRoadClear === 'yes') {
    alert('still wait');
} else if (ans1 === 'red' && isRoadClear === 'no') {
    alert('wait pls');
} else if (ans1 === 'red' && isRoadClear === 'yes') {
    alert('dont move!');
}else{
    alert('do what you want.');
}

