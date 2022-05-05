import React, { useState, useEffect } from 'react';
import background from '../../dist/images/background.jpg';
//import '../../dist/hangman.css';

import { FaWindowClose } from 'react-icons/fa';

export default function ModalCreateUser({ setCreateNewPlayer, setNewCreds, errorMessage }) {
  const myStyle={
    backgroundImage: "url('/images/background.jpg')"
  }
  const [showButton, setShowButton] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('e', e.target[0].value, e.target[1].value, e.target[2].value)
    setNewCreds({firstName: e.target[0].value, lastName: e.target[1].value, password: e.target[2].value, email: e.target[3].value})

    setTimeout(() => {
      setShowButton(true)
    },"1000")
  }

  return (
    <div className="modal-Container" style={myStyle}>
      <h1>Setup Your New Account</h1>
      {errorMessage && (
        <div className="error-message">
      <h2>Something Went Wrong</h2>
      <p>Please try again.</p>
       </div>
      )}
      {!errorMessage && (
      <div
        className="modal-Title-Close-Button"
        role="button"
        tabIndex={0}
        onClick={() => setCreateNewPlayer(false)}
        onKeyDown={() => setCreateNewPlayer(false)}
      >
        <FaWindowClose className="close"/>
      </div>
      )}

{!errorMessage && (
    <div className="modal-Footer">

      <form onSubmit={onSubmit}>
        <label className="label">
          First Name:
          <input name="firstName" />
        </label>

        <label className="label">
          Last Name:
          <input name="lastName" />
        </label>
        <label className="label">
          Password:
          <input name="password" type="password"/>
        </label>
        <label className="label">
          email Address:
          <input name="email" type="email"/>
        </label>
          <input type="submit" value="submit" />
      </form>
      </div>
    )}

    {showButton && (
      <div className="modal-Footer">
      <h1>Invalid Form | Please Try Again</h1>
    </div>
    )}

    </div>
  );
}