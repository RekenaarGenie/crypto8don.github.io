var player_energy_count = 0
var energy_click_increase = 1
var cost = 100

costView = document.getElementById('cost-view');
costView.innerText = `Cost: ${roundToNearestStep(cost)}`;

function updateCounter(newValue) {
    const countElement = document.querySelector('.count');
    countElement.classList.add('update');
    countElement.textContent = formatNumber(newValue);
    // Удаление класса после анимации для возможности повторного использования
    countElement.addEventListener('animationend', () => {
        countElement.classList.remove('update');
    }, { once: true });
}
function formatNumber(number) {
    if (number <= 1000) {
        return roundToNearestStep(number);
    } else {
        return spaceNumbers(number);
    }
}
function roundToNearestStep(value, step = 0.1) {
    return (Math.round(value / step) * step).toFixed(1);
}
function spaceNumbers(number) {
    // Удаляем дробную часть, если есть
    let integerPart = number.toString().split('.')[0];

    // Форматируем целую часть с пробелами каждые три цифры
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return integerPart;
}

function upgrade() {
    if (player_energy_count>=cost) {
        player_energy_count -= cost
        cost *= 1.2
        energy_click_increase *=1.179
        costView.innerText = `Cost: ${formatNumber(cost)}`
    } else {
        showNotification('Недостаточно средств')
    }
    updateCounter(player_energy_count)
}





