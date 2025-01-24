import './App.css';
import { useState } from "react";
import DiceMain from './components/DiceMain';
import DiceFirst from './components/DiceFirst';

function App() {
  const [startGame,setStartGame] = useState(false);

  const toggle = () =>{
    setStartGame(!startGame);
    console.log(startGame);
  }
  return (
    <div className="App">
      {startGame ? <DiceFirst /> : <DiceMain toggle={toggle}/>}
    </div>
  );
}

export default App;
