import React from 'react';
import './App.css';
import UserSection from './components/UserSection';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UserSection />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>HEADER</h2>
      </header>
    )
  }
}

function Footer() {
  return (
    <footer>
      <h2>FOOTER</h2>
      <h3>Skills:</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </footer>
  )
}

export default App;
