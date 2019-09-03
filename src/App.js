import React, { useState } from "react";
import "./App.css";
import pasta01 from "./images/pasta01.jpg";
import pasta02 from "./images/pasta02.jpg";
import pasta03 from "./images/pasta03.jpg";
import pasta04 from "./images/pasta04.jpg";
import pasta05 from "./images/pasta05.jpg";
import pasta06 from "./images/pasta06.jpg";
import pasta07 from "./images/pasta07.jpg";
import pasta08 from "./images/pasta08.jpg";
import pasta09 from "./images/pasta09.jpg";

function App() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const [clicked] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [images] = useState([
    pasta01,
    pasta02,
    pasta03,
    pasta04,
    pasta05,
    pasta06,
    pasta07,
    pasta08,
    pasta09
  ]);
  const updateScore = image => {
    shuffle(images);

    if (clicked.includes(image)) {
      clicked.length = 0;
      setScore(0);
      setShake(true);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > topScore) {
        setTopScore(newScore);
      }
      clicked.push(image);
      setShake(false);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="title">DOGGIRONCINO</div>
        <br />
        <div className="subTitle">- CLICKY GAME -</div>
        <br />
        <div className="instruction01">
          Click on an image to earn points, <br /> but don't click on any more
          than once!
        </div>

        <br />

        <div className="instruction02">
          {topScore == 0
            ? "Click an image to begin!"
            : shake
            ? "You guessed incorrectly!"
            : "You guessed correctly!"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="currentScore">SCORE : {score}</div>
        <br />
        <div className="topScore">TOP SCORE : {topScore}</div>
      </div>
      <div className={"right" + (shake ? " shake" : "")}>
        {images.map(image => (
          <Pastaimg key={image} url={image} onClick={updateScore} />
        ))}
      </div>
    </div>
  );
}

function Pastaimg({ url, onClick }) {
  return <img className="pastabox" src={url} onClick={() => onClick(url)} />;
}

export default App;
