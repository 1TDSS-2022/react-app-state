import React, {useState} from "react";


export default () => {

    const [aluno, setALuno] = useState("Luan");

    return(
        <div>

            <p className="cTeste">Aluno: {aluno}</p>
            <button onClick={() => setALuno('Luan Reis')}>Mudar</button>

        </div>
    )
}

