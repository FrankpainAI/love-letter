document.addEventListener('DOMContentLoaded', function() {
  // Функция для анимации фотографий
  function animatePhotos() {
    var photos = document.querySelectorAll('.photo');
    
    photos.forEach(function(photo, index) {
      // Получаем текущее преобразование
      var currentTransform = window.getComputedStyle(photo).transform || '';
      
      // Создаем имя анимации
      var animationName = 'float' + index;
      
      // Создаем ключевые кадры (правильный синтаксис)
      var keyframes = '@keyframes ' + animationName + ' {';
      keyframes += '0%, 100% { transform: ' + currentTransform + ' translateY(0); }';
      keyframes += '50% { transform: ' + currentTransform + ' translateY(-15px); }';
      keyframes += '}';
      
      // Добавляем стили
      var style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      // Применяем анимацию (правильный синтаксис)
      photo.style.animation = animationName + ' 3s ease-in-out infinite';
    });
  }

  // Запускаем анимацию
  animatePhotos();
});
// Добавьте перед </body>
document.addEventListener('DOMContentLoaded', function() {
  function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.className = 'heart-fall';
    
    // Параметры
    const startX = Math.random() * 100;
    const endX = (Math.random() * 40) - 20 + startX;
    const duration = Math.random() * 3 + 2;
    const size = Math.random() * 20 + 10;
    
    heart.style.setProperty('--start-x', startX + 'vw');
    heart.style.setProperty('--end-x', endX + 'vw');
    heart.style.animationDuration = duration + 's';
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    container.appendChild(heart);
    
    // Удаление после анимации
    setTimeout(() => heart.remove(), duration * 1000);
  }

  // Запуск с интервалом
  function startHearts() {
    createHeart();
    setTimeout(startHearts, 300);
  }
  
  startHearts();
});