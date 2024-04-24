"use strict";
var task2;
(function (task2) {
    let RoleType;
    (function (RoleType) {
        RoleType["Admin"] = "admin";
        RoleType["Personal"] = "personal";
    })(RoleType || (RoleType = {}));
    const user = {
        name: 'Viacheslav',
        skills: ["PHP", "SQL", "NodeJS"]
    };
    const role = {
        name: "Full Stack",
        role: RoleType.Admin
    };
    const userWithRole = {
        user: user,
        role: role
    };
    console.log(userWithRole);
})(task2 || (task2 = {}));
