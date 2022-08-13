import React, { useState } from 'react'

export default function TesteState(){

    const [valorState, setvalorState] = useState(5)
    let valorVariavel = 5
    
    const aumentar = () => {
        setvalorState(valorState + 5)
        valorVariavel += 5
    }

    return(
        <div>
            <h2>Exemplo State</h2>
            <div>
                <p>Valor do state: {valorState}</p>
                <p>Valor da variavel: {valorVariavel}</p>
                <button onClick={() => aumentar()}>AUMENTAR</button>
            </div>
        </div>
    )

}