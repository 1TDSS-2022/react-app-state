import React, {useState} from "react";

export default function TesteStateFilho(props){


    return(

        <div>
            <h2>
                Valor de state no filho: {props.valorState}
            </h2>
            <h2>
                Valor do valor no filho: {props.valorVariavel}
            </h2>

            <button onClick={() => {props.aumentar()}}>Aumentar</button>

        </div>
    )
}