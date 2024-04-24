'use strict';
// const actors = []
const list = [];                                       //todo масив для зберігання ПІБ (працює але не використовується) не став прибирати 
const cardWrapper = document.getElementById('cards')
const nameList = document.getElementById('name-list')



const promise = fetch('./data.json');
console.log(promise);
promise
  .then((response) => response.json())
  .then((users) => {
    for (const prop of users) {
      createCard(prop);
    }
    const cardClick = document.getElementsByClassName('card')
    console.log(cardClick);
    console.log(promise);
    for (const card of cardClick) {
      console.log('hello');
      card.addEventListener('click', showFullName)
      card.querySelector('.delete-card').addEventListener('click', deleteFullName)
    }
  });




function createCard(actor) {
  const card = document.createElement('div');
  card.classList.add('card')
  cardWrapper.append(card);
  card.dataset.idCard = actor.id;
  card.dataset.isActive = true;
  const btnDelete = document.createElement('div');
  btnDelete.classList.add('delete-card')
  card.append(btnDelete);

  card.append(createAvatar(actor.profilePicture))
  card.append(createFullName(actor.firstName, actor.lastName))
  card.append(createContacts(actor.contacts));
}

function createAvatar(avatarLink) {
  const avatar = document.createElement('div');
  avatar.classList.add('avatar')
  const imgAvatar = document.createElement('img')
  avatar.append(imgAvatar);
  if (avatarLink != null) {
    imgAvatar.setAttribute('src', `${avatarLink}`)
  } else {
    imgAvatar.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w')
  }
  return avatar;
}
function createFullName(firstName, lastName) {
  const fullName = document.createElement('div')
  fullName.classList.add('fullName')
  if (firstName || lastName) {
    fullName.textContent = `${firstName} ${lastName}`
  } else {
    fullName.textContent = `No Name`
  }
  return fullName;
}

function createContacts(contacts) {
  const networks = document.createElement('div');
  networks.classList.add('networks')
  for (const prop of contacts) {
    const link = document.createElement('a')
    link.setAttribute('href', `${prop}`)
    const img = document.createElement('img')
    link.append(img);
    networks.append(link);
    if (prop.includes('facebook')) {
      img.setAttribute('src', 'icons/facebook.png')
    }
    if (prop.includes('twitter')) {
      img.setAttribute('src', 'icons/twitter.png')
    }
    if (prop.includes('instagram')) {
      img.setAttribute('src', 'icons/instagram.png')
    }
  }
  return networks;
}
// debugger
console.log("start");

// console.log(cardClick);
// debugger



/*
! *При клике на карточку добавлять имя и фамилию
! актера в список, расположенный под карточками
! **Имена и фамилии не должны повторяться
! в списке выбранных.
*/
function showFullName(e) {

  e.stopPropagation();
  const fullName = this.querySelector('.fullName').textContent
  const cardId = this.dataset.idCard

  for (const prop of list) {
    if (prop[0] == cardId) {
      return;
    }
  }

  // console.log(list);
  list.push([cardId, fullName])
  const li = document.createElement('li')
  li.dataset.nameCardId = cardId;
  li.textContent = list[list.length - 1][1];
  nameList.append(li);
}

//! ***Добавить возможность удалять из списка выбранных

function deleteFullName(e) {
  const nameList = document.getElementById('card-info')
  const liArr = document.querySelectorAll('#name-list li')
  // debugger
  e.stopPropagation();
  const cardId = e.target.offsetParent.dataset.idCard;
  // debugger
  for (const prop in list) {
    if (list[prop][0] == cardId) {
      list[prop][0]
      list.splice(prop, 1)

    }
  }
  for (const prop of liArr) {
    if (prop.dataset.nameCardId == cardId) {
      prop.remove();
    }
  }
}