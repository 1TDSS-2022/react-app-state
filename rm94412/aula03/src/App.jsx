import React from "react";
import './App.css'
import TesteState from "./components/testestate/TesteState";



export default function App(){
    return(
        <div>
            <h1 style={{backgroundColor:'#fff234', color:'	#4B0082', textAlign: 'center'}}>Estudos Sobre STATE</h1>
           <div>
            <h2>Componente usando Componente</h2>
            <TesteState/>
           </div>
        </div>
    )
}