import React from "react";

export default (props) =>{
    return(
        <div>
            <p>Nome: {props.nome} </p>
            <p>Média: {props.media}</p>
            <p>Situação:  {props.media >= 6 ? 'Aprovado' :'Reprovado'}</p>
        </div>
    )
}