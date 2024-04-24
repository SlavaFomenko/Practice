import logo from './logo.svg';
import './App.css';
import { ThemeContext, UserContext } from './context';
import Header from './components/Header';
import Footer from './components/Footer';
import ClickerSection from './components/ClickerSection';

function App() {
  return (
    // <ThemeContext.Provider value="BLACK">
    //   <UserContext.Provider value={{ status: 'guest' }}>
    //     <Header />
    //     <Footer />
    //   </UserContext.Provider>
    // </ThemeContext.Provider>
    <ClickerSection />
  );
}

export default App;
