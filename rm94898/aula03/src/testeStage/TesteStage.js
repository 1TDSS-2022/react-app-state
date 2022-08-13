import React, {useState} from "react";
import TesteStateFilho from "../testeStateFilho/TesteStateFilho";

export default () => {
    const [valorState, setValorState]= useState(5)
    let valorVariavel = 5

    function aumentar() {
        setValorState(valorState + 5)
        valorVariavel += 5
      
        console.log(valorVariavel)
    }

    return(
        <div>

            <p>valorState: {valorState}</p>
            <p>valorVariavel: {valorVariavel}</p>
            <button onClick={() => aumentar()}>Aumentar</button>
            <TesteStateFilho
            valorState={valorState}
            valorVariavel={valorVariavel}
            aumentar={aumentar}
            ></TesteStateFilho>
        </div>
    )
}