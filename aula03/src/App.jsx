import React from "react";
import './App.css'
import TesteState from "./components/TesteState";

export default function App(){

    const paragEstilo = {
        color: 'red',
        fontSize: '1.8em',
        fontFamily: 'Courrier new',
        textIndent: '50px',
        fontStyle: 'italic'
    }
    return(
        <div>
            <h1 style={{backgroundColor:'black', color:'beige', textAlign: 'center'}}>ESTUDO SOBRE STATE</h1>
            <p style={paragEstilo}>Rosas são vermelhas, violetas são azuis</p>
            <p className="classe1">Oia só</p>
            <div>
                <h2>COMPONENTE USANDO STATE</h2>
                <TesteState/>
            </div>
        </div>
    )
}