// //______________________________________________________________________________________________________________________________________________________
// //                                                                 РОБОТА В АУДИТОРІЇ
// // ______________________________________________________________________________________________________________________________________________________
// //
// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// //     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let mainHeader=document.getElementById('main_header');
// mainHeader.style.color = "#0c3ab0";
// mainHeader.innerText = 'February-2021';
//
// //     b) робить шириниу елементу ul 400px
// let ulList = document.getElementsByTagName('ul');
// for (const ulListElement of ulList) {
//     ulListElement.style.width='400px';
// }
// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (const linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }
//
// //     d) отримує текст який зберігається в елементі з класом listElement2
// let li2Text =document.getElementsByClassName('listElement2');
// for (const li2TextElement of li2Text) {
//     console.log(li2TextElement.innerText);
// }
//
// //     e) отримує всі елементи li та змінює ім колір фону на сірий
// let liList = document.getElementsByTagName('li');
// for (const liListElement of liList) {
//     liListElement.style.backgroundColor = 'grey';
// }
//
// //     f) отримує всі елементи 'a' та додає їм клас anchor
// let aList = document.getElementsByTagName('a');
// for (const aListElement of aList) {
//     aListElement.classList.add('anchor');
// }
//
// //     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// // aList взято з попереднього завдання
// for (const aListElement of aList) {
//     if (aListElement.innerText === 'link3'){
//         aListElement.style.fontSize = '40px';
//     }
// }
//
// //     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// // aList взято з попереднього завдання
// for (const aListElement of aList) {
//     aListElement.classList.add(`element_${aListElement.innerText}`);
// }
//
// //     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader =document.getElementsByClassName('sub-header');
// let color = prompt('enter a color for Sub-headers:');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = color;
// }
//
// //     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let textColor = prompt('enter text color for second segment');
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.innerText ==='content 2 segment')
//         subHeaderElement.style.color = textColor;
// }
//
// //     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName('content_1');
// let textContent = prompt('enter some text');
// for (const content1Element of content1) {
//     content1Element.innerText = textContent;
// }
//
// //     l) отримати елементи p та змінити їм padding на 20px
// let pList = document.getElementsByTagName('p');
// for (const pListElement of pList) {
//     pListElement.style.padding = '20px';
// }

// //     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2List = document.getElementsByClassName('text2');
// for (const text2ListElement of text2List) {
//     text2ListElement.innerText = `february-2021`;
// }
//----------------------------------------------------------------------------------------------------------------------
//2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				}
			];

for (const rule of rules) {
    let ruleDiv = document.createElement('div');
    let ruleHeader= document.createElement('h2');
    let ruleParagraph= document.createElement('p');
    ruleDiv.appendChild(ruleHeader);
    ruleDiv.appendChild(ruleParagraph);
    document.body.appendChild(ruleDiv);
}
//
// ===========================================================================