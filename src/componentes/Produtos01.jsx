import React from "react"
import DadosProdutos from './../date/dados_produtos'
export default () => {
    const listaProdutos = DadosProdutos.map((elem, i) => {
        return (
            //toda linha precisa de uma chave q não duplica
            <li key={i}>
                {elem.id} - {elem.descricao} - R$ {parseFloat(elem.valor).toFixed(2).replace('.', ',')}
            </li>
        )
    })


    return (

        <ul>
            {listaProdutos}
        </ul>
    )
}