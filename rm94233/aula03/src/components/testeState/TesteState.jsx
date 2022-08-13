import React, { useState } from 'react'


export default function TesteState(){

    const [valorState, setvalorState] = useState(second)
    let valorVariavel = 5

    const aumentar = ()=>{
        //Utilizando o useState
        setvalorState(valorState + 5)
        valorVariavel += 5
        console.log("VALOR DA VARIAVEL:" + valorVariavel)
    }

    return (
        <>
        
            <h2>EXEMPLO STATE</h2>
            <div>
                <p>Valor do state = {valorState}</p>
                <p>valor da variével = {valorVariavel}</p>
                <button onClick={() => aumentar()}>AUMENTAR</button>
            </div>
            <TesteStateFilho
            valorProps={valorState} 
            aumentarProps={aumentar}
            />
        </>
    )
}