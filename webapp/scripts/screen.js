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



// function showScreen(screenId) {
//     var screen_this = document.querySelector('.active'); console.log('1   Получаем активный экран');
//     if (screen_this.id !== screenId) {
//         screen_this.classList.add('screen-anim'); console.log('2   Добавляем активному экрану анимацию\n3  Ставим событие окончания анимации');
//         screen_this.addEventListener('animationend', function() {
//             screen_this.classList.remove('screen-anim'); console.log('4   Забираем анимацию у активного экрана');
//             var screens = document.querySelectorAll('.screen'); console.log('5   Получаем все элементы класса screen');
//             screens.forEach(function(screen) {
//                 screen.classList.remove('active'); console.log('6   Забрали у одного из класса screen класс active');
//             });
//             var activeScreen = document.getElementById(screenId); console.log('7   Получаем элемент переданный через кнопку');
//             activeScreen.classList.add('active'); console.log('8   Добавляем переданному через кнопку элементу класс active');
//             var screen_ready = document.querySelector('.active'); console.log('9   Получаем элемент с классом active');
//             screen_ready.classList.add('show_anim'); console.log('10   Добавляем ему анимацию для появления');
//             screen_ready.addEventListener('animationend', function() {
//                 screen_ready.classList.remove('show_anim'); console.log('11   Забираем у активного класса анимацию\n \n');
//             })
//         })
//     }
// }





function showScreen(screenId) {
    var screen_this = document.querySelector('.active');
    
    if (screen_this && screen_this.id !== screenId) {
        screen_this.classList.add('screen-anim');
        console.log('Добавляем анимацию активному экрану');
        
        // Добавляем обработчик с опцией once: true, чтобы он сработал только один раз
        screen_this.addEventListener('animationend', function() {
            screen_this.classList.remove('screen-anim');
            console.log('Убираем анимацию у активного экрана');

            // Убираем класс active со всех экранов
            var screens = document.querySelectorAll('.screen');
            screens.forEach(function(screen) {
                screen.classList.remove('active');
            });

            // Добавляем класс active новому экрану
            var activeScreen = document.getElementById(screenId);
            activeScreen.classList.add('active');
            console.log('Активируем новый экран');

            // Добавляем анимацию для появления новому экрану
            activeScreen.classList.add('show_anim');
            activeScreen.addEventListener('animationend', function() {
                activeScreen.classList.remove('show_anim');
                console.log('Убираем анимацию появления у нового экрана');
            }, { once: true }); // Обработчик сработает один раз и удалится
        }, { once: true }); // Обработчик сработает один раз и удалится
    }
}