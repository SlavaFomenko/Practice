import React, {useContext, useEffect, useId, useRef} from 'react';
import { Link } from 'react-router-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../context';
import classNames from 'classnames';


const NavMenu = ({menuOpenIcon}) => {
  const { isMenuOpen, closeNavMenu,getCurrentIsMenuOpen } = useContext(MenuContext);
  const container = classNames(styles.container, { [styles.open]: isMenuOpen });
  // console.log('navMenu '+ isMenuOpen)
  // useEffect(() => {
  //   const nav = document.getElementById("navMenu");
  //   const handlerClick = ({ target }) => {
  //     if (!nav.contains(target)) {
  //       closeNavMenu();
  //     }
  //   }
  //   window.addEventListener('click', handlerClick);//не забыть почистить за собой
  //   return () => {
  //     window.removeEventListener('click', handlerClick);
  //   }
  // }, []);
  const navId = useId();

  useEffect(() => {
    const nav = document.getElementById(navId);
    console.log( 'effect               ' + isMenuOpen)
    const handlerClick = ({ target }) => {
      // console.log(target)
      console.log(target)
      // console.log(getCurrentIsMenuOpen())
        console.log((target === menuOpenIcon.current) +'   hello')
      // if(getCurrentIsMenuOpen()){
      //   console.log('2')
        if (!nav.contains(target) && target !== menuOpenIcon.current) {
          console.log('effect')
          closeNavMenu();
        }
      // }
    }

    window.addEventListener('click', handlerClick);//не забыть почистить за собой
    return () => {
      window.removeEventListener('click', handlerClick);
    }
  }, []);

  return (
    // <nav className={container} id='navMenu'>
    <nav className={container} id={navId}>
      <CancelPresentationIcon
        className={styles.closeBtn}
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
      </ul>
    </nav>
  );
}

export default NavMenu;
