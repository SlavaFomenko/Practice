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
  console.log(navRef);

  useEffect(() => {
    const handlerClick = ({ target }) => {
      console.log(navRef);
      if (!navRef.current.contains(target)) {
        closeNavMenu();
      }
    }
    const handlerEsc = ({key})=>{
      if(key === "Escape"){ // проверка isMenuOpen не работатет так как при открытии автоматически стейт стает false
        closeNavMenu();
      }
    }
    window.addEventListener('click', handlerClick);//не забыть почистить за собой
    document.addEventListener('keydown', handlerEsc);
    return () => {
      window.removeEventListener('click', handlerClick);
      document.addEventListener('keydown', handlerEsc);
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
      </ul>
    </nav>
  );
}

export default NavMenu;
