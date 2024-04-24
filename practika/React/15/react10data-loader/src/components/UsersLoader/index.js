import React, {useEffect, useState } from 'react';
import Spinner from './../Spinner';
import { getUsers } from './../../api';
import { API_DEFAULT_PAGE } from '../../config';

function UsersLoader(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(API_DEFAULT_PAGE)
  const componentDidMount = () => {
    console.log('componentDidMount');
    this.load();
  }
  const componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate');
    if (prevState.page === page) {
      return;
    }
    load();
  }
  
  useEffect(()=>{
    console.log('useEffect');
    load()
  },[page])

  const load = () => {
    // this.setState({
      //   isLoading: true
      // });
      // const { page } = this.state;
      setIsLoading(true)
    getUsers({ results: 7, page: page })
      .then(({ results }) => {
        // this.setState({
        //   users: results
        // })
        setUsers(results)
      })
      .catch(error => {
        // this.setState({
        //   isError: true
        // })
        setIsError(true)
      })
      .finally(() => {
        // this.setState({
        //   isLoading: false
        // })
        setIsLoading(false)
      })
  }
  // const prevPage = () => this.setState({ page: page - 1 })
  const prevPage = () => {
    setPage(page - 1)
  }
  // const nextPage = () => this.setState({ page: page + 1 })
  const nextPage = () => {
    setPage(page + 1)
  }
  const renderUser = (user) => <li key={user.login.uuid}>{`${user.name.first} ${user.name.last}`}</li>

  console.log('render');
  if (isError) {
    return <p>ERROR</p>
  }
  return (
    <section>
      <h2>Users List</h2>
      <button onClick={prevPage}>{"<"}</button>
      <span>page:{page}</span>
      <button onClick={nextPage}>{">"}</button>
      <ul>{users.map(renderUser)}</ul>
      {isLoading && <Spinner />}


    </section>
  );
}

export default UsersLoader;
