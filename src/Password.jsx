
import React, { useState } from 'react'

import './Style.css'

 const Password = () => {
    const [input,setInput]= useState('')

    const generatepassword = () =>{
        let password = '';
        const characters = '1234566775abcedn@34*8ABCd@?**8845553';
        for(let i = 0; i < 8;i++ ){
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        setInput(password)
    }

  return (
    <div className="main">
    <h1>Random password generator</h1>
    <input type="text"  value={input}id="inputbox" onChange={(e) =>setInput(e.target.value)} readOnly></input>
    <button id="btn" onClick={generatepassword}>generate</button>
   </div>
  )
}


export default Password