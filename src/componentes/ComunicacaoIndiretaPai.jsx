import React, { useState } from "react";
import ComunicacaoIndiretaFilho from "./ComunicacaoIndiretaFilho";

export default (props) => {
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    const [ativo, setAtivo] = useState()

    function mostrarDados(nomeParam, idadeParam, AtivoParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setAtivo(AtivoParam)

        console.log('Componente Pai Indireto', nomeParam, idadeParam, AtivoParam)

    }
    return (
        <>
            <p> Indireta Pai</p>
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{ativo ? 'Ativo' : 'Inativo'}</p>
            <ComunicacaoIndiretaFilho chamaPai={mostrarDados}></ComunicacaoIndiretaFilho>


        </>
    )
}