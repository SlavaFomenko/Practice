namespace task3{
    interface User {
  firstName: string,
  lastName: string
  age: number}

    const users: User[] = [
  { firstName: 'Ivan', lastName: 'Ivano', age: 18 },
  { firstName: 'Ivan', lastName: 'Ivano', age: 17 },
  { firstName: 'Ivan', lastName: 'Ivano', age: 19 }
]


    function gatYoungUser(users:User[]):User{
        let result:User = users[0]
        users.map((elem)=>{
            if(elem.age < result.age){
                result = elem
            }
        })
        return result
    }

    console.log(gatYoungUser(users))
}