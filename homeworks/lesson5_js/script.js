// //Реалізовуємо свій компютерний магазин.
// // ===
// // Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// // Оперативна память.
// // Потужність процесора. (цифра від 0 до 1000)
// // Назва.
// // В кожного компютера має бути метод включання.
//
// class Computer {
//     constructor(ram, power = 0, name) {
//         this.ram = ram;
//         if (power >= 1000 || power < 0) {
//             alert('power value incorrect please enter between 0:1000');
//         } else {
//             this.power = power;
//         }
//         this.name = name;
//         this.switch = false;
//     }
//
//     powerSwitch() {
//         if (this.switch === false) {
//             console.log('computer is turning on');
//             this.switch = true;
//         } else {
//             console.log('computer is turning off');
//             this.switch = false;
//         }
//     }
// }
//
// let dell = new Computer(2, 900, 'dell');
// console.log(dell);
// dell.powerSwitch();
// dell.powerSwitch();
// // ===
// // Від базового компютрера треба реалізувати ноутбук.
// // Він має нову властивість дюймаж монітора.
// //
// // У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
//
// class Notebook extends Computer {
//     constructor(ram, power, name, screenSize, batteryLife) {
//         super(ram, power, name);
//         this.screenSize = screenSize;
//         this.batteryLife = this.power / (this.screenSize * this.ram);
//
//     }
// }
//
// let asus = new Notebook(16, 550, 'asus', 15.6);
// console.log(asus);
//
// // ===
// // Від ноутбука потрібно зробити ультрабук.
// // Він має нову змінну ваги.
// // При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// class Laptop extends Notebook {
//     constructor(ram, power, name, screenSize, batteryLife, weight) {
//         super(ram, power, name, screenSize, batteryLife);
//         this.weight = weight;
//     }
//
//     powerSwitch() {
//         if (this.batteryLife < 4) {
//             return console.log(this.name, 'battery life < 4 hours, cannot turn on this laptop');
//         }
//         if (this.switch === false) {
//             console.log('computer is turning on');
//             this.switch = true;
//         } else {
//             console.log('computer is turning off');
//             this.switch = false;
//         }
//     }
//
// }
//
// let hp = new Laptop(16, 900, 'hp', 14, undefined, 2);
// console.log(hp);
// hp.powerSwitch();
//
// // ===
// // Від базвого класу потрібно створити базовий ПК.
// // В нього має бути новий метод запуску ігор.
// // Кількість FPS визначається як потужність / опервтивку.
// // Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// //
// // Компютер можна апгрейдити.
// // Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// // Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// // Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// class PC extends Computer {
//     constructor(ram, power, name) {
//         super(ram, power, name);
//         this.fps = this.power / this.ram;
//         this.powerMultiplier = 0;
//
//     }
//
//     play(game) {
//         console.log('You are playing', game, 'with', this.fps, 'FPS');
//     }
//
//     upgradePower(multiplier) {
//         if (multiplier > 0.1) {
//             return 'multiplier value should be between 0...0.1';
//         }
//         if (multiplier > this.powerMultiplier) {
//             this.powerMultiplier = multiplier;
//             this.power += this.power * multiplier;
//         } else {
//             console.log('can`t decrease power value');
//         }
//
//     }
//
//     upgradeRam() {
//         if (this.ram >= 128) {
//             return console.log('ram is maximum');
//         }
//         this.ram *= 2;
//     }
// }
//
// let oldPC = new PC(8, 600, 'Orion');
// oldPC.play('Minecaft');
// console.log(oldPC);
// oldPC.upgradePower(0.04);
// oldPC.upgradeRam(); //16
// oldPC.upgradeRam();//32
// oldPC.upgradeRam();//64
// oldPC.upgradeRam();//128
// oldPC.upgradeRam();//256 false
// console.log(oldPC);
// oldPC.upgradePower(0.02);
//
//
// // ===
// // Від базового ПК необхідно зробити ігровий ПК.
// // Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// // При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// // що на цьому відрі ігри не запускаються.
// class GamingPC extends PC {
//     constructor(ram, power, name) {
//         super(ram, power, name);
//
//     }
//
//     play(game) {
//         if (this.power < 500 && this.ram < 8) {
//             return console.log('на цьому відрі ігри не запускаються', this.name);
//         }
//         this.power *= 0.9;
//         console.log('You are playing', game, 'with', this.fps, 'FPS');
//     }
// }
//
// let rog = new GamingPC(4, 499, 'rog');
// rog.play('RDR 2')
// console.log(rog);

