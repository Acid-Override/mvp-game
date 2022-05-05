import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import ModalUser from './ModalUser.jsx';
import ModalCreateUser from './ModalCreateUser.jsx'

//import "../../dist/hangman.css";
//import "../../dist/style.css";
//import background from '../../dist/images/background.jpg'
import Hangman from './Hangman.jsx'
import API from '../config/config.js'



export default function App () {

  const [user, setUser] = useState('user')
  const [word, setWord] = useState('a')
  const [wordHistory, setWordHistory] = useState([{word: 'abc'}])
  const [createNewPlayer, setCreateNewPlayer] = useState(false)
  const [authUser, setAuthUser] = useState()
  const [login, setLogin] = useState(false)
  const [newCreds, setNewCreds] = useState()
  const [errorMessage, setErrorMessage] = useState(false)
  const [topPlayers, setTopPlayers] = useState([])





  // const getUserData = () => {
  //   console.log('UserDateRequest')
  // }

  const requestUserAuth = () => {
    console.log('authUser HERE',authUser)
    axios.post("/user", authUser)
    .then(data => {
      if(data) {
        console.log('requestUserAuth', data)
        setUser(data.data)
      } else {
        console.log('No User Data, Please create account')
      }
    })
    .catch(err => console.log(err))
  }
  const updateUserScore = () => {
    axios.post(`/user/${user._id}`, user)
    .then(data => getTopScores())
    .catch(err => console.log(err))
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

  const newUserSetup = () => {
    axios.post('/setup', newCreds)
    .then(data => {
      //console.log('axios new user data', data)
      if(data.data._id){
        //console.log(data.data._id)
        setUser(data.data)
      } else {
        setCreateNewPlayer(true)
        setErrorMessage(true)
        setTimeout(() => {
          setErrorMessage(false)
        }, 3000)
      }
    })
    .catch(err => console.log(err));
  }

  const getTopScores = () => {
    axios.get('/scores')
    .then(data => {
      setTopPlayers(data.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    setLogin(false)
  }, [createNewPlayer])


  useEffect(() => {
    getNewWord()
    getTopScores()
  },[])


  useEffect(() => {
    if(authUser) {
      requestUserAuth()
    }
  }, [authUser])

  useEffect(() => {
    if(newCreds) {
      newUserSetup()
    }
    setCreateNewPlayer(false)
  },[newCreds])


  return (
    <div>
      { login &&
      createPortal(
        <div className={ login ? 'modal-Background active' : 'modal-Background'}>

        <ModalUser
          setAuthUser={setAuthUser}
          setCreateNewPlayer={setCreateNewPlayer}
          setLogin={setLogin}
          user={user}

        />
        </div>,
        document.getElementById('portal')
      )}
       { createNewPlayer &&
      createPortal(
        <div className={ createNewPlayer ? 'modal-Background active' : 'modal-Background'}>

        <ModalCreateUser
        setCreateNewPlayer={setCreateNewPlayer}
        setNewCreds={setNewCreds}
        errorMessage={errorMessage}
        />
        </div>,
        document.getElementById('portal')
      )}


      <Hangman wordHistory={wordHistory} getNewWord={getNewWord} getEasyWord={getEasyWord} setUser={setUser} user={user} updateUserScore={updateUserScore} setLogin={setLogin} topPlayers={topPlayers} getTopScores={getTopScores}/>

    </div>
  )
}
