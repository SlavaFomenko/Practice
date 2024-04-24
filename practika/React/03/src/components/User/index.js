import { Component } from 'react';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      // isSelected: false
    }
  }

  handlerClickVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }
  // handlerClickSelect = () => {
  //   this.setState({ isSelected: !this.state.isSelected });
  // }

  render() {
    const {
      user: { id, fullName, avatar, married, isSelected },
      handlerClickSelect
    } = this.props;
    const smile = married ? ':-)' : ':-(';
    // const styles = { border: this.state.isSelected ? 'solid green 5px' : undefined };
    const styles = { border: isSelected ? 'solid green 5px' : undefined };
    return (
      <article style={styles}>
        <button onClick={this.handlerClickVisible}>visible</button>
        {/* <button onClick={this.handlerClickSelect}>select</button> */}
        <button onClick={() => handlerClickSelect(id)}>select</button>
        <h2>{fullName} {this.state.isVisible ? smile : ""}</h2>
        <img src={avatar} />
      </article>
    );
  }
}

export default User;
