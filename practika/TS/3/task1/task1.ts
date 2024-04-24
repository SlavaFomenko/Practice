
namespace task1{ // використав простір імен тому, що у мене в 2 файлах є змінна назви зміних User
  interface User{
    id: number,
    name: string,
    age: number
  }

  interface NewUser extends User{
    status:Status;
  }

  enum Status {
    Junior = "Junior",
    Middle = "Middle",
    Senior = "Senior"
  }
  const users:User[] = [
    { id: 1, name: "Igor", age: 30 },
    { id: 32, name: "Ivan", age: 15},
    { id: 12, name: "Vasa", age: 14},
    { id: 16, name: "Peta", age: 40},
  ];

  function setDevStatus (users: User []):NewUser[]{
    const newArr: NewUser[] = [];
    users.forEach((dev) => {
      if (dev.age < 18) {
        // console.log(dev)
        newArr.push({ ...dev, status: Status.Junior });
      } else if (dev.age > 18 && dev.age <= 30) {
        newArr.push({ ...dev,status:Status.Middle });
      } else if (dev.age > 30) {
        newArr.push({ ...dev, status: Status.Senior });
      }
    });
    return  newArr
  }
  console.log(setDevStatus(users))
}



