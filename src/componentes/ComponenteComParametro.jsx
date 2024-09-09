import React from "react";

export default (props) => {
    return (
        <div>
            <p>{props.nome}</p>
            <p>{props.idade}</p>
            <p>R$ {props.renda}</p>
        </div>
    )
}