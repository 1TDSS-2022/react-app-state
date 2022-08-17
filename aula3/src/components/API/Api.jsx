import React, { useState } from "react"
import { useEffect } from "react"

export default function Api() {
    //component did mount -> o useEffect vai prestar atenção e vai executar tudo que está no bloco
    //did update

    const [repositorios, setRepositorios] = useState([])
    
    useEffect(()=>{
        console.log("Renderizou!")
    }, [])

    useEffect(()=>{
        console.log("Renderizou o objeto!")
    }, [repositorios])

    return(
        <div>
            <h2>Lista de usuarios do GitHUB</h2>
            <button onClick={()=> setRepositorios()}>alterar</button>
        </div>
    )
}