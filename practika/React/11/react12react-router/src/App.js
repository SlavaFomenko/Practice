import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UsersLoader from './components/UsersLoader';
import Product from './components/Product';
import Store from './components/Store';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UsersLoader />} />

        <Route path='/products/' element={<Store />}>
          <Route path='first' element={<Product name="product#1" description="description about product1" price={1000} />} />
          <Route path='second' element={<Product name="product#2" description="description about product2" price={2000} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
