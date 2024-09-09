function updateCounter(newValue) {
    const countElement = document.querySelector('.count');
    countElement.classList.add('update');
    countElement.textContent = roundToNearestStep(newValue);
    // Удаление класса после анимации для возможности повторного использования
    countElement.addEventListener('animationend', () => {
        countElement.classList.remove('update');
    }, { once: true });
}

function roundToNearestStep(value, step = 0.1) {
    return (Math.round(value / step) * step).toFixed(1);
}

var player_energy_count = 0
var energy_click_increase = 1
var cost = 100
function upgrade() {
    if (player_energy_count>=cost) {
        player_energy_count -= cost
        cost *= 1.2
        energy_click_increase *=1.179
    } else {
        showNotification('Недостаточно средств')
    }
    updateCounter(player_energy_count)
}


function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
  
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
  if ("vibrate" in navigator) {
    // Вибрация длится 200 миллисекунд
    showNotification('Vibrate is on')
} else {
    showNotification('Vibrate is off')
}
  