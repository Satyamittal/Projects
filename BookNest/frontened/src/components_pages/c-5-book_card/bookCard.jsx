import React from 'react'
import bookCard from './bookCard.module.css'
import { useState } from 'react'

export function BookCard() {

    

  return (
        <form action="" className={bookCard.form}>
            <div className={bookCard.upper}>
                {/* <div className={bookCard.image}> */}
                    <input  className={`${bookCard.fileInput} ${bookCard.image}`} type='file'/>
                    {/* <img className={bookCard.image} alt='Loading'/> */}
                {/* </div> */}
                <div className={bookCard.inputC}>
                    <input placeholder='Name of Book' className={bookCard.input}></input>
                    <input placeholder='Publication' className={bookCard.input}></input>
                    <input placeholder='Year' className={bookCard.input}></input>
                    <input placeholder='Expected Price' className={bookCard.input}></input>
                    <button className={bookCard.button}>Add</button>
                </div>
                <div className={bookCard.cross}>&#10006; </div>
            </div>

            <div className={bookCard.lower}>
                <h2 className={bookCard.lowerPlus}>+</h2>
            </div>
        </form>
  )
}

