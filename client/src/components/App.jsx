import React, {useState, useEffect } from 'react';
import axios from 'axios';
//import "../../dist/hangman.css";
//import "../../dist/style.css";
//import background from '../../dist/images/background.jpg'
import Hangman from './Hangman.jsx'
import API from '../config/config.js'



export default function App () {

  const [user, setUser] = useState([])
  const [word, setWord] = useState('aba')


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
    console.log('setNewWord api_url', API.API_URL)
    axios.get(API.API_URL)
    .then(data => {
      console.log('api dictionary get', data.data[0])
      setWord(data.data[0])
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    console.log("get me a new word")
    getNewWord()

  }, [])


  return (
    <div>

      <Hangman word={word} getNewWord={getNewWord}/>

    </div>
  )
}
