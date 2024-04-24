import logo from './logo.svg';
import './App.css';
import Card from './card/card';
import Button from './buttonState/button';

function App() {
  return (
    <section className='wrapper'>
      <Card title='Gibson SG' price='1.600$' img='https://cdn.shoplightspeed.com/shops/643427/files/49166061/gibson-brand-new-2022-gibson-sg-standard-61-faded.jpg'/>
      <Card title='Jackson V' price='1.500$' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZt4h_ROB1CmZq7c2mvyjNUIvuLg1pUNbyGL8fU6imGwi-UBoLyebqdMnlhmS2xBCQXw&usqp=CAU'/>
      <Card title='Fender Telecaster' price='1.400$' img='https://static.musiciansfriend.com/thehub/binaries/content/gallery/mf/buying-guides/fender-telecaster.jpg'/>
      <Button/>
    </section>
  )
}

export default App;
