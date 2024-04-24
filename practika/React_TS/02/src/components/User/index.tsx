import React, { useEffect, useState } from 'react';
import styles from './user.module.scss';
import ShowInfoBtn from './InfoButtons/index';

interface UserData {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
  };
  location: {
    postcode: string;
    city: string;
    state: string;
    country: string;
  };
  phone: string;
  login: {
    password: string;
  };
  picture: {
    large: string;
  };
}

const User: React.FC = () => {
  const [state, setState] = useState({
    title: 'Hello , my name is',
    users: [] as UserData[],
    value: '',
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        const user = data.results[0];
        setState((prev) => ({
          ...prev,
          users: [user],
          value: `${user.name.first} ${user.name.last}`,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
        setState((prev) => ({ ...prev, isError: true }));
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, []);

  const renderValue = (btnType: string) => {
    const { name, email, dob, location, phone, login } = state.users[0];

  
    switch (btnType) {
      case 'user':
        setState((prev) => ({
          ...prev,
          title: 'Hello , my name is',
          value: `${name.first} ${name.last}`,
        }));
        break;
        case 'empty-email':
        setState((prev) => ({
          ...prev,
          title: 'My email address is',
          value: email,
        }));
        break;
        case 'phone-call':
        setState((prev) => ({
          ...prev,
          title: 'My birthday is',
          value: dob.date.substring(0, 10),
        }));
        break;
        case 'map-pointer':
        setState((prev) => ({
          ...prev,
          title: 'My address is',
          value: `${location.postcode} ${location.city} ${location.state} ${location.country}`,
        }));
        break;
        case 'phone-call':
        setState((prev) => ({
          ...prev,
          title: 'My phone number is',
          value: phone,
        }));
        break;
        case 'padlock':
        setState((prev) => ({
          ...prev,
          title: 'My password is',
          value: login.password,
        }));    
        break    
      default:
        console.error('renderValue ERR');
        break;
    }
  };

  if (state.isError) {
    console.error('OOOOOOOOPS');
    return <p>OOOPS</p>;
  }

  if (state.isLoading) {
    return <div className={styles.loading__sircle}></div>;
  }

  if (state.users.length !== 0) {
    const [user] = state.users;

    const buttons = ['user', 'empty-email', 'calendar', 'map-pointer', 'phone-call', 'padlock'];

    return (
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={user.picture.large} alt="User Avatar" />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{state.title}</p>
          <p className={styles.value}>{state.value}</p>
        </div>
        <div className={styles.buttons}>
          {buttons.map((elem, index) => (
            <ShowInfoBtn key={elem + index} btnType={elem} renderValue={renderValue} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default User;
