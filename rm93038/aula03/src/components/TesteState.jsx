import React, { useState } from "react";

export default function TesteState(){
    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5
    
    const aumentar = () => {
        // utilizando o useState
        setValorState(valorState + 5)
        valorState += 5

    }

    return(
        <>
            <h2>EXEMPLO STATE</h2>
            <div>
                <p>Valor do State = {valorState}</p>
                <p>Valor da Variavel = {valorVariavel}</p>
                <button onClick={() => aumentar()}>Aumentar</button>                
            </div>
        </>
    )

}