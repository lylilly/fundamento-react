import React, {useState}from "react";

export default (props) => {
    return (
        <>
            <div> <strong>{props.nome}</strong></div >
            <div>{props.idade}</div>
            <div>{props.ativo ? 'Ativo' : 'Inativo'}</div>

        </>
    )
}