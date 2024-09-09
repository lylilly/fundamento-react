import './Card.css'
import React from "react";

export default (props) => {

    const estilos = {
        backgroundColor: props.cor || '#FF0000'
    }

    return (
        <div className="Card" style={estilos}>
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">
                {props.children}
            </div>
        </div>
    )
}