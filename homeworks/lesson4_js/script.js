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
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
//
// ============================================================================================