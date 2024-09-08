
// document.getElementById('popup_zone').addEventListener('click', function(event) {
//     const x = event.clientX;
//     const y = event.clientY;
    
//     // Создаём элемент для отображения "1"
//     const popup = document.createElement('div');
//     popup.classList.add('popup');
//     popup.textContent = '+1';
    
//     // Устанавливаем координаты нажатия
//     popup.style.left = `${x}px`;
//     popup.style.top = `${y}px`;
    
//     // Добавляем элемент в тело документа
//     document.body.appendChild(popup);
    
//     // Удаляем элемент через 1 секунду (время анимации)
//     setTimeout(() => {
//         popup.remove();
//     }, 1000);
// });


document.querySelector('.player_box').addEventListener('touchstart', function(event) {
    event.preventDefault();  // Предотвращаем стандартное поведение, например, масштабирование двумя пальцами
    
    // Обрабатываем все касания
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];
        const x = touch.clientX;
        const y = touch.clientY;
        
        // Создаем элемент для анимации
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = '+1';

        // Устанавливаем позицию касания
        popup.style.left = `${x}px`;
        popup.style.top = `${y}px`;

        // Добавляем элемент в документ
        document.body.appendChild(popup);

        // Удаляем элемент через 1 секунду (время анимации)
        setTimeout(() => {
            popup.remove();
        }, 1000);
    }
});