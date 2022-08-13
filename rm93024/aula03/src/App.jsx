import React from "react"
import './App.css'

export default function App() {

    const paragEstilo = {
        color:'rgb(197, 180, 206)',
        fontSize:'1.8em',
        fontFamily: 'Courrier New',
        textIndent:'50px',
        fontStyle:'italic'
    }

    return(
        <div>
            <h1 style={{backgroundColor:'rgb(197, 180, 206)', color:'#160033', textAlign:'center'}}>ESTUDOS SOBRE STATE</h1>
            <p style={paragEstilo}>Rosas são vermelhas, violetas são azuis!</p>        
            <p className="classe1">Meu conteúdo de classe</p>        
        </div>
    )
}