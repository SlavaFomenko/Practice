import React from "react";
class SelectedUsers extends React.Component {
  render() {
    const { users, handlerClickSelect, selectedUsersOrder } = this.props;
    console.log(selectedUsersOrder);
    const renderUsers = selectedUsersOrder.map(userId => {
      console.log(userId);
      const user = users.find(user => user.id === userId);
      return (
        <li key={user.id} onClick={() => { handlerClickSelect(user.id) }}>
          {user.fullName}
        </li>
      );
    });

    return (
      <ul>{renderUsers}</ul>
    );
  }
}

export default SelectedUsers
