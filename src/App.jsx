import './App.css'

import NumeroAleatorio from './componentes/NumeroAleatorio'
import SituacaoAluno from './componentes/SituacaoAluno'
import Card from './componentes/Card'
import ComponenteComParametro from './componentes/ComponenteComParametro'
import SegundoComponente from './componentes/SegundoComponente'
import Primeiro from './componentes/Primeiro'
import Pessoas from './componentes/Pessoas'
import Produtos01 from './componentes/Produtos01'
import Input from './componentes/formulario/Input'
import ComunicacaoDiretaPai from './componentes/ComunicacaoDiretaPai'
import ComunicacaoIndiretaPai from './componentes/ComunicacaoIndiretaPai'


function App() {

  return (
    <>
      <Card titulo='Input Formulário' cor='#FFC0CB'>
        <Input
          tipo='number'
          nome='valorUnitario'
          classe='input'
          etiqueta='informe o valor Unitário'
        ></Input>

      </Card>
      <Card titulo='Comunicação indireta' cor='#D8BFD8'>
        <ComunicacaoIndiretaPai></ComunicacaoIndiretaPai>
      </Card>
      <Card titulo="Comunicação Direta" cor="#4682B4">
        <ComunicacaoDiretaPai nome='Lilly' idade={17} ativo={true}></ComunicacaoDiretaPai>
      </Card>

      <Card titulo='Lista Produtos' cor='#6A5ACD'>
        <Produtos01></Produtos01>
      </Card>

      <Card titulo='Listas Pessoas' cor='#B0C4DE'>
        <Pessoas />
      </Card>

      <Card titulo='Números aleatório' cor='#000080'>
        <NumeroAleatorio min={1} max={60} />
        <NumeroAleatorio min={1} max={60} />
        <NumeroAleatorio min={1} max={60} />
        <NumeroAleatorio min={1} max={60} />
        <NumeroAleatorio min={1} max={60} />
        <NumeroAleatorio min={1} max={60} />
      </Card>

      <Card titulo='Situação do Aluno' cor='#708090'>
        <SituacaoAluno nome='Josefina Gomes' media={10} />
        <SituacaoAluno nome='Astrogildo' media={4} />
      </Card>

      <Card titulo='Componente com Parâmetro' cor='#FFB6C1'>
        <ComponenteComParametro nome='Lilly' idade={48} renda={500.00} />
      </Card>

      <Card titulo='Segundo Componente' cor='#87CEFA'>
        <SegundoComponente></SegundoComponente>
      </Card>

      <Card titulo='Primeiro Componente' cor='#4682B4'>
        <Primeiro />
      </Card>




    </>
  )
}

export default App
