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

function App() {

  return (
    <>
    <Card titulo='Input Formulário' cor='#FFC0CB'>

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
        <ComponenteComParametro nome='Maria Flor' idade={48} renda={500.00} />
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
