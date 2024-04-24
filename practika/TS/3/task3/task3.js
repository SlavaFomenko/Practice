"use strict";
var task3;
(function (task3) {
    const users = [
        { firstName: 'Ivan', lastName: 'Ivano', age: 18 },
        { firstName: 'Ivan', lastName: 'Ivano', age: 17 },
        { firstName: 'Ivan', lastName: 'Ivano', age: 19 }
    ];
    function gatYoungUser(users) {
        let result = users[0];
        users.map((elem) => {
            if (elem.age < result.age) {
                result = elem;
            }
        });
        return result;
    }
    console.log(gatYoungUser(users));
})(task3 || (task3 = {}));
