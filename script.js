function triggerCrash() {
  // Полностью очищаем содержимое страницы
  document.body.innerHTML = '';
  
  // Меняем фон на черный и добавляем текст ошибки
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#ff3333';
  document.body.style.fontFamily = 'monospace';
  document.body.style.padding = '50px';
  
  const errorMessage = document.createElement('h1');
  errorMessage.innerText = 'Связь потеряна. Сайт самоликвидировался.';
  document.body.appendChild(errorMessage);

  // Сохраняем в браузере пользователя метку, что сайт "мертв"
  localStorage.setItem('site_dead', 'true');
}

// Проверка при повторном заходе: если метка есть, сайт сразу будет "мертвым"
if (localStorage.getItem('site_dead') === 'true') {
  window.addEventListener('DOMContentLoaded', () => {
    triggerCrash();
  });
}
