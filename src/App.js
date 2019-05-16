import React from "react";
import "./App.css";
import Clicker from "./Clicker";
import RollDice from "./RollDice";
import Icons from "./Icons";
import Lotto from "./Lotto";

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto name="Mini Daily Lotto" numBalls={4} maxNum={20} />
      <RollDice />
      <Clicker />
      <Icons />
    </div>
  );
}

export default App;
