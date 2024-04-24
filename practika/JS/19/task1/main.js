//! 1. Создать рекламный блок, который появляется в нижнем правом
//! углу через 3 секунды после первого клика в любом месте.
//! Также этот рекламный блок исчезает после нажатия в любом
//! месте. Содержимое рекламного блока на свое усмотрение.
//! Повторно он не должен появляться.
'use strict';
function handlerCick() {
  // debugger
  const advertising = document.getElementById('advertising');
  if (advertising.dataset.active == 'true') {
    let timeoutAdvertising = setTimeout(() => {
      advertising.style.display = 'flex';
      clearInterval(timeoutAdvertising);
    }, 3000);
    advertising.dataset.active = 'false';
  } else {
    advertising.style.display = 'none'
  }
}
document.getElementById('wrapper').addEventListener('click', handlerCick); //