import React from 'react';
import {withUseDownloadData} from '../../hooks';
import { getComments } from '../../api';
// import {render} from "@testing-library/react";

class CommentsLoader extends  React.Component{
  constructor(props) {
    super(props);
  }
  render(){

  return (
    <div>
      {this.props.isLoading && <p>Loading...</p>}
      {this.props.data.map(comment => (
          <article key={comment.id}>
            <h2>{comment.name}</h2>
            <h3>{comment.body}</h3>
          </article>
      ))}
    </div>
    )
  }
}

export default withUseDownloadData(CommentsLoader,getComments);
