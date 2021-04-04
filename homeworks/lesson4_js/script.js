//1) створити функцію яка приймає масив та виводить його
// function printArr(array) {
//     console.log(array);
// }
//
// let arr = ['asf', true, 15, 'assd'];
// printArr(arr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function randArr(count) {
//     let array = [];
//     for (let i = 0; i < count; i++) {
//         array[i] = Math.round(Math.random() * 255);
//     }
//     printArr(array);
// }
//
// randArr(10);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minOfThreeNum(frst, scnd, thrd) {
//     let min = frst;
//     for (let i = 0; i < 3; i++) {
//         if (arguments[i] < min)
//             min = arguments[i];
//
//     }
//     console.log('min - ', min);
// }
//
// minOfThreeNum(48, 56, 41);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxOfThreeNum(frst, scnd, thrd) {
//     let max = frst;
//     for (let i = 0; i < 3; i++) {
//         if (arguments[i] > max)
//             max = arguments[i];
//
//     }
//     console.log('max - ', max);
// }
//
// maxOfThreeNum(48, 56, 41);


// 5) створити функцію яка повертає найбільше число з масиву
// function maxInArr(arr) {
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement > max)
//             max = arrElement;
//     }
//     return max;
// }
// let array = [48,56,41];
// let max = maxInArr(array);
// console.log(max);


// 6) створити функцію яка повертає найменьше число з масиву
// function minInArr(arr) {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement <min)
//             min = arrElement;
//     }
//     return min;
// }
// let array = [48,56,41];
// let min = minInArr(array);
// console.log(min);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumArr(arr){
//     let sum =0;
//     for (const arrElement of arr) {
//         sum+=arrElement;
//     }
//     return sum;
// }
// let array = [48,56,41];
// let sum= sumArr(array);
// console.log(sum);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageArr(arr){
//     let sum =0;
//     for (const arrElement of arr) {
//         sum+=arrElement;
//     }
//     return sum / arr.length;
// }
// let array = [48,56,41];
// let average= averageArr(array);
// console.log(average);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function keyArr(arr){
//     let keys = [];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             keys.push(key);
//         }
//     }
//     return keys;
// }
// let ex =[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keys = keyArr(ex);
// console.log(keys);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function valueArr(arr){
//     let values = [];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             if(arrElement.hasOwnProperty(key)) {
//                 values.push(arrElement[key]);
//             }
//
//         }
//     }
//     return values;
// }
// let ex =[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keys = valueArr(ex);
// console.log(keys);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function sumIndex(arr0,arr1){
//     let resultArr=[];
//     for (let i = 0; i < arr0.length; i++) {
//         resultArr[i]=arr0[i]+arr1[i];
//     }
//     return resultArr;
// }
// let ar0=[1,2,3,4];
// let ar1=  [2,3,4,5];
// let sum = sumIndex(ar0,ar1);
// console.log(sum);
//
// ============================================================================================
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minReturnMaxOut(){
//     let min,max;
//     min = arguments[0];
//     max = arguments[0];
//     for (const argument of arguments) {
//         if (min > argument){
//             min = argument;
//         }else if (max<argument){
//             max = argument;
//         }
//     }
//     console.log('maximum',max);
//     return min;
// }
// let min = minReturnMaxOut(4,5,1,8,6,4,76,5,1,-1,5,8);
// console.log('min',min);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// function valueKeyArr(arr) {
//     let choice = +prompt('values - 0,\nkeys - 1');
//     let values = [];
//     let keys = [];
//     for (const arrElement of arr) {
//         for (const key in arrElement) {
//             if (choice === 0) {
//                 if (arrElement.hasOwnProperty(key)) {
//                     values.push(arrElement[key]);
//                 }
//             } else if (choice === 1){
//                 if (arrElement.hasOwnProperty(key)) {
//                     keys.push(key);
//                 }
//             }
//
//
//         }
//     }
//     if (choice === 0) {
//         return values;
//     } else if (choice === 1){
//         return keys;
//     }
// }
//
// let ex = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let keys = valueKeyArr(ex,);
// console.log(keys);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function foo(array,i)
// {
//     console.log(array);
//     let tmp;
//     for (let j = 0; j < array.length; j++) {
//         if(j===i){
//             tmp =array[i];
//             array[i]=array[i+1];
//             array[i+1]=tmp;
//         }
//     }
//     console.log(array);
// }
// foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function foo(array) {
//     for (const arrayElement of array) {
//         if(!arrayElement){
//             array.splice(array.indexOf(arrayElement),1);
//             array.push(0);
//
//         }
//     }
//     return array;
// }
//
// let arr = [0, 1, 0, 1];
// arr = foo(arr);
// console.log(arr);

// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//-------------
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// function magicSpace(str) {
//     let result = str.trim();
//     let start = result.indexOf(' ');
//     let end = result.lastIndexOf(' ');
//
//     result = result.slice(0,start) + result.slice(end,result.length);
//     return result;
//
// }
//
// n1 = magicSpace(n1);
// console.log(n1);


// ============================================================================================

//// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function hello() {
//     let div = document.createElement('div');
//     div.innerText = 'Hello owu';
//     document.body.appendChild(div);
// }
//
// hello();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function hello2(type, text) {
//     let div = document.createElement(`${type}`);
//     div.innerText = `${text}`;
//     div.id = 'divka';
//     document.body.appendChild(div);
// }
//
// hello2('div', 'asdsadasdasd');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = ['audi', 'bmw', 'dziguli'];
//
// function carsList(cars, elementId) {
//     let ul = document.createElement(`ul`);
//     for (const car of cars) {
//         let li = document.createElement(`li`);
//         li.innerText = `${car}`;
//         ul.appendChild(li);
//     }
//     let idTeg = document.getElementById(`${elementId}`);
//     idTeg.appendChild(ul);
//
// }
//
// carsList(cars, 'divka');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці



// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// let cars2 = [
//     {brand: 'audi', model: 'a4', price: '15000'},
//     {brand: 'bmw', model: 'm5', price: '30000'},
//     {brand: 'dziguli', model: 'forever', price: '1000'}
// ];
//
// function carsBlock(cars, elementId) {
//     let carDiv;
//     let carLi;
//     let idTeg = document.getElementById(`${elementId}`);
//     for (const car of cars) {
//         carDiv = document.createElement('div');
//         for (const key in car) {
//             carLi = document.createElement('div');
//             carLi.innerText = `${key}: ${car[key]}`;
//             carDiv.appendChild(carLi);
//         }
//         idTeg.appendChild(carDiv);
//     }
// }
//
// carsBlock(cars2, 'divka'); // id divka додається в функції hello2 на дві функції вище!!!
// // ******************* НАЗАД В МИНУЛЕ *********************** //
