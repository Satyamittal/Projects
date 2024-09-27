import React from 'react'
import signIn from './signIn.module.css'
import {Link} from 'react-router-dom'

export function SignIn() {
  return (
    <>
      <div className={signIn.bcontainer}>

           <form className={signIn.container}>
              <input placeholder='Email'className={signIn.input}></input> 
              <input placeholder='Password' className={signIn.input}></input> 
              <button className={signIn.button}>Submit</button>
              <h3 className={signIn.h3}>New User ? <Link to="/signUp">Sign Up</Link></h3>
           </form>
      </div>
    </>
        
  )
}
