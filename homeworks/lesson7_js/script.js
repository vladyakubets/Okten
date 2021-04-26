// //- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// document.write(`<p> this is paragraph </p>`)
// document.write(`<button> click </button>`)
//
// let par = document.querySelector('p');
// let btn = document.querySelector('button');
//
// btn.onclick = (ev) => {
//     if (par.style.display==='none') {
//         par.style.display = 'block';
//     } else {
//         par.style.display = 'none'
//     }
// }

// // - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// document.write(`<button> click </button>`)
// let btn = document.querySelector('button');
//
// btn.onclick = () => {
//     btn.style.display = 'none';
// }

// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// document.write(
//     `<form name="forma">
//         <input type="number" name="input">
//         <button>ok</button>
//     </form>`
// );
//
// let btn = document.querySelector('button');
// let input = document.forms.forma.input;
//
// btn.onclick = (ev) => {
//     ev.preventDefault();
//     if( input.value < 18){
//         alert('Ти ще замаленький')
//         document.forms.forma.reset();
//     }
// }

// // - Створіть меню, яке розгортається/згортається при клику
// document.write(`
// <nav>
//   <a href="#">HTML</a> |
//   <a href="#">CSS</a> |
//   <a href="#">JavaScript</a> |
//   <a href="#">Python</a>
// </nav>
// `)
// document.write(`<button> click </button>`)
// let btn = document.querySelector('button');
// const nav = document.querySelector('nav');
//
//
// btn.onclick = (ev) => {
//     if (nav.style.display==='none') {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none'
//     }
// }

// // - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вивести список коментарів в документ, кожний в своєму блоці.
// //     Додайте кожному коментарю по кнопці для згортання його body.
// const comments = [
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'}
// ]
//
// for (const comment of comments) {
//     document.write(`<div>
// <h2>${comment.title}</h2>
// <p>${comment.body}</p>
// <button>hide/show</button>
// </div>`);
// }
//
// const btns = document.querySelectorAll('button');
//
// for (const btn of btns) {
//     btn.onclick = (ev) => {
//         if (ev.path[1].querySelector('p').style.display === 'none') {
//             ev.path[1].querySelector('p').style.display = 'block';
//         } else {
//             ev.path[1].querySelector('p').style.display = 'none';
//         }
//     }
// }

// // - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// //     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// document.write(`<form name="forma1">
// <input type="text" name="input1">
// <input type="text" name="input2">
// </form>`);
// document.write(`<form name="forma2">
// <input type="text" name="input3">
// <input type="text" name="input4">
// </form>`);
//
// document.write(`<button> click </button>`)
// const btn = document.querySelector('button');
// const input1 = document.forms.forma1.input1;
// const input2 = document.forms.forma1.input2;
// const input3 = document.forms.forma2.input3;
// const input4 = document.forms.forma2.input4;
//
// btn.onclick = (ev) => {
//     console.log(`input1: ${input1.value}
//     input2: ${input2.value}
//     input3: ${input3.value}
//     input4: ${input4.value}`)
// }

// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// document.write('<form name="forma">' +
//     '<input type="number" name="rows">' +
//     '<input type="number" name="cols">' +
//     '<button name="btn">generate table</button>' +
//     '</form>');
//
// document.write('<div>there should be table</div>')
//
// const element = document.querySelector('div');
// const rows = document.forms.forma.rows;
// const cols = document.forms.forma.cols;
// const btn = document.forms.forma.btn;
//
//
// const trWrite = (id) => {
//     const tr = document.createElement('tr')
//     tr.id = id;
//     element.getElementsByTagName('table')[0].appendChild(tr);
// }
// const tdWrite = (id) => {
//     const td = document.createElement('td')
//     td.innerText = '=)';
//     td.style.border = '2px solid black'
//     document.getElementById(id).appendChild(td);
// }
// btn.onclick = (ev) => {
//     ev.preventDefault();
//     element.innerHTML= '<table></table>'
//     for (let i = 0; i < rows.value; i++) {
//         trWrite(i);
//         for (let j = 0; j < cols.value; j++) {
//             tdWrite(i);
//         }
//     }
// }

// // - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// document.write('<img src="https://i.ytimg.com/vi/riEPqR54yYM/maxresdefault.jpg">' +
//     '<img src="https://owu.com.ua/image/mentors/viktor-kmin_cr.jpg">' +
//     '<img src="https://yt3.ggpht.com/ytc/AAUvwngiCWSZ30JBeulxlahUvZ1QO0z_M_57kXHt8TXH5A=s900-c-k-c0x00ffffff-no-rj">'
// )
// const frwd = document.createElement('button');
// const back = document.createElement('button');
// const images = document.querySelectorAll('img');
//
// images.forEach((img, index) => {
//     img.style.display = 'block';
//     if (index > 0) {
//         img.style.display = 'none';
//     }
//     img.style.width = '300px';
//     img.style.height = '300px';
//     img.style.objectFit = 'contain';
// })
//
// frwd.innerText = '>';
// back.innerText = '<';
// document.body.append(back, frwd);
//
// frwd.onclick = (ev) => {
//     for (let i = 0; i < images.length; i++) {
//         const img = images[i];
//         if (img.style.display === 'block') {
//             img.style.display = 'none';
//             ++i;
//             if (i === images.length) i = 0;
//             images[i].style.display = 'block';
//             break;
//         }
//     }
// }
// back.onclick = (ev) => {
//     for (let i = images.length-1; i >=0 ; i--) {
//         const img = images[i];
//         if (img.style.display === 'block') {
//             img.style.display = 'none';
//             --i;
//             if (i === -1) i = images.length-1;
//             images[i].style.display = 'block';
//             break;
//         }
//     }
// }


