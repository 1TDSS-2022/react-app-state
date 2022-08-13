import React from "react";
import './App.css'
import TesteState from "./Components/testState/TesteState";


export default function App(){

    const paragrafEstilo={
        color:'red',
        fontSize:'1.8em',
        fontFamily:'Courrier New',
        textIndent:'50px',
        textStyle:'italic'
    }

    return(
        <main>
            <h1 style={{backgroundColor:'#fff234', color:'#0000ff', textAlign:'center'}}>Estudos sobre State</h1>
            <p style={paragrafEstilo}>Corinthians Minha vida</p>
            <p className="time">Palmeiras não tem mundial</p>

            <div>
                <h2>Componente usanso State</h2>
                <TesteState/>
            
            </div>
            
        
        </main>
    )
}