import React from "react";
import {withUseDownloadData} from "../../hooks";
import {getUsers} from "../../api";

class UsersLoader extends  React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div>
          {this.props.isLoading && <p>Loading...</p>}
          {this.props.data.map(user => (
              <article key={user.id}>
                <h1>{user.id}</h1>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <br/>
                <hr/>
                <br/>
              </article>
          ))}
        </div>
    )
  }
}

export default withUseDownloadData(UsersLoader,getUsers);