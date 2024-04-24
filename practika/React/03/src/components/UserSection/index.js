import React from 'react';
import User from '../User';
import SelectedUsers from '../SelectedUsers';
const userDb = [
  {
    id: 1,
    fullName: 'Арнольд Шварцнегер',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg/250px-Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
    married: false
  },
  {
    id: 2,
    fullName: 'Илон Маск',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg',
    married: false
  },
  {
    id: 3,
    fullName: 'Сильвествер Сталлоне',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg/220px-Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg',
    married: true
  }
]
class UserSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDb.map(user => ({ ...user, isSelected: false })),
      selectedUsersOrder: [] 
    };
  }

  showUser = (id) => {
    const { users, selectedUsersOrder } = this.state;
    const newUsers = users.map(user => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected
    }));

    if (newUsers.find(user => user.id === id)?.isSelected) {
      this.setState({
        users: newUsers,
        selectedUsersOrder: [...selectedUsersOrder, id]
      });
    } else {
      this.setState({
        users: newUsers,
        selectedUsersOrder: selectedUsersOrder.filter(userId => userId !== id)
      });
    }
  }



  handlerClickSelect = (id) => {
    const { users } = this.state;
    users.forEach(user => {
      if (user.id === id) {
        if (user.isSelected === false) {
          this.showUser(id);
        } else {
          this.showUser(id)
        }
      }
    }
    )
  }


  render() {
    const { users, selectedUsersOrder } = this.state;
    const usersIsSelected = [];
    const renderUsers = users.map(user =>
      <User key={user.id}
        user={user}
        handlerClickSelect={this.handlerClickSelect} />)
    return (
      <div>
        <section>
          <h2>Users:</h2>
          {renderUsers}
        </section>
        <section>
          <h2>Selected users:</h2>
          <SelectedUsers users={users}
            handlerClickSelect={this.handlerClickSelect}
            selectedUsersOrder={selectedUsersOrder}
            usersIsSelected={usersIsSelected} />
        </section>
      </div>
    );
  }
}

export default UserSection;
