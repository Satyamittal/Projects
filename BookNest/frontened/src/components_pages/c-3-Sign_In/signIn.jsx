import React from 'react'
import signIn from './signIn.module.css'

export function SignIn() {
  return (
    <>
      <div className={signIn.bcontainer}>

           <form className={signIn.container}>
              <input placeholder='Email'className={signIn.input}></input> 
              <input placeholder='Password' className={signIn.input}></input> 
              <button className={signIn.button}>Submit</button>
              <h3 className={signIn.h3}>New User ? <a href="">Sign Up</a></h3>
           </form>
      </div>
    </>
        
  )
}
