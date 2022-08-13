import React from 'react'
import "./App.css"
import TesteState from './components/testestate/TesteState'

export default function App(){
    const paragEstilo = {
        color: "red",
        fontSize: "1.8em",
        fontFamily: "Arial",
        textIndent: "50px",
        fontStyle: "italic",
        fontWidth: "800",
    }
    
    return(
        <div>
            <h1 style={{backgroundColor:'#fff323', color: '#0fff12'}}>Estudos Sobre STATE</h1>
            <p style={paragEstilo}>Tudo pelo React é dinâmico</p>
            <p className='classe1'>Estamos no caminho certo!</p>
            <div>
                <h2>Componente usando State: </h2>
                <TesteState/>
            </div>
        </div>
    )
}