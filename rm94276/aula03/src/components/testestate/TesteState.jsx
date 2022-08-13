import React, { useState} from "react"
import TesteStateFilho from "../testestatefilho/TesteStateFilho"

export default function TesteState(){
    const [valorState, setvalorState] = useState(5)
    let valorVariavel = 5

    const aumentar = () =>{
        setvalorState(valorState + 5)
        valorVariavel += 5
    }
    
    return(
        <div>
            <h2>Teste State</h2>
            <p>Valor do state = {valorState}</p>
            <p>Valor variável = {valorVariavel}</p>
            <button onClick={()=> aumentar()}>Acrescentar</button>
            <TesteStateFilho
                valorProps={valorState}
                aumentarProps={aumentar}
            />
        </div>
    )
}