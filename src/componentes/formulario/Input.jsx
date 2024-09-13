import React, { useState } from "react";
export default props => {
    const [valor, setValor] = useState('')
    return (
        <>

            <input
                type={props.tipo}
                name={props.nome}
                id={props.nome} 
                className={props.classe}
                placeholder={props.etiqueta}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />

            <p> {valor}</p>
        </>
    )
}