  // import React, { Component } from 'react';
  import React from 'react';

  class User extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <article>
          <h2>{this.props.firstName}</h2>
          <h3>{this.props.age}</h3>
        </article>
      );
    }
  }

  export default User;
