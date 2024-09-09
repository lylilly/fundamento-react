import './App.css'

import NumeroAleatorio from './componentes/NumeroAleatorio'
import SituacaoAluno from './componentes/SituacaoAluno'
import Card from './componentes/Card'
import ComponenteComParametro from './componentes/ComponenteComParametro'
import SegundoComponente from './componentes/SegundoComponente'
import Primeiro from './componentes/Primeiro'

function App() {

  return (
    <>

      <Card titulo='Números aleatório' cor='#548B54'>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
        <NumeroAleatorio min={1} max={60}/>
      </Card>

      <Card titulo='Situação do Aluno' cor='#EE9A00'>
        <SituacaoAluno nome='Josefina Gomes' media={10} />
        <SituacaoAluno nome='Astrogildo' media={4} />
      </Card>

      <Card titulo='Componente com Parâmetro'>
        <ComponenteComParametro nome='Maria Flor' idade={48} renda={500.00} />
      </Card>

      <Card titulo='Segundo Componente' cor='#D2691E'>
        <SegundoComponente></SegundoComponente>
      </Card>

      <Card titulo='Primeiro Componente' cor='#4682B4'>
        <Primeiro />
      </Card>




    </>
  )
}

export default App
