import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeContext, UserContext } from './context';
import { render } from '@testing-library/react';

// class List extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <h2>LIST:</h2>
//         <ul>
//           {this.props.children}
//         </ul>
//       </>
//     )
//   }
// }
class Item extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <li>{title}</li>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      theme: true,
    }
  
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  updateContextValue = () => {
    console.log("hello world");
    this.setState({ theme: !this.state.theme });
  };
  render() {
    return (
      <>
        <ThemeContext.Provider value={{
          theme:this.state.theme,
          chengeValue:this.updateContextValue
        }}>
          <UserContext.Provider value={{ status: 'guest' }}>
            <Header />
            <Footer />
          </UserContext.Provider>
        </ThemeContext.Provider>

        {/* <List>
          <Item title="title1" />
          <Item title="title2" />
          <Item title="title3" />
        </List> */}
      </>
    )
  }
}


export default App;
