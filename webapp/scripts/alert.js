function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    // Проверка на наличие класса 'show'
    if (notification.classList.contains('show')) {
      return; // Если класс 'show' есть, прерываем выполнение функции
    }
    notificationMessage.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.add('hide');
      // Удаление класса 'show' после анимации
      setTimeout(() => {
        notification.classList.remove('show', 'hide');
      }, 500); // Время, равное длительности анимации
    }, 3000); // Задержка перед исчезновением (время отображения)
}