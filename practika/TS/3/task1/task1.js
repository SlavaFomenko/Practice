"use strict";
var task1;
(function (task1) {
    let Status;
    (function (Status) {
        Status["Junior"] = "Junior";
        Status["Middle"] = "Middle";
        Status["Senior"] = "Senior";
    })(Status || (Status = {}));
    const users = [
        { id: 1, name: "Igor", age: 30 },
        { id: 32, name: "Ivan", age: 15 },
        { id: 12, name: "Vasa", age: 14 },
        { id: 16, name: "Peta", age: 40 },
    ];
    function setDevStatus(users) {
        const newArr = [];
        users.forEach((dev) => {
            if (dev.age < 18) {
                // console.log(dev)
                newArr.push(Object.assign(Object.assign({}, dev), { status: Status.Junior }));
            }
            else if (dev.age > 18 && dev.age <= 30) {
                newArr.push(Object.assign(Object.assign({}, dev), { status: Status.Middle }));
            }
            else if (dev.age > 30) {
                newArr.push(Object.assign(Object.assign({}, dev), { status: Status.Senior }));
            }
        });
        return newArr;
    }
    console.log(setDevStatus(users));
})(task1 || (task1 = {}));
