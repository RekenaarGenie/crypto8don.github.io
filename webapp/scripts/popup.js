var count = 0
function createPopup(x, y) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = `+${roundToNearestStep(energy_click_increase)}`;
    
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;

    document.body.appendChild(popup);
    glow_up()
    player_energy_count += energy_click_increase
    updateCounter(player_energy_count)
    setTimeout(() => {
        popup.remove();
    }, 700);
}
function handleTouch(event) {
    event.preventDefault();  // Предотвращаем стандартное поведение
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];
        createPopup(touch.clientX, touch.clientY);
    }
}
document.getElementById("popup_zone").addEventListener("click", function() {
    if ("vibrate" in navigator) {
        navigator.vibrate([1000, 100, 1000, 100, 1000]);
    } else {
        console.log("Вибрация не поддерживается");
    }
});

document.querySelector('.player_box').addEventListener('touchstart', handleTouch);

document.querySelector('.player_box').addEventListener('mousedown', function(event) {
    createPopup(event.clientX, event.clientY);
});





