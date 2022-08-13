import React, { useState } from 'react'

export default function TesteStateFilho(props) {
    return (
        <div>
            <h2>Valor do state no filho: {props.valorProps}</h2>
            <button onClick={() => props.aumentarProps()}>AUMENTAR-NO-FILHO</button>
        </div>
    )
}