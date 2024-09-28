import React, { useEffect } from 'react'
import signIn from './signIn.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {PageThree} from '../p-3-buyer_page/buyer.page.jsx'
import {PageFour} from '../p-4-Not_avail/notAvail.page.jsx'

export function SignIn() {

  const [email,setEmail] = useState("") ;
  const [pass,setPass] = useState("") ;
  const [submit, setSubmit] = useState(false) ;
  const [userExists , setUserExists] = useState(null) ;

  function handleSubmit(e)
  {
    e.preventDefault() ;
    const form = e.target ;

    const email = form.querySelector('input[placeholder="Email"]').value;
    const password = form.querySelector('input[placeholder="Password"]').value;

    setEmail(email) ;
    setPass(password) ;
    setSubmit(!submit) ;
  }
   
  // useEffect that triggers verification when submit is true
  useEffect(() => {
    const callApi = async () => {
      const postData = {
        email: email,
        password: pass,
      };

      try {
        const response = await fetch('http://localhost:3100/home', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if(data.message == "user exists") setUserExists(true) ;
        else setUserExists(false) ;
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setSubmit(false); // Reset submit to false after the API call
      }
    };

    if (submit) { // Ensure callApi only runs when submit is true
      callApi();
    }
  }, [submit]); // Adding email and pass as dependencies

  if(userExists)
  {
    return (<> <PageThree/></> ) ;
  }

  return (
    <>
      { userExists == false ? ( <PageFour/>) : ( 
        <div className={signIn.bcontainer}>
          <form className={signIn.container} onSubmit={handleSubmit}>
            <input placeholder='Email'className={signIn.input} ></input> 
            <input placeholder='Password' className={signIn.input} ></input> 
            <button className={signIn.button} type='submit'>Submit</button>
            <h3 className={signIn.h3}>New User ? <Link to="/signUp">Sign Up</Link></h3>
          </form>
        </div>
      )}
    </>
        
  )
}
