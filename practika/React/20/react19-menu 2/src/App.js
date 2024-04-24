import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Comments from './components/Comments';
import Counter from './components/Counter';
import NavMenu from './components/NavMenu';
import { useState } from 'react';
import { MenuContext } from './context';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Chat1 from './components/Chat1';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openNavMenu = (event) => {
    setIsMenuOpen(true);
    event.stopPropagation();
  }
  const closeNavMenu = () => {
    setIsMenuOpen(false);
  }
  const open = ({ key }) => {
    if (key === "Enter") {
      setIsMenuOpen(true);
    }
  }
  return (
    <section>
      <MenuContext.Provider value={{ isMenuOpen, openNavMenu, closeNavMenu }}>
        <MenuOpenIcon
          onClick={openNavMenu}
          onKeyDown={open}
          tabIndex="1"
        />

        <NavMenu />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/chat1' element={<Chat1 />} />

          </Routes>
        </main>

      </MenuContext.Provider>

    </section>
  );
}

export default App;
