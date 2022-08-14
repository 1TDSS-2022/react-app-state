import React,  {useState} from 'react'
import TesteStateFilho from '../testeStateFilho/TesteStateFilho'

export default function TesteState() {

    const [valorState, setvalorState] = useState(5)
    let valorVariavel = 5

    const aumentar = ()=>{
        //Utilizando o useState
        setvalorState(valorState + 5)
        valorVariavel += 5
    }

    return(
        <>
        <h2>Exemplo State</h2> 
        <div>
           <p>Valor do state = {valorState}</p>
           <p>Valor da variavel = {valorVariavel}</p>
           <button onClick={()=> aumentar()}>AUMENTAR</button>
        </div>
        <TesteStateFilho valorProps={valorState} aumentarProps={aumentar}/>
        </>
    )
}