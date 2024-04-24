import React from 'react';
import { Outlet } from 'react-router-dom';

const Store = () => {
  return (
    <div>
      <h2>Start of store</h2>

      <Outlet />

      <h3>Finish of store</h3>
    </div>
  );
}

export default Store;
