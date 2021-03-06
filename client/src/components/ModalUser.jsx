import React, { useState, useEffect } from 'react';
import background from '../../dist/images/background.jpg';
//import '../../dist/hangman.css';

import { FaWindowClose } from 'react-icons/fa';

export default function ModalUser({ setLogin, setAuthUser, setCreateNewPlayer, user }) {
  const myStyle={
    backgroundImage: "url('/images/background.jpg')"
  }
  const [showButton, setShowButton] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('e', e.target[0].value, e.target[1].value, e.target[2].value)
    setAuthUser({firstName : e.target[0].value, lastName : e.target[1].value, password : e.target[2].value})
    setShowButton(true)

  }

  useEffect(() => {
    if(user.firstName) {
      setLogin(false)
    }


  }, [user])



  return (

    <div className="modal-Container" style={myStyle}>
      <h1>LOGIN</h1>
      <div
        className="modal-Title-Close-Button"
        role="button"
        tabIndex={0}
        onClick={() => setLogin(false)}
        onKeyDown={() => setLogin(false)}
      >
        <FaWindowClose className="close"/>
      </div>


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
          <input type="submit" value="submit" />
      </form>
      </div>
      {showButton && (
      <div className="modal-Footer">
        <h1>User Not Found | Please Try Again</h1>
        <button onClick={() => setCreateNewPlayer(true)}>New Account</button>

      </div>
      )}



    </div>
  );
}