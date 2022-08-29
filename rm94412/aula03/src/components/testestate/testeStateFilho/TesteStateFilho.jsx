import React, {useState} from 'react'

export default function TesteStateFilho(props){
    return(
        <div>
            <h2> Valor de Userer State Filho : {props.valorProps}</h2>
            <button onClick={() => props.aumentarProps()}>Aumentar-com-Filho</button>
        </div>
    )
}