import React from 'react'
import signUp from './signUp.module.css'
import { BookCard } from '../c-5-book_card/bookCard'


export function SignUp() {
  return (
    <div className={signUp.bcontainer}>
        <h3 className={signUp.h3}>Buyer/Seller Form</h3>

    <form className={signUp.form}>
            <input placeholder='Name' className={signUp.input}></input> 
            <input placeholder='Email' className={signUp.input}></input> 
            <input placeholder='Password' className={signUp.input} ></input> 
            <input placeholder='RTO-Code' className={signUp.input} ></input> 
            <input placeholder='Phone-Number' className={signUp.input} ></input> 
            <button className={signUp.button}>Submit</button>
    </form>
       <h3 className={signUp.h3}> Add books you want to sell</h3>
       <div className={signUp.bookForm}>
          {/* {bookArray.map((bookBox,index)=><BookCard/>)} */}
          <BookCard/>
          <BookCard/>
       </div>
</div>
  )
}

