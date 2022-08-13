import React, {useState} from "react";


export default () =>{

  
    const [valor, setValorCount] = useState(1)



    function cronometro(cronometro){
        while (cronometro){
            setInterval(() => {
                setValorCount(valor + 1) 
             }, 1000);
        }

    }

  




    return(
        <div>

            <h1>Start cronometro: {valor}</h1>
            <button onClick={() => cronometro(true)}>iniciar</button>
            <button onClick={() => cronometro(false)}>pausar</button>

        </div>
    
    )
}