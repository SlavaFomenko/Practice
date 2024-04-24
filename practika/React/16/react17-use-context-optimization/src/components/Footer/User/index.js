import React, { Component, useCallback, useContext } from 'react';
import { ThemeContext, UserContext } from '../../../context';

function User() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <section>
      <p>Ivan Ivanov, THEME:{theme}, Status:{user.status}</p>
    </section>
  );
}

export default User;
