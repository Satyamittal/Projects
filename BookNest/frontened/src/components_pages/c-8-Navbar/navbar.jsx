import React from 'react'
import navbar from './navbar.module.css'
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className={navbar.header}>
        <img src="https://th.bing.com/th?id=OIP.p0ZVkMJGGu45WHPpbr6_QQHaIW&w=235&h=265&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo Loading" className={navbar.image} />
        <button className={`${navbar.button} ${navbar.buy}`}><Link to='/buyerPage'className={navbar.link}>BUY</Link></button>
        <button className={`${navbar.button} ${navbar.sell}`}><Link to='/signUp'className={navbar.link}>SELL</Link></button>
        <button className={`${navbar.button} ${navbar.logout}`}><Link to='/'className={navbar.link}>LOGOUT</Link></button>
        <input type='search' className={`${navbar.search}`} placeholder='&#128269;'></input>
    </div>
  );
}

