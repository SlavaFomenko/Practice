import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as API from '../../api';
import {useDownloadData} from "../../hooks";
import {getUsers} from "../../api";

const UsersLoader = () => {
 const {data,isLoading,error}=useDownloadData(getUsers)
  const usersList = data.map(user => (
    <article key={user.id}>
      <h2>{user.name}</h2>
      <p>
        email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </article>
  ));
  return (
    <div>
      {isLoading && <div>LODING....</div>}
      {error && <div>ERROR!!!</div>}
      {usersList}
    </div>
  );
}

export default UsersLoader;
