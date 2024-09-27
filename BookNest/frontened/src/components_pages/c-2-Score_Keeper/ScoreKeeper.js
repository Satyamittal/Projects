import React from 'react'

let score = 0 ;
let wicket = 0;


function scoreInc(e)
{
    if( wicket == 10 ) return;
    
    score += Number(e.target.textContent) ;
    rootElement.render(<ScoreKeeper/>);
    console.log(score);
}

function out()
{
    if( wicket == 10) return ;
    wicket += 1 ;
    rootElement.render(<ScoreKeeper/>);
}

export function ScoreKeeper() 
{

    return (
        <>
            <h1>Score Keeper App</h1>
            <h2>{score}/{wicket}</h2>
            <div>
                <button onClick={scoreInc}>0</button>
                <button onClick={scoreInc}>1</button>
                <button onClick={scoreInc}>2</button>
                <button onClick={scoreInc}>3</button>
                <button onClick={scoreInc}>4</button>
                <button onClick={scoreInc}>6</button>
                <button onClick={out}>wicket</button>
            </div>
        </>
    );
}

