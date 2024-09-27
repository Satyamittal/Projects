import React from 'react'
import { ScoreKeeper } from '../c-2-Score_Keeper/ScoreKeeper.js';


export function Comp(props) {

    const {user,loggedIn} = props ;

    console.log("user value" , user) ;
    console.log("loggedIn value" , loggedIn) ;


    if(user)
    {
        return (
            // className= {compNameStyle.div}  style={headingStyle}
            <div >
                <h1  > Hello {loggedIn? "Alexa": "User "}it is false</h1>
                <h2> {"Satyam" || "Aman"} is result of or operator</h2>
                <h2> {"Satyam" && "Aman"} is result of && operator</h2>
            </div>
        );
    }
    return (
        <>
        <ScoreKeeper/>
        </>
    );
}

/*
Q - What this component tells you ?

- The way of fetching props .
- How to return different components based on different conditions inside & outside jsx.
- JSX always enclosed in () , & variables always include in {}. 

*/