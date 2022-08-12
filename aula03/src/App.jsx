import React from "react"
import './App.css'
import TesteState from "./TesteState"
export default function App(){
    //fazer css

    const paragEstilo = {
        color : "red"
    }
    
    return (
        <div>
            <h1>Estudos sobre State</h1>
            <p style={paragEstilo}>Paragrafo estilizado</p>
            <div>
                <h2>Componente usando state</h2>
                <TesteState/>
            </div>
        </div>
    )
    }