import React, { useState } from 'react'
import TesteStateFilho from '../testeStateFilho/TesteStateFilho'

export default function TesteState() {

    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    const aumentar = ()=> {
        //Utilizando o useState
        setValorState(valorState + 5)
        valorVariavel += 5
        console.log("Valor da variavel: " + valorVariavel)
    }

    return (
        <div>
            TesteState

            <p>Valor do state = {valorState}</p>
            <p>Valor Variavel = {valorVariavel}</p>
            <button onClick={() => aumentar()}>Aumentar</button>
            <TesteStateFilho 
            valorProps = {valorState}
            aumentarProps={aumentar}/>
        </div>
    )
}