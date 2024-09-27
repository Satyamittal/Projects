import React from 'react'
import bookCard from './bookCard.module.css'

export function BookCard() {
  return (
        <form action="" className={bookCard.form}>
            <div className={bookCard.upper}>
                <div className={bookCard.image}>
                    <h2>+</h2>
                </div>
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

