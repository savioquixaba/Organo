
import Banner from './template/Banner/index';
import CampoTexto from './template/CampoTexto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <CampoTexto label="Nome"/>
        <CampoTexto label="Cargo"/>
        <CampoTexto label="Imagem"/>
        
      </header>
    </div>
  );
}

export default App;
