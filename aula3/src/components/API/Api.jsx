import React, { useState } from "react"
import { useEffect } from "react"

export default function Api() {
    //component did mount -> o useEffect vai prestar atenção e vai executar tudo que está no bloco
    //did update

    const [repositorios, setRepositorios] = useState([])
    
       useEffect(async ()=>{
        carregaRepos()
    }, [])

    const carregaRepos = () => {
        const response = await fetch("https://api.github.com/users")
            const data = await response.json()

            setRepositorios(data)
    }

  //  useEffect(()=>{
   //     console.log("Renderizou!")
  //  }, [])

  //  useEffect(()=>{
  //      console.log("Renderizou o objeto!")
    //}, [repositorios])

    return(
        <div>
            <h2>Lista de usuarios do GitHUB</h2>
            <button onClick={()=> setRepositorios()}>alterar</button>
            <ul>
                {repositorios.map((obj, i,) =>
                    <li key={i}>{obj.login} </li>
                )}
            </ul>
        </div>
    )
}