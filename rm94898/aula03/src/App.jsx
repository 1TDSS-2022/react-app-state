import React from "react";
import "./App.css"
import { useState } from "react";
import ComponentTeste from "./ComponentTeste";
import TesteStage from "./testeStage/TesteStage";
import CaixaTeste from "./exercicio2/CaixaTeste";


export default function App(){
    const paraEstilo = {
        color: 'red',
        fontSize: '1.8em',
        fontFamily: 'Arial, sans-serif',
        textIndent: '50px',
        fontStyle: 'italic'
    }
    return(
        <div>
            <h1 style={{backgroundColor: '#fff234', color: '#000fff', borderRadius: 12, padding: 12, textAlign: "center"}}>ESTUDOS SOBRE STATE</h1>
            <p style={paraEstilo}>Rosas são vermelhas, violetas são azuis!</p>
            <p className="paragrafo">Rosas são azuis, violetas são vermelhas!</p>

            <ComponentTeste></ComponentTeste>
           <TesteStage></TesteStage>
           <CaixaTeste></CaixaTeste>
        </div>
    )
}