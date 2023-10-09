
import Banner from './template/Banner/index';
import CampoTexto from './template/CampoTexto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <CampoTexto label="Nome" placeholder="coloque seu Nome!"/>
        <CampoTexto label="Cargo" placeholder="coloque seu Cargo!"/>
        <CampoTexto label="Imagem" placeholder="coloque o endereço da sua imagem!"/>
        
      </header>
    </div>
  );
}

export default App;
