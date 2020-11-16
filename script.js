// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let element = document.getElementById('text');
// let button = document.getElementById('hide-button')
// button.addEventListener('click', () => {
//     element.style.display = 'none';
// })


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('hide-yourself')
// button.onclick = () => {
//     button.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.getElementById('check-age-form')
// let button = form.submit
// form.onsubmit = (event) => {
//     event.preventDefault()
//     if (+form.age.value > 18) {
//         form.innerHTML += "You are an old perk"
//     } else {
//         form.innerHTML += "You are too young"
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.getElementById('menu')
// let button = document.getElementById('menu-hider')
// button.onclick = () => {
//     if (menu.classList[0] === 'undefined' || menu.classList[0] === 'show') {
//         menu.classList.remove('show')
//         menu.classList.add('hide')
//     } else {
//         menu.classList.remove('hide')
//         menu.classList.add('show')
//     }
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [{
//     title: "Animals",
//     body: "I am a lion"
// },{
//     title: "Gangsta",
//     body: "Hello I am a criminal"
// },{
//     title: "What is it?",
//     body: "I am a noob, sorry"
// },{
//     title: "Trump loves to fuck bitches",
//     body: "Yeah, I know it perfectly, I worked with him"
// }];
// let commentaries = document.getElementById('comments')
// for (let comment of comments) {
//     let element = document.createElement('div')
//     element.style.border = '1px solid #000'
//     let title = document.createElement('h4')
//     let body = document.createElement('p')
//     let button = document.createElement('button')
//     button.innerText = 'Remove body'
//     button.addEventListener('click', () => {
//         body.style.display = 'none'
//     })
//     title.innerText = comment.title
//     body.innerText = comment.body
//     element.append(title, body, button)
//     commentaries.appendChild(element)
// }


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let first_form = document.forms['first-form'];
// let second_form = document.forms['second-form'];
// let button = document.getElementById('submit-two')
// button.addEventListener('click', () => {
//     console.log(first_form.number.value, first_form['checkbox-1'].checked)
//     console.log(second_form.name.value, second_form['checkbox-2'].checked)
// })


//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let element = document.getElementsByClassName('table')[0];
// let form = document.forms['table-form'];
// form.submit.onclick = (ev) => {
//     ev.preventDefault();
//     buildTable(form.rows.value, form.columns.value, form.inner.value, element)
// }
// let buildTable = (rows, columns, inner, element) => {
//     for (let i = 0; i < rows; i++) {
//         let newRow = document.createElement('div')
//         for (let j = 0; j < columns; j++) {
//             let newBox = document.createElement('div')
//             newBox.innerText = inner;
//             newBox.classList.add('block')
//             newRow.appendChild(newBox);
//         }
//         element.appendChild(newRow);
//     }
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let carousel = document.getElementById('carousel');
// let carousel_items = document.getElementsByClassName('carousel-item')
// let iterate = (elements) => {
//     for (let i = 0; i < elements.length; i++) {
//         if (i < 2) {
//             elements[i].classList.remove('carousel-hide')
//             elements[i].classList.add('carousel-show')
//         } else {
//             elements[i].classList.remove('carousel-show')
//             elements[i].classList.add('carousel-hide')
//         }
//     }
// }
// let right_button = document.getElementById('right')
// right_button.addEventListener('click', () => {
//     let carousel_items = document.getElementsByClassName('carousel-item')
//     for (let i = 0; i < carousel_items.length; i++) {
//         if (carousel_items[i].classList.contains('carousel-show')) {
//             if (i === 3) {
//                 iterate(carousel_items);
//                 break;
//             }
//             carousel_items[i].classList.remove('carousel-show')
//             carousel_items[i].classList.add('carousel-hide')
//             carousel_items[i + 2].classList.add('carousel-show')
//             carousel_items[i + 2].classList.remove('carousel-hide')
//             break;
//         }
//     }
// })
// let left_button = document.getElementById('left')
// left_button.addEventListener('click', () => {
//     let carousel_items = document.getElementsByClassName('carousel-item')
//     for (let i = 0; i < carousel_items.length; i++) {
//         if (carousel_items[i].classList.contains('carousel-show')) {
//             if (i === 0) {
//                 break;
//             }
//             carousel_items[i + 1].classList.remove('carousel-show')
//             carousel_items[i + 1].classList.add('carousel-hide')
//             carousel_items[i - 1].classList.add('carousel-show')
//             carousel_items[i - 1].classList.remove('carousel-hide')
//             break;
//         }
//     }
// })
// iterate(carousel_items)


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let input = document.forms.censored.text;
// let button = document.getElementById('submit-censored')
// let censored_array = ['сука', 'блять', 'гнида', 'підарас', 'хуй']
// button.onclick = () => {
//     if (censored_array.includes(input.value)) {
//         alert("Uncensored words are forbidden on our website")
//     }
// }



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let input = document.forms.censored.text;
// let button = document.getElementById('submit-censored')
// let censored_array = ['сука', 'блять', 'гнида', 'підарас', 'хуй']
// button.onclick = () => {
//     let words = input.value.split(" ");
//     for (let word of words) {
//         censored_array.forEach(value => word.includes(value) ? alert("You have entered an uncensored word") : null)
//     }
// }



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let allHeaders = document.getElementsByTagName('h2');
// let menu = document.createElement('div')
// for (const header of allHeaders) {
//     let menuItem = document.createElement('div')
//     menuItem.innerText = header.innerText
//     menuItem.addEventListener('click', () => {
//         console.log(header.parentElement.classList[1])
//         window.scrollTo(0, document.querySelector('.' + header.parentElement.classList[1]).offsetTop);
//     })
//     menuItem.classList.add('fixed-menu-item')
//     menu.appendChild(menuItem)
// }
// document.getElementsByClassName('fixed-menu')[0].appendChild(menu);



// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// let button = document.getElementById('user-shower')
// let form = document.forms['users-filters']
//
// button.onclick = () => {
//     let filtered_users = [];
//     if (form['filter_1'].checked) {
//         filtered_users = filtered_users.concat(usersWithAddress.filter(value => !value.status))
//     }
//     if (form['filter_2'].checked) {
//         filtered_users = filtered_users.concat(usersWithAddress.filter(value => value.age >= 29))
//     }
//     if (form['filter_3'].checked) {
//         filtered_users = filtered_users.concat(usersWithAddress.filter(value => value.address.city === 'Kyiv'))
//     }
//     let users = document.getElementById('users')
//     users.innerHTML = ''
//     for (let filteredUser of filtered_users) {
//         let user = document.createElement('div')
//         user.innerText = `${filteredUser.name} ${filteredUser.age} ${filteredUser.address.city}`
//         users.appendChild(user)
//     }
// }

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let buttonNext = document.createElement('button')
// buttonNext.innerText = 'next'
// let buttonPrev = document.createElement('button')
// buttonPrev.innerText = 'prev';
// document.body.append(buttonNext, buttonPrev)
// let move = (element) => {
//     let parent = null;
//     let current = element;
//     if (current === document.body) {
//         alert("End of the document")
//     }
//     buttonNext.onclick = () => {
//         if (current.nextElementSibling == null) {
//             if (current.parentElement.style.backgroundColor === 'red') {
//                 current.parentElement.style.backgroundColor = '#fff'
//             }
//             parent = current.parentElement.nextElementSibling
//             if (parent == null) {
//                 move(current.parentElement)
//             }
//             current = parent != null ? parent : current
//         } else if (current.children[0] !== undefined) {
//             parent = current
//             current = current.children[0];
//             if (current.parentElement.children.length === 2) {
//                 current.parentElement.style.backgroundColor = 'red'
//             }
//         } else {
//             current = current.nextElementSibling
//         }
//         console.log(current)
//     }
//     buttonPrev.onclick = () => {
//         if (current === document.head) {
//             alert("It is the beginning of the document")
//         }
//         if (current.previousElementSibling === null) {
//             parent = current.parentElement.previousElementSibling
//             if (parent == null) {
//                 move(current.parentElement)
//             }
//             current = parent != null ? parent : current
//         } else {
//             current = current.previousElementSibling
//         }
//         console.log(current)
//     }
// }
// move(document.getElementsByClassName('rule1')[0])
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let string = 'kfjdaslfjsa'
// string = string.slice(0, 4) + string.slice(4);
// console.log(string)
// document.body.onclick = () => {
//     let selected = window.getSelection().focusNode.parentElement;
//     let startPosition = window.getSelection().anchorOffset;
//     let endPosition = window.getSelection().focusOffset;
//     selected.innerHTML = selected.innerHTML.slice(0, startPosition) + `<span class="highlighted_text">${selected.innerHTML.slice(startPosition, endPosition)}</span>` + selected.innerHTML.slice(endPosition)
//     console.log(selected.innerHTML)
// }


