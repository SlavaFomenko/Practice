import React, { useContext, useEffect, useId, useRef } from 'react';
import { Link } from 'react-router-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../context';
import classNames from 'classnames';


const NavMenu = () => {
  const { isMenuOpen, closeNavMenu } = useContext(MenuContext);
  const container = classNames(styles.container, { [styles.open]: isMenuOpen });

  const navRef = useRef(null);
  // console.log(navRef);

  useEffect(() => {
    const handlerClick = ({ target }) => {
      // console.log(navRef);
      if (!navRef.current.contains(target)) {
        closeNavMenu();
      }
    }
    window.addEventListener('click', handlerClick);//не забыть почистить за собой
    return () => {
      window.removeEventListener('click', handlerClick);
    }
  }, []);
  const close = ({ key }) => {
    if (key === "Enter") {
      closeNavMenu();
    }
  }
  return (
    <nav className={container} ref={navRef}>

      <CancelPresentationIcon
        className={styles.closeBtn}
        tabIndex="1"
        onKeyDown={close}
        onClick={closeNavMenu} />
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/chat1">Chat1</Link>
        </li>
        <li>
          <Link to="/chat2">Chat2</Link>
        </li>
        <li>
          <Link to="/todo-list">To-Do List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
