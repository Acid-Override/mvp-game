import React, { useState, useEffect } from 'react';
import i0 from '../../dist/images/1.png'
import i1 from '../../dist/images/2.png'
import i2 from '../../dist/images/3.png'
import i3 from '../../dist/images/4.png'
import i4 from '../../dist/images/5.png'
import i5 from '../../dist/images/6.png'


export default function Hangman ({word, getNewWord}) {


  const imageArr = [i0, i1, i2, i3, i4, i5]
  const [images, setImages] = useState(imageArr)
  const [curImage, setCurImage] = useState(i0)
  const [letter, setLetter] = useState()
  const [guesses, setGuesses] = useState(0)


const handleClick = () => {
  console.log('you clicked me')
  setGuesses((prev) => (prev + 1))
}
const newWordClick = () => {
  getNewWord()
}

useEffect(() => {
  console.log('guesses', guesses)
},[guesses])


  return(
    <div>
      <button onClick={handleClick}>ChangeImage</button>
      <button onClick={newWordClick}>New Word</button>

      <img src={imageArr[guesses]}></img>
    </div>
  )
}