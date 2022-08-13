import React, {useState} from "react";
import { Fragment } from "react";
import TesteStateFilho from "./testeStateFilho/TesteStateFilho";

export default function TesteState(){

    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    const aumentar = ()=>{
        //Utilizando o useState
        setValorState(valorState + 5)
        valorVariavel += 5
    }

    return(
        <>
            <h1>Exemplo State</h1>
            <div>
                <p>Valor do teste = {valorState}</p>
                <p>Valor da variável = {valorVariavel}</p>
                <button onClick={() => aumentar()}>AUMENTAR</button>
            </div>
            <TesteStateFilho valorProps={valorState} aumentarProps={aumentar}/>
        </>
    )
}