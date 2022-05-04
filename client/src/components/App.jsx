import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import ModalUser from './ModalUser.jsx';

//import "../../dist/hangman.css";
//import "../../dist/style.css";
//import background from '../../dist/images/background.jpg'
import Hangman from './Hangman.jsx'
import API from '../config/config.js'



export default function App () {

  const [user, setUser] = useState(null)
  const [word, setWord] = useState('a')
  const [wordHistory, setWordHistory] = useState([{word: 'abc'}])
  const [newPlayer, setNewPlayer] = useState([])
  const [authUser, setAuthUser] = useState()



  useEffect(() => {
    console.log('useEffect')
    axios.get('/quest')
    .then(data => {
      console.log(data.data)
      //setUser(...user, data.data);
    })
    .catch(err => console.log('axios err', err))
  },[])

  const getUserData = () => {
    console.log('UserDateRequest')
  }


  const getNewWord = () => {
    axios.get(API.API_URL)
    .then(data => {
      console.log(data.data)
      setWord(data.data[0])
      setWordHistory([...wordHistory, {_id: null,word: data.data[0]}])
    })
    .catch(err => console.log(err))
  }

  const getEasyWord = () => {
    axios.get('/word')
    .then(data => {
      console.log('data word', data.data[0].word)
      setWord(data.data[0].word)
      setWordHistory([...wordHistory, data.data[0]])
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    console.log("get me a new word")
    getNewWord()
  }, [])

  useEffect(() => {
    console.log('user', user)
    getUserData()
  }, [user])

  useEffect(() => {
    console.log(authUser)
  }, [authUser])


  console.log(wordHistory)

  return (
    <div>
      { user &&
      createPortal(
        <div className={ user ? 'modal-Background active' : 'modal-Background'}>

        <ModalUser
          setAuthUser={setAuthUser}

        />
        </div>,
        document.getElementById('portal')
      )}

      <Hangman wordHistory={wordHistory} getNewWord={getNewWord} getEasyWord={getEasyWord} setUser={setUser}/>

    </div>
  )
}
