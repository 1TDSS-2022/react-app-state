import React, { useState } from 'react';

//TesteStateFilho Não é função, é COMPONENTE
export default function TesteStateFilho(props) {

    return (
        <div>
            <h2>Valor de State no Filho: {props.valorProps}</h2>
            <button onClick={() => {props.aumentarProps()}}>AUMENTAR-NO-FILHO</button>
        </div>
    )
}