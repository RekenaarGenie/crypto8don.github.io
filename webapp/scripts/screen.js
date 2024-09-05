// function showScreen(screenId) {
//     // Скрыть все экраны
//     var screens = document.querySelectorAll('.screen');
//     screens.forEach(function(screen) {
//         screen.classList.remove('active');
//     });

//     // Показать выбранный экран
//     var activeScreen = document.getElementById(screenId);
//     activeScreen.classList.add('active');
// }


// function showScreen(screenId) {
//     var screens = document.querySelectorAll('.screen');
//     // Скрыть все экраны
//     screens.forEach(function(screen) {
//         screen.classList.add('screen-anim');
//         screen.addEventListener('animationend', function() {
//             screen.classList.remove('active');
//             screen.classList.remove('screen-anim');
//         });
//     });

//     // Показать выбранный экран
//     var activeScreen = document.getElementById(screenId);
//     activeScreen.classList.add('active');
// }


// function showScreen(screenId) {
//     // Скрыть все экраны
//     var screens = document.querySelectorAll('.screen');
//     screens.forEach(function(screen) {
//         screen.classList.remove('active');
//     });

//     // Показать выбранный экран
//     var activeScreen = document.getElementById(screenId);
//     activeScreen.classList.add('screen-anim');
//     activeScreen.addEventListener('animationend', function() {
//         activeScreen.classList.remove('screen-anim');
//     })
//     activeScreen.classList.add('active');
// }


// function showScreen(screenId) {
//     // Скрыть все экраны
//     var screens = document.querySelectorAll('.screen');
//     var screen_now = document.getElementsByClassName('.active_screen');
//     var activeScreen = document.getElementById(screenId);
//     screen_now.classList.add('screen-anim');
//     screen_now.addEventListener('animationend', function() {
//         screens.forEach(function(screen) {
//             screen.classList.remove('active');
//         });
//         screen_now.classList.remove('screen-anim');
//     })

//     // Показать выбранный экран
//     var activeScreen = document.getElementById(screenId);
//     activeScreen.classList.add('.screen-anim-end');
//     activeScreen.classList.add('active');
//     activeScreen.addEventListener('animationend', function() {
//         activeScreen.classList.remove('active');
//     });
// }


function showScreen(screenId) {
    var screen_this = document.querySelector('.active')
    if (screen_this.id !== screenId) {
        screen_this.classList.add('screen-anim');
        screen_this.addEventListener('animationend', function() {
            screen_this.classList.remove('screen-anim');
            var screens = document.querySelectorAll('.screen');
            screens.forEach(function(screen) {
            screen.classList.remove('active');
            });
            var activeScreen = document.getElementById(screenId);
            activeScreen.classList.add('active');
        })
    }
}
