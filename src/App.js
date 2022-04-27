import React, { useState } from "react";
import GameButton from "./parts/GameButton";
import ScoreBoard from "./parts/ScoreBoard";
import './App.css';

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [Gbutton, setGbutton]= useState(0);  

  function reset(){
    setWins(0);
    setLosses(0);
    setGbutton(0);
    return;
  }

  return (
    <div>
      <div className="gameArea center">
        <div className="gameScreen">
          <div className="scoreBoard">
            <ScoreBoard wins={wins} losses={losses}/>
          </div>
          <div className="gameControls center">
            <GameButton className="gameButton" Gbutton={Gbutton} setGbutton={setGbutton} wins={wins} losses={losses} setWins={setWins} setLosses={setLosses} buttonId={1}/>
            <GameButton className="gameButton" Gbutton={Gbutton} setGbutton={setGbutton} wins={wins} losses={losses} setWins={setWins} setLosses={setLosses} buttonId={2}/>
            <GameButton className="gameButton" Gbutton={Gbutton} setGbutton={setGbutton} wins={wins} losses={losses} setWins={setWins} setLosses={setLosses} buttonId={3}/>
          </div>
          <div className="center">
            <button className="reset" onClick={()=> reset()}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}
