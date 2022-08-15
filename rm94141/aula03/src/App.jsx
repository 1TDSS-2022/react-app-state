import React from "react";
import "./App.css";
import TesteState from "./components/testeState/TesteState";

export default function App(){



    return (
        <div>
            <h1 style={{backgroundColor: '#fff234', color: '#0000ff', 
        textAlign: 'center'}}>ESTUDOS SOBRE STATE</h1>
            <div>
                <h2>COMPONENTE USANDO STATE</h2>
                <TesteState/>
            </div>
        </div>
    )
}