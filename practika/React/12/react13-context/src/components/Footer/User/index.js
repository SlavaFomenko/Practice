import React, { Component } from 'react';
import { ThemeContext, UserContext } from '../../../context';
import styles from '../../Header/Dish/theme.module.css'


class User extends Component {
  render() {

    return (
      <ThemeContext.Consumer>
        {
          (theme) => {
          return (
            <UserContext.Consumer>
              {
                (user) => (
                  <sections>
                    <p className={
                      theme.theme ? styles.theme_white : styles.theme_black
                      }>Ivan Ivanov, Status:{user.status}</p>
                  </sections>
                )
              }
            </UserContext.Consumer>
            )
          }
        }
      </ThemeContext.Consumer>

    );
  }
}

export default User;
