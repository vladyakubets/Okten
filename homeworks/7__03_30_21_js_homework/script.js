// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// let pText = document.getElementById('content').innerText;
// console.log(pText);


// b) отримує текст з блоку з id "rules"
// let rulText = document.getElementById('rules').innerText;
// console.log(rulText);


// c) замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById('content').innerText ='lorem';


// d) замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById('rules').innerText = 'lorem';


// e) змініть кожному елементу колір фону на червоний
// let all = document.body.getElementsByTagName("*");
// for (let i = 0; i < all.length; i++) {
//     all[i].style.backgroundColor='red';
// }


// f) змініть кожному елементу колір тексту на синій
// let all = document.body.getElementsByTagName("*");
// for (let i = 0; i < all.length; i++) {
//     all[i].style.color='blue';
// }


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classList = document.getElementById('rules').classList;
// console.log(classList);


// h) отримати всі елементи з класом fc_rules
// let itemsOneClass=document.getElementsByClassName('fc_rules');
// console.log(itemsOneClass);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// let itemsOneClass=document.getElementsByClassName('fc_rules');
// for (let i = 0; i < itemsOneClass.length; i++) {
//     itemsOneClass[i].style.color = 'red';
// }

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// let uDiv;
// for (let i = 0; i < users.length; i++) {
//     uDiv = document.createElement("div");
//     uDiv.style.marginBottom ='15px';
//     uDiv.style.lineHeight ='25px';
//
//     uDiv.innerText = `Name: ${users[i].name}\nAge: ${users[i].age}\n` +
//         `Status: ${users[i].status}\nAddress: ${users[i].address.country},`+
//         ` ${users[i].address.city}, ${users[i].address.street}, ${users[i].address.houseNumber}`;
//     document.body.appendChild(uDiv);
// }


//3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
let uDiv, test;
for (let i = 0; i < users.length; i++) {
    uDiv = document.createElement("div");
    uDiv.style.display = 'flex';
    uDiv.style.marginBottom = '15px';
    uDiv.style.lineHeight = '25px';
    uDiv.innerHTML = `<div>Name: ${users[i].name}<br>Age: ${users[i].age}<br>Status: ${users[i].status}</div>` +
        `<div><div>Country: ${users[i].address.country}</div><div>City: ${users[i].address.city}</div>`+
        `<div>Street: ${users[i].address.street}</div><div>House: ${users[i].address.houseNumber}</div>`;
    uDiv.lastChild.style.marginLeft = '20px';


    document.body.appendChild(uDiv);
}