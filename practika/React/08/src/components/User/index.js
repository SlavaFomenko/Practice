import React, { Component } from 'react';
import styles from './user.module.scss';
import ShowInfoBtn from './Info buttons/index'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Hello , my name is",
      users: [],
      value: '',
      isLoading: false,
      isError: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch('https://randomuser.me/api')
      .then(resp => resp.json())
      .then(data => {
        // console.log(data.results[0]);
        this.setState({
          users: data.results,
          value: data.results[0].name.first +" "+ data.results[0].name.last,
        })
      }
      )
      .catch(() => {
        this.setState({
          isError: true
        })
      })
      .finally(() => this.setState({
        isLoading: false
      }))
  }

  renderValue = (btnType) =>{
    // console.log(btnType);
    const {name,email,dob,location,phone,login}=this.state.users[0]
    // console.log(name);
    // console.log(email);
    // console.log(dob);
    // console.log(location);
    // console.log(phone);
    // console.log(login);
    switch (btnType) {
      case 'user':
        this.setState({
          title:"Hello , my name is",
          value:`${name.first} ${name.last}`,
        })
        break;
      case 'empty-email':
        this.setState({
          title:"My email address is",
          value:email,
        })
        break;
      case 'calendar':
        this.setState({
          title:"My birthday is",
          value:dob.date.substring(0, 10)
        })
        break;
      case 'map-pointer':
        this.setState({
          title:"My address is",
          value:`${location.postcode} ${location.city} ${location.state} ${location.country}`
        })
        break;
      case 'phone-call':
        this.setState({
          title:'My phone number is',
          value:phone,
        })
        break;
      case 'padlock':
        this.setState({
          title:'My password is',
          value:login.password
        })
        break;
    
      default:
        console.error("renderValue ERR");
        break;
    }
  }


  render() {
    if (this.state.isError) {
      console.error("OOOOOOOOPS");
      return (
        <p>OOOPS</p>
      )
    }
    if (this.state.isLoading) {
      return (
        <div className={styles.loading__sircle}></div>
      )
    }
    if (this.state.users.length !== 0) {

      const [users] = this.state.users
      // console.log(users);

      const buttons = ['user', 'empty-email', 'calendar', 'map-pointer', 'phone-call', 'padlock']
      return (
        <div className={styles.wrapper}>
          <div className={styles.avatar}>
            <img src={users.picture.large} />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{this.state.title}</p>
            <p className={styles.value}>{this.state.value}</p>
          </div>
          <div className={styles.buttons}>
            {
              buttons.map((elem, index) => {
                return <ShowInfoBtn key={elem + index} btnType={elem} renderValue ={this.renderValue} />
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default User;
