import React,{useState} from "react";


export default function TesteStateFilho(props){

    return(
        <div>
            <h2>Valor de State no filho:{props}</h2>
            <button onClick={()=>props.aumentarProps()}>Aumentar</button>
        </div>
    )
}