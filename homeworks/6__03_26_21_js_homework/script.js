// //--створити масив та вивести його в консоль:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// let numArr = [1, 3, 5, 6, 2];
// let strArr = ['asd', 'qwe', 'zxc', 'dfg', 'ryf0'];
// let arr = ['asd', 'qwe', 2, 55, true];
// for (const item of numArr) {
//     console.log(item);
// }
// for (const item of strArr) {
//     console.log(item);
// }
// for (const item of arr) {
//     console.log(item);
// }

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array=[];
// array[0]=5;
// array[1]=55;
// array[2]=555;
// array[3]=5555;
// array[4]=55555;
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>DIV</div>`);
//
// }
//
// //За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>DIV №${i+1}</div>`);
//
// }

// //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=1;
// while (i<= 20) {
//     document.write(`<h1>header</h1>`);
//     i++;
// }

// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=1;
// while (i<= 20) {
//     document.write(`<h1>header №${i}</h1>`);
//     i++;
// }

// //Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr1 = [1,56,545,94,595,84435,35,489,35,75];
// for (const number of arr1) {
//     console.log(number);
// }

// //Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr2 = ['asd', 'qwe', 'zxc', 'dfg', 'ryf0', 'asd', 'qwe', 'zxc', 'dfg', 'ryf0'];
// for (const str of arr2) {
//     console.log(str);
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
// for (const item of arr3) {
//     console.log(item);
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
// for (const item of arr3) {
//     if(typeof item === 'boolean'){
//         console.log(item);
//     }
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
// for (const item of arr3) {
//     if(typeof item === 'number'){
//         console.log(item);
//     }
// }
//
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
// for (const item of arr3) {
//     if(typeof item === 'string'){
//         console.log(item);
//     }
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr4 = [];
// arr[0] = 16;
// arr[1] = 156;
// arr[2] = true;
// arr[3] = 19.5;
// arr[4] = false;
// arr[5] = 'asd';
// arr[6] = 12.5;
// arr[7] = 166;
// arr[8] = 'fqwr';
// arr[9] = false;
// for (let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i]);
//
// }


// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
//     document.write(`<div>i = ${i+1}</div>`);
// }

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i+1);
//     document.write(`<div>i = ${i+1}</div>`);
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i+1);
//     document.write(`<div>i = ${i+1}</div>`);
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if((i % 2)===0){
//
//         console.log(i);
//         document.write(`<div>i = ${i}</div>`);
//     }
// }


// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if((i % 2)===1){
//
//         console.log(i);
//         document.write(`<div>i = ${i}</div>`);
//     }
// }

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let h, m, s;
//
// for (let j = 0; j < 2; j++) {
//     for (let k = 0; k < 60; k++) {
//         m = j;
//         s = k;
//         if (m < 10) {
//             m = '0' + m;
//         }
//         if (s < 10) {
//             s = '0' + s;
//         }
//
//         document.write(`<div>${m}:${s}</div>`)
//     }
// }


// // - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let h, m, s;
//
//     for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 60; j++) {
//             for (let k = 0; k < 60; k++) {
//                 h = i;
//                 m = j;
//                 s = k;
//                 if (h < 10) {
//                     h = '0' + h;
//                 }
//                 if (m < 10) {
//                     m = '0' + m;
//                 }
//                 if (s < 10) {
//                     s = '0' + s;
//                 }
//                 document.write(`<div>${h}:${m}:${s}</div>`)
//             }
//         }
//
//     }



// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

