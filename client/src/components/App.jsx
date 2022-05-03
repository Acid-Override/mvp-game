import React, {useState, useEffect } from 'react';
import axios from 'axios';
import "../../dist/style.css";
//import background from '../images/background.jpg'



export default function App () {

  const testFunc = () => {
    console.log('testfunc')
    axios.get('/quest')
    .then(data => console.log('axios data', data))
    .catch(err => console.log('axios err', err))
  }

  useEffect(() => {
    console.log('useEffect')
    axios.get('/quest')
    .then(data => console.log('axios data', data))
    .catch(err => console.log('axios err', err))
  },[])


  return (
    <div >
      <h1>Hello World</h1>

    </div>
  )
}
