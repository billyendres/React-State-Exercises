import React from "react";
import "./App.css";
import Clicker from "./Clicker";
import RollDice from "./RollDice";
import Icons from "./Icons";
import Lotto from "./Lotto";
import BoxContainer from "./BoxContainer";

function App() {
  return (
    <div className="App">
      <BoxContainer />
      <Lotto />
      <Lotto name="Mini Daily Lotto" numBalls={4} maxNum={20} />
      <RollDice />
      <Clicker />
      <Icons />
    </div>
  );
}

export default App;
