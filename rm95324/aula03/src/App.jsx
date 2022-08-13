import React from "react"
import "./App.css"
import TesteState from "./components/TesteState/TesteState"

export default function App(){

    const paragEstilo = {
        color:'red',
        fontSize:'1.8em',
        fontFamily:'Courrier New',
        textIndent:'50px',
        fontStyle:'italic'
    }

    return(
        <div>
            <h1 style={{backgroundColor: '#fff234', color: '#0000ff'}}>ESTUDOS SOBRE STATE</h1>
            <p style={paragEstilo}>Rosas são vermelhas, violetas são azuis!</p>
            <p className="classe1">Meu conteúdo de classe</p>
            <TesteState/>
        </div>
    )
}

