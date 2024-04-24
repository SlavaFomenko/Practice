import { useState } from 'react';
import './App.css';
import { FirstComponent } from './components/firstcomponent';
import { SecondComponent } from './components/secondcomponent';

function App() {
  const [visible,setVisible] = useState(true);

  return (
    <div>
      <button onClick={()=>{setVisible(!visible)}}>visible</button>
      <FirstComponent/>

      {visible && <SecondComponent/>} 
    </div>
  );
}

export default App;
