import React, {useState, useEffect } from 'react';
import axios from 'axios';
import "../../dist/hangman.css";
import background from '../../dist/images/background.jpg'
import Hangman from './Hangman.jsx'



export default function App () {

  const [user, setUser] = useState([])
  const [word, setWord] = useState('apple')


  useEffect(() => {
    console.log('useEffect')
    axios.get('/quest')
    .then(data => {
      console.log('axios data', data.data)
      setUser(...user, data.data);
    })
    .catch(err => console.log('axios err', err))
  },[])

  const getNewWord = () => {
    console.log('setNewWord')
    axios.get('/word')
    .then(data => {
      setWord(data.data)
    })
    .catch(err => console.log(err))
  }




  return (
    <div >
      <h1>Let's Play Hangman!</h1>
      <Hangman word={word} getNewWord={getNewWord}/>
      <div className="funnydiv">
        <h3>funny Time</h3>
      </div>


    </div>
  )
}
