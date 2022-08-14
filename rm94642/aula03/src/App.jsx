import React from "react"
import './App.css'
import TesteState from "./components/testeState/TesteState"

export default function App(){

 
    return(
        <div>
            <h1 style={{backgroundColor: '#fff234', color: '#0000ff', textAlign: 'center'}}>Estudos sobre state</h1>
            <div>
                <h2>Componente usando State</h2>
                <TesteState/>
            </div>
        </div>
    )
}