var player_energy_count = 0
var energy_click_increase = 1
var cost = 100


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





