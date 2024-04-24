namespace task2{
    enum RoleType {
        Admin = "admin",
        Personal = "personal"
    }

    type User = {
        name: string,
        skills: string[]
    }

    type Role = {
        name: string,
        role: RoleType
    }

    type UserWithRole = {
        user: User,
        role: Role
    }

    const user: User = {
        name: 'Viacheslav',
        skills: ["PHP", "SQL","NodeJS"]
    };

    const role: Role = {
        name: "Full Stack",
        role: RoleType.Admin
    };

    const userWithRole: UserWithRole = {
        user: user,
        role: role
    };
    console.log(userWithRole);
}


