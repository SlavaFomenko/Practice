import React from 'react';
import { useDownloadData } from '../../hooks';
import { getComments } from '../../api';
import {useTheme} from "../../hooks/ChengeTheme/useTheme";

const CommentsLoader = () => {
  console.log('render');
  const { data, isLoading, error } = useDownloadData(getComments);
  const {theme,setTheme} = useTheme();


  const commentsList = data.map(comment => (
    <article key={comment.id}>
      <h2>{comment.name}</h2>
      <h3>{comment.body}</h3>
    </article>
  ));
  const selectTheme = (e)=>{
      const color = e.target.value;
      setTheme(color)
    }


  return (
    <div className={theme}>
      <label>
          <span style={{backgroundColor: 'red',padding:'0 20px',color:"white"}}>Chenge theme</span>
        <select onChange={selectTheme}>
          <option value={'default'}>default</option>
          <option value={'black'}>black</option>
          <option value={'danger'}>danger</option>
          <option value={'info'}>info</option>
          <option value={'success'}>success</option>
          <option value={'primary'}>primary</option>
        </select>
      </label>
    {isLoading && <p>Loading...</p>}
      {commentsList}
    </div>
  );
}

export default CommentsLoader;
