import React from "react";
import './App.css'
import TesteState from "./componentes/TesteState";

export default function App(){
    
    const paragEstilo = {
        color: 'red',
        fontSize: '1.8em',
        fontFamily: 'Courrier New',
        textnIdent: '50px',
        fontStyle: 'italic'
    }

    return(

        <div>
            <h1>Estudos sobre state</h1>
            <div>
                <h2>Componente state</h2>
                <TesteState/>
            </div>
        </div>
    )
}