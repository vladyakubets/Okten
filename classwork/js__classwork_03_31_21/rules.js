// //2) Є масив котрий характеризує правила.
// //    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// //    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// //    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
// //
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
// let contentDiv = document.createElement('div');
// contentDiv.id = 'content';
// document.body.appendChild(contentDiv);
//
// let header = document.createElement('h1');
// header.innerText = 'Правила бойцовского клуба';
// document.body.appendChild(header);
//
// let wrap = document.createElement('div');
// wrap.id = 'wrap';
// document.body.appendChild(wrap);
//
// let i=1;
// for (const rule of rules) {
//     let ruleDiv = document.createElement('div');
//     let ruleHeader = document.createElement('h2');
//     let ruleParagraph = document.createElement('p');
//
//
//     ruleDiv.classList.add('rules', `rule${i}`);
//     i++;
//
//     ruleHeader.innerText = `${rule.title}`;
//     ruleParagraph.innerText = `${rule.body}`;
//
//     ruleDiv.appendChild(ruleHeader);
//     ruleDiv.appendChild(ruleParagraph);
//     wrap.appendChild(ruleDiv);
// }

// // //- Дано 2 масиви з рівною кількістю об'єктів.
// // // Масиви:
// let usersWithId = [
//     {id: 1, name: 'Vlad', age: 18, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
//
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// // Записати цей об'єкт в новий масив
// // Example:
// let usersWithCities = {};
// let i = 0;
// for (let j = 0; j < usersWithId.length; j++) {
//     for (let k = 0; k < citiesWithId.length; k++) {
//         if (usersWithId[j].id === citiesWithId[k].user_id) {
//
//         }
//     }
// }
//
// console.log(usersWithCities);
