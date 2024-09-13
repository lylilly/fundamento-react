import React from "react";

export default (props) => {

    const gerarIdade = () => parseInt(Math.random() * (100 - 1) * 1)
    const gerarAtivo = () => Math.random() < 0.5
    return (
        //elemento filho vai passar dados para uma função do elem pai
        //chamando uma função que ta no componente pai
        <>
            <h2> Dados do Pai</h2>
            <button onClick={() => props.chamaPai('Lilly linda',gerarIdade,gerarAtivo)}>Exibir Dados</button>
        </>
    )
}