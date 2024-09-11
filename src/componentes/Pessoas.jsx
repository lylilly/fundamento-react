import React from "react"
import DadosPessoas from './../date/dados_pessoas'

//criando uma lista e posicionando os elementos 
export default () => {
    const listaPessoas = DadosPessoas.map((elem, i) => {
        return (
            <li key={i}>
                {elem.nome} - {elem.idade} - R$ {parseFloat(elem.renda).toFixed(2).replace('.', ',')}
            </li>
        )
    })


    return (
        <ul>
            {listaPessoas}
        </ul>
    )
}