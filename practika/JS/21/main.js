'use strict'
//! Подготовить функционал для удаления из списка
//! Это должна быть кнопочка "х" у каждого элемента списка.
//! (так же должен элемент удаляться из массива).
const form = document.forms.rootForm;
const messages = [];
const buttonsArr = [];
// const btnShowArray = document.getElementById('btnShowArray');
// console.log(listMessages);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const v = e.target.elements.message.value.trim();

  if (v !== "") {
    messages.push(v);
    const li = document.createElement('li');
    li.append(v);
    listMessages.append(li);

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    li.append(deleteButton)
    buttonsArr.push(deleteButton);
    deleteButton.addEventListener('click', (e) => {
      messages.splice(buttonsArr.indexOf(e.target),1);
      buttonsArr.splice(buttonsArr.indexOf(e.target),1);
      e.target.parentNode.remove();
  })
  }
})
btnShowArray.addEventListener('click', (e) => {
  console.log(messages);
  console.log(buttonsArr);
})