//______________________________________________________________________________________________________________________________________________________
//                                                               РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// // - Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// const badWords = ['pizdets', 'nahui', 'blyat'];
// document.write(`<form name="forma">
// <input type="text" name="input">
// <button>submit</button>
// </form>`)
// const btn = document.querySelector('button')
// const input = document.forms.forma.input;
//
// btn.onclick = (ev) => {
//     ev.preventDefault();
//     for (const badWord of badWords) {
//         if (badWord === input.value) {
//             alert('you entered a bad word');
//         } else {
//             alert('you entered a good word');
//             break;
//         }
//     }
// }


// // - Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// const badWords = ['pizdets', 'nahui', 'blyat'];
// document.write(`<form name="forma">
// <input type="text" name="input">
// <button>submit</button>
// </form>`)
// const btn = document.querySelector('button')
// const input = document.forms.forma.input;
//
// btn.addEventListener('click', ev => {
//     ev.preventDefault();
//     for (const badWord of badWords) {
//         if (input.value.search(badWord) >= 0) {
//             alert('you entered a bad word');
//         }
//     }
// })


// // -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
// //     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// const headers = document.querySelectorAll('h1,h2');
// console.log(headers);
//
// const menu = document.createElement('div');
// const ol = document.createElement('ol');
// menu.style.width='300px';
// menu.style.position = 'fixed';
// menu.style.right = '0';
// menu.style.top = '0';
// menu.style.border = '1px solid red';
// menu.style.backgroundColor = 'black';
// menu.style.color = 'white';
// menu.appendChild(ol);
//
// headers.forEach((header,index) => {
//     header.setAttribute('id',`${index}`);
//     const li = document.createElement('li');
//     li.innerHTML = `<a href="#${index}">${header.innerText}</a>`
//     ol.appendChild(li);
// })
//
// document.body.appendChild(menu);



// // -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// // Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// // 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// // 2й - залишає старших 29 років включно
// // 3й - залишає тих в кого місто Київ
// // Дані виводить в документ
//
// document.write(`
// <div id="content"></div>
// <form name="forma">
// <input type="checkbox" id="notMarried" name="isMarried" value="false">
// <label for="notMarried">NotMarried</label><br>
// <input type="checkbox" id="adult" name="age" value="29">
// <label for="adult">older than 29</label><br>
// <input type="checkbox" id="kyiv" name="city" value="Kyiv">
// <label for="kyiv">City: Kyiv</label><br>
// <button>filter</button>
// </form>`);
//
// const btn = document.querySelector('button');
// const notMarried = document.forms.forma.isMarried;
// const adult = document.forms.forma.age;
// const kyiv = document.forms.forma.city;
// const table = document.createElement('table');
// const headerRow = document.createElement('tr');
// table.appendChild(headerRow);
// document.body.appendChild(table);
//
// // Single-depth object from users
// let flattenObject = function(ob) {
//     let toReturn = {};
//
//     for (let i in ob) {
//         if (!ob.hasOwnProperty(i)) continue;
//
//         if ((typeof ob[i]) == 'object') {
//             let flatObject = flattenObject(ob[i]);
//             for (let x in flatObject) {
//                 if (!flatObject.hasOwnProperty(x)) continue;
//
//                 toReturn[x] = flatObject[x];
//             }
//         } else {
//             toReturn[i] = ob[i];
//         }
//     }
//     return toReturn;
// };
// let flatArrayOfUsers = [];
// usersWithAddress.forEach(value => {
//
//     const flatObject = flattenObject(value);
//     flatArrayOfUsers.push(flatObject);
//
// })
//
//
// //table header
// function makeHeader(){
//     for (const key in flatArrayOfUsers[0]) {
//         const th = document.createElement('td');
//         th.style.width = '130px';
//         th.innerText = key;
//         headerRow.appendChild(th);
//     }
// }
// //table body
// function makeTableBody(users){
//     users.forEach(user => {
//         const tr = document.createElement('tr');
//         for (const userKey in user) {
//              const td = document.createElement('td');
//              td.innerText = `${user[userKey]}`;
//              tr.appendChild(td);
//
//         }
//         table.appendChild(tr);
//     })
// }
//
// // filter users
// function filterUsers(){
//     let filtered = [];
//     for (const user of flatArrayOfUsers) {
//         filtered.push(user);
//     }
//     if (notMarried.checked){
//         filtered = filterMarrige(filtered);
//     }
//     if (adult.checked){
//         filtered = filterAge(filtered);
//     }
//     if (kyiv.checked){
//         filtered = filterCity(filtered);
//     }
//
//     return filtered;
// }
//
// function filterMarrige(filtered){
//     let newFiltered = [];
//     filtered.forEach(user => {
//         if (!user.isMarried){
//             newFiltered.push(user);
//         }
//     })
//     return newFiltered;
// }
//
// function filterAge(filtered){
//     let newFiltered = [];
//     filtered.forEach(user => {
//         if (user.age >= 29){
//             newFiltered.push(user);
//         }
//     })
//     return newFiltered;
// }
//
// function filterCity(filtered){
//     let newFiltered = [];
//     filtered.forEach(user => {
//         if (user.city === 'Kyiv'){
//             newFiltered.push(user);
//         }
//     })
//     return newFiltered;
// }
//
// btn.addEventListener("click", ev => {
//     ev.preventDefault();
//     const filteredUsers = filterUsers(flatArrayOfUsers);
//     table.innerHTML = ''
//     makeHeader();
//     makeTableBody(filteredUsers);
// })






















