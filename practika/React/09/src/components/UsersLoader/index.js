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
      country: ''
    }
  }
  componentDidMount() {
    // console.log('componentDidMount');
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page === this.state.page) {
      return;
    }
    this.load();
  }
  load = () => {
    this.setState({
      isLoading: true
    });
    const { page, country } = this.state;

    getUsers({ results: 3, page: page, nat: country })
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

  selectHandler = (event) => {
    this.setState({
      country: event.target.value
    }, () => {
      this.load();
    })
  }
  prevPage = () => this.setState({ page: this.state.page - 1 })
  nextPage = () => this.setState({ page: this.state.page + 1 })
  renderUser = (user) => <li key={user.login.uuid}>{`${user.name.first} ${user.name.last}  ---${user.nat}`}</li>
  render() {
    // console.log('render');
    const { users, isLoading, isError, page } = this.state;
    if (isError) {
      return <p>ERROR</p>
    }
    return (
      <section>
        <h2>Users List</h2>
        <button onClick={this.prevPage}>{"<"}</button>
        <span>page:{page}</span>
        <button onClick={this.nextPage}>{">"}</button>
        <select value={this.props.country} onChange={this.selectHandler}>
          <option value="au">AU</option>
          <option value="br">BR</option>
          <option value="ca">CA</option>
          <option value="ch">CH</option>
          <option value="de">DE</option>
          <option value="dk">DK</option>
          <option value="es">ES</option>
          <option value="fi">FI</option>
          <option value="fr">FR</option>
          <option value="gb">GB</option>
          <option value="ie">IE</option>
          <option value="in">IN</option>
          <option value="ir">IR</option>
          <option value="mx">MX</option>
          <option value="nl">NL</option>
          <option value="no">NO</option>
          <option value="nz">NZ</option>
          <option value="rs">RS</option>
          <option value="tr">TR</option>
          <option value="ua">UA</option>
          <option value="us">US</option>
        </select>
        <ul>{users.map(this.renderUser)}</ul>
        {isLoading && <Spinner />}
      </section>
    );
  }
}

export default UsersLoader;
