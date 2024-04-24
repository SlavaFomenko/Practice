import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <h2>MENU:</h2>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
        <li>
          <Link to="/products/first">products</Link>
          <ul>
            <li>
              <Link to="/products/first">product#1</Link>
            </li>
            <li>
              <Link to="/products/second">product#2</Link>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
}

export default Menu;
