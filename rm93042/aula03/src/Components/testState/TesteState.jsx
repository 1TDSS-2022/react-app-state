import React,{useState} from "react";
import TesteStateFilho from "../testStateFilho/TesteStateFilho";



export default function TesteState(){

    const[valorState,setvalorState]=useState(5)
    let valorVariavel=5

    const aumentar=()=>{
        setvalorState(valorState+5)
        valorVariavel+=5
    }


    return (
        <>
        <h2>Exemplo State</h2>
        <div>
            <p>Valor do State={valorState}</p>
            <p>VAlor da variavel={valorVariavel}</p>
            <button onClick={()=>aumentar()}>Aumentar</button>
            <TesteStateFilho valorProps={valorState} aumentarProps={aumentar}/>
        </div>
        </>
        
    )
}