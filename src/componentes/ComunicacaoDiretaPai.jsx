import React from "react";
import ComunicacaoDiretaFilho from "./ComunicacaoDiretaFilho";

export default (props) => {
    return (
        <>
            <ComunicacaoDiretaFilho nome={props.nome} idade={props.idade} ativo={props.ativo}></ComunicacaoDiretaFilho>
        </>
    )
}