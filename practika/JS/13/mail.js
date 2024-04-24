//! Есть дата рождения:
//! 1. Какой день недели был ровно через год
{
  const birthday = new Date(1990, 10, 23, 9, 35, 0, 0);
  birthday.setFullYear(birthday.getFullYear() + 1);
  console.log(birthday);
}

//! 2. Был ли это высокосный год?
{
  const birthday = new Date(1990, 10, 23, 9, 35, 0, 0);
  if (birthday.getFullYear() % 4 === 0 && birthday.getFullYear() % 100 !== 0) {
    console.log(birthday.getFullYear() + " Высокосный год")
  } else {
    console.log(birthday.getFullYear() + " Не высокосный год")
  }
}

//! 3. Какой был месяц года спустя 100 дней

{
  const birthday = new Date(1990, 10, 23, 9, 35, 0, 0);
  birthday.setDate(birthday.getDate() + 100)
  console.log((birthday.getMonth() + 1) + ' месяц в году');
}
//! 4. Какой был первый день недели месяца

{
  const birthday = new Date(1990, 10, 23, 9, 35, 0, 0);
  const firstDay = new Date(birthday.getFullYear(), birthday.getMonth(), 1)
  const firstDayOfWeek = firstDay.getDay();
  console.log(firstDayOfWeek + " день недели");
}

//! 5.Создать функцию, которая принимает любое количество чисел
//! и считает среднее арифметическое и ВОЗВРАЩАЕТ его
//! в качестве результата.
//! Вызвать эту функцию с тремя аргументами и
//! массивом, в котором три значения.

function averageNum(...numbers) {
  return numbers.reduce((acum, i) => { return acum + i })
}
{
  console.log(averageNum(1, 2, 3))

  const arr = [1, 2, 3]
  console.log(averageNum(...arr));
}

//! 6. Есть массив объектов User. У них есть имя и фамилия.
//! Создать новый массив юзеров на основе старого, добавив
//! при этом к каждому объекту свойство isSelected: false.

{
  const users = [
    {
      firstName: 'Slava',
      lastName: 'Fomenko'
    },
    {
      firstName: 'Liza',
      lastName: 'Korzun'
    },
    {
      firstName: 'Danil',
      lastName: 'Oprishko'
    },
    {
      firstName: 'Vlad',
      lastName: 'Yakysevich'
    }
  ];

  const newUsers = users.map((user) => { return { ...user, isSelected: false }; });
  console.log(users);
  console.log(newUsers);
}