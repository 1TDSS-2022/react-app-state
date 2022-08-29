import React , {useState} from "react";
import TesteStateFilho from "./testeStateFilho/TesteStateFilho";

export default function TesteState(){

    const [valorState, setvalorState] = useState (5)
    let valorVariavel = 5 
    const aumentar = () => {
        setvalorState(valorState + 5 )
        valorVariavel += 5
        
    }

    return(
        <>
            <h2>Exemplo State</h2>
            <div>
                <p>Valor do Satate = {valorState}</p>
                <p>Valor da Variavel = {valorVariavel}</p>
                <button onClick={() => aumentar()}>Aumentar</button>
            </div>
            <TesteStateFilho valorProps = {valorState} aumentarProps ={aumentar}
            />
        </>
        )
}