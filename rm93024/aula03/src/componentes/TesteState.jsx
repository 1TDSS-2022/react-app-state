import React, { useState } from 'react'
import TesteStateFilho from './TesteStateFilho'

export default function() {
	
	const [valorState,setvalorState] = useState(5)
	let valorVariavel = 5

	const aumentar = ()=>{
		//Utilizando o useState
		setvalorState(valorState + 5)
		valorVariavel += 5
		console.log('Valor da variável: ' + valorVariavel)
	}

	return(
		<>
			<h2>EXEMPLO STATE</h2>
			<div>
				<p>Valor do state = {valorState}</p>
				<p>Vlor da variável = {valorVariavel}</p>
				<button onClick={()=> aumentar()}>AUMENTAR</button>
			</div>
			<TesteStateFilho
				valorProps={valorState}
				aumentarProps={aumentar}
			/>
		</>
	)
}