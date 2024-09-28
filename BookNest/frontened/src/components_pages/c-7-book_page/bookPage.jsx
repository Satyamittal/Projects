import React from 'react'
import bookPage from './bookPage.module.css'

export function BookPage() {

  return (
        <form action="" className={bookPage.form}>
            <div className={bookPage.upper}>
                <img className={bookPage.image} alt='Loading' src='https://www.bing.com/th?id=OIP.qDvAlhidTBzXiGyDfq_O0gHaE7&w=147&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'/>
                <div className={bookPage.inputC}>
                    <input placeholder='Name of Book' className={bookPage.input} value="Owner Phone Number : 8998989898" readOnly></input>
                    <input placeholder='Name of Book' className={bookPage.input} value="Name of Book : Harry Potter" readOnly></input>
                    <input placeholder='Publication' className={bookPage.input} value="Publication : Mc Graw Hills" readOnly></input>
                    <input placeholder='Year' className={bookPage.input} value="Year : 2020" readOnly></input>
                    <input placeholder='Expected Price' className={bookPage.input} value="Price : 342 &#8377;" readOnly></input>
                </div>
            </div>
        </form>
  )
}
