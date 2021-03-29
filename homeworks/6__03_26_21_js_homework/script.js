//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let numArr = [1, 3, 5, 6, 2];
let strArr = ['asd', 'qwe', 'zxc', 'dfg', 'ryf0'];
let arr = ['asd', 'qwe', 2, 55, true];
for (const item of numArr) {
    console.log(item);
}
for (const item of strArr) {
    console.log(item);
}
for (const item of arr) {
    console.log(item);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array=[];
array[0]=5;
array[1]=55;
array[2]=555;
array[3]=5555;
array[4]=55555;
for (const arrayElement of array) {
    console.log(arrayElement);
}

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>DIV</div>`);

}

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>DIV №${i+1}</div>`);

}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=1;
while (i<= 20) {
    document.write(`<h1>header</h1>`);
    i++;
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i=1;
while (i<= 20) {
    document.write(`<h1>header №${i}</h1>`);
    i++;
}

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [1,56,545,94,595,84435,35,489,35,75];
for (const number of arr1) {
    console.log(number);
}

//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = ['asd', 'qwe', 'zxc', 'dfg', 'ryf0', 'asd', 'qwe', 'zxc', 'dfg', 'ryf0'];
for (const str of arr2) {
    console.log(str);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
for (const item of arr3) {
    console.log(item);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
for (const item of arr3) {
    if(typeof item === 'boolean'){
        console.log(item);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
for (const item of arr3) {
    if(typeof item === 'number'){
        console.log(item);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr3 = [1,56,545,'asd', 'qwe', 'zxc', 'dfg',true,489,false,75];
for (const item of arr3) {
    if(typeof item === 'string'){
        console.log(item);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr4 = [];
arr[0] = 16;
arr[1] = 156;
arr[2] = true;
arr[3] = 19.5;
arr[4] = false;
arr[5] = 'asd';
arr[6] = 12.5;
arr[7] = 166;
arr[8] = 'fqwr';
arr[9] = false;
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);

}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i+1);
    document.write(`<div>i = ${i+1}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i+1);
    document.write(`<div>i = ${i+1}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i+1);
    document.write(`<div>i = ${i+1}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if((i % 2)===0){

        console.log(i);
        document.write(`<div>i = ${i}</div>`);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if((i % 2)===1){

        console.log(i);
        document.write(`<div>i = ${i}</div>`);
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
let h, m, s;

for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 60; k++) {
        m = j;
        s = k;
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }

        document.write(`<div>${m}:${s}</div>`)
    }
}


// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
let h, m, s;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                h = i;
                m = j;
                s = k;
                if (h < 10) {
                    h = '0' + h;
                }
                if (m < 10) {
                    m = '0' + m;
                }
                if (s < 10) {
                    s = '0' + s;
                }
                document.write(`<div>${h}:${m}:${s}</div>`)
            }
        }

    }


// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let mas = ['a', 'b', 'c'];
let mas1='';
for (let i = 0; i < mas.length; i++) {
    mas1 += mas[i];
}
console.log(mas1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let mas = ['a', 'b', 'c'];
let mas1='';
let i=0;
while(i<mas.length)
{
    mas1 += mas[i];
    i++;
}
console.log(mas1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let mas = ['a', 'b', 'c'];
let mas1='';
for (const chr of mas) {
    mas1+=chr;
}
console.log(mas1);

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let mas =  ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    mas[i+2]= i;
}
console.log(mas);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let mas =[1,2,3];
let mas1=[];
for (let i = 0; i < mas.length; i++) {
    mas1[i]=mas[mas.length-i-1];
}
console.log(mas1);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let mas =  [1,2,3];
for (let i = 4; i <= 6; i++) {
    mas[i-1]= i;
}
console.log(mas);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let mas =  [1,2,3];
mas.splice(0,0,4,5,6);
console.log(mas);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let mas = ['js', 'css', 'jq'];
console.log(mas.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let mas = ['js', 'css', 'jq'];
console.log(mas.pop());


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let mas = [1, 2, 3, 4, 5];
mas = mas.slice(3,5);
console.log(mas);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let mas = [1, 2, 3, 4, 5];
mas = mas.slice(0,2);
console.log(mas);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let mas = [1, 2, 3, 4, 5];
mas.splice(1,2);
console.log(mas);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let mas = [1, 2, 3, 4, 5];
mas.splice(3,0,'a', 'b', 'c');
console.log(mas);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let mas = [1, 2, 3, 4, 5];
mas.splice(1,0,'a', 'b');
mas.splice(6,0,'c');
mas.splice(9,0,'e');
console.log(mas);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let mas = [];
for (let i = 0; i < 10; i++) {//initialization
    mas[i] = i + 1;
}
for (let i = 0; i < mas.length; i++) {
    if (mas[i] % 2 === 0)
        console.log(mas[i])
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let mas = [];
for (let i = 0; i < 10; i++) {//initialization
    mas[i] = i + 1;
}
let mas1=[];
for (let i = 0; i < mas.length; i++) {
    mas1.push(mas[i]);
}
console.log(mas1);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let mas = [];
for (let i = 0; i < 10; i++) { //initialization
    mas[i] = i + 1;
}
let mas1=[];
let i=0;
while (true){
    mas1[i]=mas[i];
    if ((i+1)===mas.length)
        break;
    i++;
}
console.log(mas1);




// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let mas = [2,17,13,6,22,31,45,66,100,-18];
let i =0;
while (i<mas.length){
    console.log(mas[i]);
    i++;
}


// 2. перебрати його циклом for
let mas = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < mas.length; i++) {
    console.log(mas[i]);
}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < mas.length) {
    if (i % 2 === 1)
        console.log(mas[i], i);
    i++;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < mas.length; i++) {
    if (i % 2 === 1)
        console.log(mas[i], i);
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < mas.length) {
    if (mas[i] % 2 === 0)
        console.log(mas[i], i);
    i++;
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < mas.length; i++) {
    if (mas[i] % 2 === 0)
        console.log(mas[i], i);
}


// 7. замінити кожне число кратне 3 на слово "okten"
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < mas.length; i++) {
    if (mas[i] % 3 === 0)
        mas[i] = 'okten';
}
console.log(mas);


// 8. вивести масив в зворотньому порядку.
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = mas.length-1; i >=0; i--) {
    console.log(mas[i]);
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = mas.length - 1;
while (i >= 0) {
    console.log(mas[i]);
    i--;
}

for (let i = mas.length - 1; i >= 0; i--) {
    console.log(mas[i]);
}

i = mas.length - 1;
while (i >=0) {
    if (i % 2 === 1)
        console.log(mas[i], i);
    i--;
}

for (let i = mas.length-1; i >= 0; i--) {
    if (i % 2 === 1)
        console.log(mas[i], i);
}

i=mas.length-1;
while (i >=0) {
    if (mas[i] % 2 === 0)
        console.log(mas[i], i);
    i--;
}

for (let i = mas.length-1; i >= 0; i--) {
    if (mas[i] % 2 === 0)
        console.log(mas[i], i);
}

for (let i = mas.length-1; i >= 0; i--) {
    if (mas[i] % 3 === 0)
        mas[i] = 'okten';
}
console.log(mas);


// 10
//  створити пустий масив та :
let array=[];

// - заповнити його 50 парними числами за допомоги циклу.
let j=0;
for (let i = 0; i < 50; i++) {
    j+=2;
    array[i]=j;
}
console.log(array);


// - заповнити його 50 непарними числами за допомоги циклу.
j=1;
for (let i = 0; i < 50; i++) {
    j+=2;
    array[i]=j;
}
console.log(array);



// 1
//  створити пустий масив та :
let array = [];

// 1. заповнити його 50 парними числами за допомоги циклу.
let j=0;
for (let i = 0; i < 50; i++) {
    j+=2;
    array[i]=j;
}
console.log(array);


// 2. заповнити його 50 непарними числами за допомоги циклу.
j=1;
for (let i = 0; i < 50; i++) {
    j+=2;
    array[i]=j;
}
console.log(array);


// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let min = Math.ceil(8);
let max = Math.floor(732);
for (let i = 0; i < 100; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1) + min);

}
console.log(array);

//  2. вывести на консоль  каждый третий елемент
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
        console.log(array[i], i);
    }
}


//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
console.log('вывести на консоль  каждый третий елемент\n' +
    '//  но при условии что его значение является парным.');
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0 && array[i] % 2 === 0) {
        console.log(array[i], i);
    }
}


//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
console.log('4. вывести на консоль  каждый третий елемент\n' +
    ' но при условии что он имеет парное значение и\n' +
    ' записать их в другой массив');
let array1 = [];
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0 && array[i] % 2 === 0) {
        //console.log(array[i], i);
        array1.push(array[i]);
    }
}
console.log(array1);


//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
console.log('5. Вывести каждый елемент массива у которого соседний с права элемент - парный');
for (let i = 0; i < array.length; i++) {
    if (array[i + 1] % 2 === 0) {
        console.log(array[i], i);
    }

}


//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let price = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < price.length; i++) {
    sum += price[i];
}
console.log('середній чек')
console.log(sum / price.length);



// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let rndArr = [];
let copyArr = [];
for (let i = 0; i < 10; i++) {
    rndArr[i] = Math.random().toPrecision(2);
    copyArr[i] = (rndArr[i] * 5).toPrecision(2);

}
console.log('створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.')
console.log(rndArr);
console.log(copyArr);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
let exmpl = [1, 5, 'ajdn', 9, true, false, 5, 'aoj', 90];
let numbrArr=[];
let j=0;
for (let i = 0; i < exmpl.length; i++) {

    if (typeof exmpl[i]==='number'){
        numbrArr.push(exmpl[i]);
    }
}
console.log('створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об\'єкт є числом,\n' +
    '  додати його в інший масив.');
console.log(numbrArr);


