import React from 'react';
import {withUseDownloadData} from '../../hooks';
import {getPosts} from '../../api';

class PostsLoader extends  React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div>
          {this.props.isLoading && <p>Loading...</p>}
          {this.props.data.map(post => (
              <article key={post.id}>
                <h1>{post.id}</h1>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
                <br/>
                <hr/>
                <br/>
              </article>
          ))}
        </div>
    )
  }
}

export default withUseDownloadData(PostsLoader,getPosts);
