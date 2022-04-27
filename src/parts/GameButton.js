import React, { useState, useEffect } from "react";

export default function GameButton({ wins, losses, setWins, setLosses, buttonId, className, Gbutton, setGbutton }) {
  const [color, setColor] = useState(`white`);
  useEffect(() => changer(), [Gbutton]);
  const rngResult = Math.floor(Math.random() * 3) + 1;

  function changer() {
    if (buttonId === rngResult && buttonId === Gbutton) {
      setColor(`green`);
      setWins(wins + 1);
      return;
    } else if (buttonId !== rngResult && buttonId === Gbutton) {
      setColor(`red`);
      setLosses(losses + 1);
      return;
    } else {
      setColor(`white`);
    }
  }

  function clickHandler() {
    setGbutton(buttonId);
    changer();
  }

  return (
    <button className={`${className} ${color}`} onClick={clickHandler}/>
  );
}
