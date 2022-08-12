import React from 'react'
import './App.css'

export default function App(){

    const paragEstilo = {
        color:'red',
        fontSize:'1.8em',
        fontFamily: 'Courrier New',
        textIndent:'50px',
        fontStyle: 'italic'

    }
    return(
        <div>
            <h1 style={{backgroundColor:'#fff234', color:'#0000ff', textAlign: 'center'}}>ESTUDOS SOBRE STATE</h1>
            <p style={{paragEstilo}}>Rosas são Rosas</p>
            <p className='classe1'>Meu conteúdo de classe</p>
        </div>
    )
}