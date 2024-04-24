import React, { Component } from 'react';
import styles from './User.module.scss';
class User extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div className={styles.user}>
        <h2 className={styles.user__title}>{firstName}</h2>
        <h2 className={styles.user__title}>{lastName}</h2>
      </div>
    );
  }
}

export default User;
