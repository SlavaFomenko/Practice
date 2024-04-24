export function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
}

export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
}

export function getComments() {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(resp => resp.json())
}


