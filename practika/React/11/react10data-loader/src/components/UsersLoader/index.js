import React, { Component } from 'react';
import Spinner from './../Spinner';
import { getUsers } from './../../api';
import { API_DEFAULT_PAGE } from '../../config';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
      page: API_DEFAULT_PAGE,
      gender:'',
    }
  }
  componentDidMount() {
    // console.log('componentDidMount');
    this.load();
  }
  chengeGender = (event) =>{
    // console.log('hello');
    this.setState({
      gender:event.target.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.page === this.state.page) {
      return;
    }
    this.load();
  }
  load = () => {
    this.setState({
      isLoading: true
    });
    const { page } = this.state;
    getUsers({ results: 7, page: page , gender:this.state.gender})
      .then(({ results }) => this.setState({
        users: results
      }))
      .catch(error => this.setState({
        isError: true
      }))
      .finally(() => this.setState({
        isLoading: false
      }))
  }
  prevPage = () => this.setState({ page: this.state.page - 1 })
  nextPage = () => this.setState({ page: this.state.page + 1 })
  renderUser = (user) => <li key={user.login.uuid}>{`${user.name.first} ${user.name.last} - ${user.gender}`} </li>
  render() {
    // console.log('render');
    const { users, isLoading, isError, page } = this.state;
    if (isError) {
      return <p>ERROR</p>
    }
    return (
      <section>
        <h2>Users List</h2>
        <div onChange={this.chengeGender}>
        <input type="radio" value="male" name="gender" /> Male
        <input type="radio" value="female" name="gender" /> Female
        </div>
        <button onClick={this.prevPage}>{"<"}</button>
        <span>page:{page}</span>
        <button onClick={this.nextPage}>{">"}</button>
        <ul>{users.map(this.renderUser)}</ul>
        {isLoading && <Spinner />}

      </section>
    );
  }
}

export default UsersLoader;
