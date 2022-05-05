import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import i0 from '../../dist/images/1.png';
import i1 from '../../dist/images/2.png';
import i2 from '../../dist/images/3.png';
import i3 from '../../dist/images/4.png';
import i4 from '../../dist/images/5.png';
import i5 from '../../dist/images/6.png';
import i6 from '../../dist/images/won.png';
import '../../dist/hangman.css';
import Modal from './Modal.jsx';
import ModalLoser from './ModalLoser.jsx';

export default function Hangman({
  wordHistory,
  getNewWord,
  getEasyWord,
  setUser,
  user,
  updateUserScore,
  setLogin,
  topPlayers,
  getTopScores
}) {
  const allLetters = 'abcdefghijklmnopqrstuvwxyz';
  const imageArr = [i0, i1, i2, i3, i4, i5, i6];
  // const [images, setImages] = useState(imageArr)
  // const [curImage, setCurImage] = useState(i0)
  const [letter, setLetter] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [remainingLetters, setRemainingLetters] = useState(1);
  const currentWord = wordHistory[wordHistory.length - 1].word;
  //console.log('currentWord', currentWord);
  //console.log('user in Hangman', user)

  // const handleClick = () => {
  //   console.log('you clicked me');
  //   //setGuesses((prev) => (prev + 1))
  // };

  const letterClick = (ltr) => {
    console.log('ltr', ltr.target.value);
    setLetter([...letter, ltr.target.value]);
    // eslint-disable-next-line no-unused-expressions
    currentWord.split('').some((x) => x === ltr.target.value)
      ? null
      : setGuesses((prev) => prev + 1);
  };

  const resetGame = (level) => {
    console.log('resetting game, current score is: ', letterPoints.length*2);

    setGuesses(0);
    setLetter([]);
    setRemainingLetters(1);
    getTopScores()
    level === 0 ? getEasyWord() : getNewWord ()

    //record score to database here when user clicks resetGame
    if(user !== 'user'){
      //updateScore(letterPoints.length*2
      console.log('going to update score', user._id, user.score)
      const newScore = user.score + letterPoints.length * 2
      console.log('oldScore', user.score, 'newScore', newScore)
      user.score = newScore
      updateUserScore()



    }


  };
  //display letters in word or __ (based on guesses)
  const wordDisplay = currentWord.split('').map((ltr) => {
    return letter.some((x) => x === ltr) ? <>{ltr}</> : <>{'_'}</>;
  });
  const letterPoints = wordDisplay
    .filter((x) => x.props.children !== '_')
    .map((x) => x.props.children);

  const letterKeys = allLetters.split('').map((ltr, index) => (
    <button
      key={index}
      value={ltr}
      onClick={letterClick}
      disabled={letter.includes(ltr) || guesses >= 5}
    >
      {ltr}
    </button>
  ));

  useEffect(() => {
    console.log('guesses', guesses);
  }, [guesses]);
  useEffect(() => {
    const wfil = wordDisplay.filter((x) => x.props.children === '_').length;
    setRemainingLetters(wfil);
  }, [letter]);

  const TopPlayers = topPlayers.map((player, index) => (<li>{player.firstName} : {player.score}</li>))

  return (
    <div className="Hangman">
      {guesses === 6 ? (
        <div className="gameOver">Game Over</div>
      ) : (
        <div className="playOn">
          <p>Pick a Letter</p>
          <p> # of guesses {guesses}</p>
        </div>
      )}
      <div className="hanging-center">
      <div className="hanging-center-left">
          <ul>
            Top Players
            {TopPlayers}
          </ul>
        </div>
        <div className="hanging-center-center">
          {remainingLetters === 0 ? (
            <img src={imageArr[0]}></img>
          ) : (
            <img
            alt="hanger"
              src={imageArr[guesses] ? imageArr[guesses] : imageArr[5]}
            ></img>
          )}
        </div>

        {user.score && (
        <div className="hanging-center-right">
          <ul>
            Current User
            <li>Name: {user && user.firstName}</li>
            <li>Score: {user && user.score}</li>
          </ul>
        </div>
        )}
      </div>
      <br />

      <div className="Hangman-word">{wordDisplay}</div>

      {!user.score && (<button onClick={() => setLogin(true)}>Login</button>)}
      <br />
      {/* <button onClick={getNewWord}>HARD Word</button>
      <br />
      <button onClick={getEasyWord}>EASY Wordle</button>
      <br /> */}

      <br />

      {remainingLetters === 0 &&
        createPortal(
          <div
            className={
              remainingLetters === 0
                ? 'modal-Background active'
                : 'modal-Background'
            }
          >
            <Modal
              openModal={remainingLetters === 0}
              resetGame={resetGame}
              currentWord={currentWord}
              letterPoints={letterPoints}
              user={user}

            />
          </div>,
          document.getElementById('portal')
        )}
      {guesses === 5 &&
        createPortal(
          <div
            className={
              guesses === 5 ? 'modal-Background active' : 'modal-Background'
            }
          >
            <ModalLoser
              openModal={guesses === 5}
              resetGame={resetGame}
              currentWord={currentWord}
              letterPoints={letterPoints}
              user={user}

            />
          </div>,
          document.getElementById('portal')
        )}
      <div>
        <p className="Hangman-btns">{letterKeys}</p>
        <br />
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}
