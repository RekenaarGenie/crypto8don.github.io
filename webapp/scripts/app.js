// Получаем все элементы внутри .footer_navigation
const navItems = document.querySelectorAll('.footer_navigation > div');

// Функция для удаления класса active_screen у всех элементов
function removeActiveClass() {
    navItems.forEach(item => {
        item.classList.remove('active_screen');
    });
}

// Добавляем обработчик события клика для каждого элемента
navItems.forEach(item => {
    item.addEventListener('click', function() {
        removeActiveClass(); // Удаляем класс active_screen у всех элементов
        this.classList.add('active_screen'); // Добавляем класс текущему элементу
    });
});

navItems.forEach((item, index) => {
    if (index === 0) { // Индекс 2 — это третий элемент
        item.addEventListener('click', function() {
        });
    }
});
navItems.forEach((item, index) => {
    if (index === 1) { // Индекс 2 — это третий элемент
        item.addEventListener('click', function() {
        });
    }
});
navItems.forEach((item, index) => {
    if (index === 2) { // Индекс 2 — это третий элемент
        item.addEventListener('click', function() {
        });
    }
});
navItems.forEach((item, index) => {
    if (index === 3) { // Индекс 2 — это третий элемент
        item.addEventListener('click', function() {
        });
    }
});