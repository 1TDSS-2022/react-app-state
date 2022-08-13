import React, { useState }  from 'react';

export default function testeStateFilho(props){
    return(
        <div>
            <h2>Valor de State no Filho:{props.valorProps}</h2>
            <button onClick={()=> props.aumentarProps()}>AUMENTAR-NO-FILHO</button>
        </div>
    )
}
