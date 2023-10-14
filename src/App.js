
import { useState } from 'react';
import Banner from './template/Banner/index';
import Formulario from './template/Formulario';
import Roles from './template/Roles';



function App() {

  
  const lanes1 = [
    {
      lane:'Top',
      corPrimaria: '#57C278',
      corSecundaria: '#09F7E9'
    },
    {
      lane:'Jungle',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      lane:'Midlane',
      corPrimaria: '#fde7e8',
      corSecundaria: '#ed6b69'
    },
    {
      lane:'ADCarry',
      corPrimaria: '#D8BFD8',
      corSecundaria: '#B0E0E6'
    },
    {
      lane:'Support',
      corPrimaria: '#4B0082',
      corSecundaria: '#FF00FF'
    }
  ]

  const [jogadores, SetJogadores] =useState([])
  
  const novoJogadorAdicionado = (jogador) => {
    
    SetJogadores([...jogadores, jogador])

  }
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Banner />
        <Formulario lanes={lanes1.map(lane => lane.lane)} aoJogadorCadastrado={jogador => novoJogadorAdicionado(jogador)}/>
      
        {lanes1.map(lane => <Roles 
        key={lane.lane} 
        lane={lane.lane} 
        corPrimaria={lane.corPrimaria} 
        corSecundaria={lane.corSecundaria}
        jogadores={jogadores.filter(filtro => filtro.lanes === lane.lane)}

        />)}
        
      </header>
    </div>
  );
}

export default App;
