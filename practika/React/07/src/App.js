import './App.css';
import Product from './ Product';
import Calendar from './Calendar';

const item = {
  name: "Gibson SG",
  price: 1800,
  promotionalPrice:1799,
  image:"https://i0.wp.com/www.rufusguitarshop.com/wp-content/uploads/2023/08/SKU_sgs00ebch_01_220223img_0863_01.jpg?fit=1800%2C2400&ssl=1",
  quantity:5
}

function App() {
  return (
    <div className="App">
      <Product item ={item}/>
      <Calendar/>
    </div>
  );
}

export default App;
