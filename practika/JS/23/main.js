const ul = document.getElementById('ul')

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>{
    console.log(1);
    for(const user of users){
      showUser(user)
    }
  })

function showUser(user){
  const userLi = document.createElement('li')
  const userName = document.createElement('span')
  userName.textContent = user.username
  const userPhone = document.createElement('span')
  userPhone.textContent = user.phone
  const userCompany = document.createElement('span')
  userCompany.textContent = user.company.name

  userLi.append(userName,userPhone,userCompany)
  
  ul.append(userLi)
  ul.append(document.createElement('hr'))
}