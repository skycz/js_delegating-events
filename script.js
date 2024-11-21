"use strict";

const btns = document.querySelectorAll('button'), // Метод querySelectorAll используется для выбора всех элементов, которые соответствуют указанному CSS-селектору
      wrapper = document.querySelector('.btn-block');

/* console.log(btns[0].classList.length); */
/* console.log(btns[0].classList.item(1)); */
/* console.log(btns[1].classList.add('red', 'example_class')); */ // .add добавляет класс
/* console.log(btns[0].classList.remove('blue'));*/ // .remove — удаляет класс
/* console.log(btns[0].classList.toggle('blue'));*/ // .toggle — добавляет класс, если его нет, и удаляет, если есть


/* if (btns[1].classList.contains('red')) { */ // Метод contains проверяет, есть ли у элемента класс red. Возвращает true, если класс присутствует, и false в противном случае.
    /* console.log('red'); */ // Если у второго элемента есть класс red, в консоли появится сообщение 'red'.
/* } */



// Проверяем наличие класса
btns[0].addEventListener('click', () => { // после клика проверяем наличие класса red, если его нету добавляем
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red'); // добавляем класс
    } else {
        btns[1].classList.remove('red');
    }
}); 



// Вариант с методом toggle
/* btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red'); // Метод toggle: Если у второй кнопки есть класс red, он будет удалён, если класса red нет, он будет добавлен
}); */

/* console.log(btns[0].className); */


/* wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello');
    } */
    /* console.dir(event.target); */
/* }); */

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    } 
});

// Более продвинутое делегирование
/* wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) { // условие event.target проверяет ceществует ли элемент, на который кликнули, matches - : Соответствует ли кликнутый элемент селектору button.red (кнопка с классом red).
        console.log('Hello'); // Если кликнутый элемент — кнопка с классом red, в консоли появится сообщение 'Hello'.
    }
}); */


const btn = document.createElement('button'); // Создаем новый элемент кнопки (<button>) с помощью метода document.createElement
btn.classList.add('red'); // К созданной кнопке добавляется класс red с помощью метода classList.add
wrapper.append(btn); // Новый элемент btn добавляется в конец элемента wrapper
