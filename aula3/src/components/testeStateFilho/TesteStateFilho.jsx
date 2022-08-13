import React, { useState } from 'react'

export default function TesteStateFilho(props) {

    return (
        <div>
            <h2>Valor de state no filho: {props.valorProps}</h2>
            <button onClick={()=> props.aumentarProps()}>Aumentar Filho</button>
        </div>
    )
}