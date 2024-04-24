const users:{ id: number; name: string; age: number }[] = [
  { id: 1, name: "Igor", age: 30 },
  { id: 32, name: "Ivan", age: 15},
  { id: 12, name: "Vasa", age: 14},
  { id: 16, name: "Peta", age: 40 },
];
enum Status {
    Junior = "Junior",
    Middle = "Middle",
    Senior = "Senior"
}

function setDevStatus (users: { id: number; name: string; age: number }[]):object[]{

    const newArr: object[] = [];

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