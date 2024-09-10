let glowStrength = 5;         // Стартовое значение яркости
const maxGlow = 30;           // Максимальная яркость
const glowStep = 1;           // Шаг увеличения яркости
const fadeStep = 2;           // Шаг уменьшения яркости
let fadeInterval;             // Интервал для уменьшения яркости
let fadeTimeout;              // Таймаут для сброса через 1 секунду

const element = document.getElementById('player_skin_glow');

function glow_up() {
    // Очищаем интервал, если был активен
    clearInterval(fadeInterval);
    clearTimeout(fadeTimeout);

    // Увеличиваем яркость до максимума
    if (glowStrength < maxGlow) {
        glowStrength += glowStep;
    }

    // Применяем фильтр с текущим значением яркости
    updateGlow();

    // Запускаем таймаут на 1 секунду, после чего начнёт уменьшаться яркость
    fadeTimeout = setTimeout(startFading, 1000);
};

function updateGlow() {
    element.style.filter = `drop-shadow(0px 0px ${glowStrength * 0.2}px #f24e32) drop-shadow(0px 0px ${glowStrength * 1.3}px #f24e32)`;
}

function startFading() {
    // Интервал для постепенного уменьшения яркости
    fadeInterval = setInterval(() => {
        if (glowStrength > 5) {
            glowStrength -= fadeStep;
            updateGlow();
        } else {
            // Очищаем интервал, когда яркость полностью угасла
            clearInterval(fadeInterval);
        }
    }, 100); // Интервал уменьшения яркости
}