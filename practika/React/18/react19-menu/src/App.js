import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Comments from './components/Comments';
import Counter from './components/Counter';
import NavMenu from './components/NavMenu';
import {useEffect, useRef, useState} from 'react';
import { MenuContext } from './context';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)
  const MenuOpenIconRef = useRef(null)
  const openNavMenu = (event) => {
    setIsMenuOpen(true);
    // event.stopPropagation();
    // console.log(' open')
  }
  // console.log('app ' + isMenuOpen)
  const closeNavMenu = () => {
    // console.log('closeNavMenu')
    setIsMenuOpen(false);//TODO не змінюється state
  }
  const getCurrentIsMenuOpen = ()=>{
    // console.log(isMenuOpen)
    return isMenuOpen
  }
  return (
      <section>
        <MenuContext.Provider value={{ isMenuOpen, openNavMenu, closeNavMenu,getCurrentIsMenuOpen }}>
          <MenuOpenIcon
              onClick={openNavMenu}
              ref = {MenuOpenIconRef}
          />

          <NavMenu menuOpenIcon={MenuOpenIconRef}/>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/comments' element={<Comments />} />
              <Route path='/counter' element={<Counter />} />
            </Routes>
          </main>

        </MenuContext.Provider>

      </section>
  );
}

export default App;
