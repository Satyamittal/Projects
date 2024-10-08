import React from 'react'
import buyer from './buyer.module.css'

import { Navbar } from '../c-8-Navbar/navbar'
import { BookPage } from '../c-7-book_page/bookPage'


export function PageThree() {
  return (
    <div>
      <Navbar/>
      <div className={buyer.container}>
            <BookPage/>
      </div>
    </div>
  )
}


/*
Q - What this component tells you ?

- How to pass props in components.

*/