//______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log('ідемо зі швидкістю', this.maxSpeed, 'на годину');
//     }
//     this.info = function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed < this.maxSpeed) {
//             return console.log('Нова швидкість менша за поточну, задайте швидкість більшу ніж', this.maxSpeed);
//         }
//         this.maxSpeed = newSpeed;
//         console.log('Нова максимальна швидкість', this.maxSpeed);
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log('рік випуску', this.year);
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
// }
//
// let driver = {
//     name: 'alexandro',
//     surName: 'shumacher',
//     age: 25
// }
//
// let audi = new Car('s6', 'audi', 2010, 280, 3);
// console.log(audi);
// audi.drive();
// audi.info();
// audi.increaseMaxSpeed(20)
// audi.increaseMaxSpeed(290)
// audi.changeYear(2015);
// audi.addDriver(driver);
// console.log(audi);

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive(){
//         console.log('ідемо зі швидкістю', this.maxSpeed, 'на годину');
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed){
//         if (newSpeed < this.maxSpeed) {
//             return console.log('Нова швидкість менша за поточну, задайте швидкість більшу ніж', this.maxSpeed);
//         }
//         this.maxSpeed = newSpeed;
//         console.log('Нова максимальна швидкість', this.maxSpeed);
//     }
//     changeYear(newValue){
//         this.year = newValue;
//         console.log('рік випуску', this.year);
//     }
//     addDriver(driver){
//         this.driver = driver;
//         console.log(this.driver);
//     }
// }
// let driver = {
//     name: 'alexandro',
//     surName: 'shumacher',
//     age: 25
// }
//
// let audi = new Car('s6', 'audi', 2010, 280, 3);
// console.log(audi);
// audi.drive();
// audi.info();
// audi.increaseMaxSpeed(20)
// audi.increaseMaxSpeed(290)
// audi.changeYear(2015);
// audi.addDriver(driver);
// console.log(audi);

//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let girls = [];
// let prince = new Prince('Valera', 25, 40);
//
// let name, age, footSize;
//
// for (let i = 0; i < 10; i++) {
//     name = 'popelushaka ' + i;
//     age = i + 20;
//     footSize = 43 - i;
//     girls[i] = new Popelushka(name, age, footSize);
// }
// console.log(girls);
//
//
// for (const girl of girls) {
//     if (prince.shoe === girl.footSize) {
//         console.log(prince.name, 'found shoe of girl', girl.name);
//         break;
//     }
// }


//
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// function Popelushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//
//     this.findGirl = function (girls) {
//         for (const girl of girls) {
//             if (this.shoe === girl.footSize) {
//                 console.log(this.name, 'found shoe of girl', girl.name);
//                 break;
//             }
//         }
//     }
// }
//
// let girls = [];
//
// let name, age, footSize;
//
// for (let i = 0; i < 10; i++) {
//     name = 'popelushaka ' + i;
//     age = i + 20;
//     footSize = 43 - i;
//     girls[i] = new Popelushka(name, age, footSize);
// }
// console.log(girls);
//
// let prince = new Prince('Valera', 25, 40);
// prince.findGirl(girls);


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// function Teg(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let a = new Teg('a', 'устанавливает ссылку или якорь', [{
//     titleOfAttr: 'href',
//     actionOfAttr: 'Задает адрес документа, на который следует перейти.'
// }, {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let div = new Teg('div', 'выделения фрагмента документа с целью изменения вида содержимого', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Задает выравнивание содержимого тега'
// }, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// let h1 = new Teg('h1', 'представляет собой наиболее важный заголовок первого уровня', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание заголовка.'
// }, {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let span = new Teg('span', 'предназначен для определения строчных элементов документа', [{
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }, {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.'}]);
// let input = new Teg('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{
//     titleOfAttr: 'name',
//     actionOfAttr: 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.'
// }, {titleOfAttr: 'pattern', actionOfAttr: 'Устанавливает шаблон ввода.'}]);
// let form = new Teg('form', 'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером', [{
//     titleOfAttr: 'method',
//     actionOfAttr: 'Метод протокола HTTP.'
// }, {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let option = new Teg('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера', [{
//     titleOfAttr: 'value',
//     actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
// }, {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}]);
// let select = new Teg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
// }, {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}]);
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);


//
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// class Teg{
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let a = new Teg('a', 'устанавливает ссылку или якорь', [{
//     titleOfAttr: 'href',
//     actionOfAttr: 'Задает адрес документа, на который следует перейти.'
// }, {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let div = new Teg('div', 'выделения фрагмента документа с целью изменения вида содержимого', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Задает выравнивание содержимого тега'
// }, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// let h1 = new Teg('h1', 'представляет собой наиболее важный заголовок первого уровня', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание заголовка.'
// }, {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let span = new Teg('span', 'предназначен для определения строчных элементов документа', [{
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }, {titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.'}]);
// let input = new Teg('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{
//     titleOfAttr: 'name',
//     actionOfAttr: 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.'
// }, {titleOfAttr: 'pattern', actionOfAttr: 'Устанавливает шаблон ввода.'}]);
// let form = new Teg('form', 'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером', [{
//     titleOfAttr: 'method',
//     actionOfAttr: 'Метод протокола HTTP.'
// }, {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
// let option = new Teg('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера', [{
//     titleOfAttr: 'value',
//     actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
// }, {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}]);
// let select = new Teg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
// }, {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}]);
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);

//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model:
// }