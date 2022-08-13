import React, {useState} from 'react'
import TesteStateFilho from '../TesteStateFilho/TesteStateFilho'

export default function Teste(){
    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    const aumentar = () => {
        setvalorState(valorState + 5)
        valorVariavel += 5
        console.log(valorVariavel)
    }

    return(
        <>
            <h2>EXEMPLO STATE</h2>
            <div>
                <p>Valor do state = {valorState}</p>
                <p>Valor da variável = {valorVariavel}</p>
                <button onClick={()=> aumentar()}>AUMENTAR</button>
            </div>
            <TesteStateFilho
                
            />
        </>
    )

}