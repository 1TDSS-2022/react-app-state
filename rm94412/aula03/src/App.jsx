import React from "react";
import './App.css'
const paragrafoEstilo={
    color: 'blue',
    fontSize: '1.8em',
    fontFamily: ' Courrier New',
    textIndent: '50px',
    fontStyle: 'italic'
}

export default function App(){
    return(
        <div>
            <h1 style={{backgroundColor:'#fff234', color:'	#4B0082'}}>Estudos Sobre STATE</h1>
            <p style={paragrafoEstilo}>Estou aprendendo a progamar em React com CSS inline</p>
            <p className="classe1">Meu conteúdo de classe</p>
        </div>
    )
}