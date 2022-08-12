import React from "react";
import './App.css'



export default function App(){

    const paragEstilo = {
        color:'red',
        fontSize: '1.8em',
        fontFamily: 'Courrier New',
        textIndent: '50px',
        fontStyle: 'italic'
    }

    return(
        <div>
            <h1 style={{backgroundColor: '#fff234', color: '#0000ff', textAlign: 'center'}}>ESTUDOS SOBRE STATE</h1>
            <p style={paragEstilo}>Rosas sao vermelhas, violetas sao azuis!</p>
            <p className="classe1">Meu conteudo de classe</p>

        </div>
    )
}