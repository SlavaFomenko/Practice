import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as API from '../../api';
import {useDownloadData} from "../../hooks";
import {getComments, getPosts} from "../../api";

const PostsLoader = () => {
  const { data, isLoading, error } = useDownloadData(getPosts);
  const postsList = data.map(post => (
    <li key={post.id}>
      {post.title}
    </li>
  ));
  return (
    <div>
      <header>HEADER</header>
      <h2>Posts:</h2>
      {error && <div>ERROR!!!</div>}
      {postsList}
      <footer>FOOTER</footer>
    </div>
  );
}

export default PostsLoader;
