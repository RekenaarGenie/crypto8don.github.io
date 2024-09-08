
document.getElementById('popup_zone').addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    
    // Создаём элемент для отображения "1"
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = '+1';
    
    // Устанавливаем координаты нажатия
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    
    // Добавляем элемент в тело документа
    document.body.appendChild(popup);
    
    // Удаляем элемент через 1 секунду (время анимации)
    setTimeout(() => {
        popup.remove();
    }, 1000);
});
