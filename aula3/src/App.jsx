import React from "react"
import "./App.css"

export default function App() {

    const paragEstilo = {
        color: 'red',
        fontSize: '1.8em',
        fontFamily: 'Courrier New',
        tesxtIndent: '50px',
        fontStyle: 'italic',
    }

    return (
        <>
        <h1 style={{
            backgroundColor: "#fff234",
            color: '#0000ff', textAlign: "center"
         }}>Estudos sobre STATE</h1>
         <p style={paragEstilo}>Rosas são vermelhas, violetas são azuis!</p>
         <p className="pp">Meu conteúdo de classe</p>
        </>
    )
}