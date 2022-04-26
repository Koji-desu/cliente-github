import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/NavBar';
import BemVindo from './components/BemVindo';

function App() {
  const caminhos = [
    {
      id: 1,
      caminho: '/',
      titulo: 'Página inicial'
    },
    {
      id: 2,
      caminho: '/perfil',
      titulo: 'Perfil pessoal'
    },
    {
      id: 3,
      caminho: '/repositorios',
      titulo: 'Repositórios'
    },
    {
      id: 4,
      caminho: '/busca',
      titulo: 'Busca'
    }
    
  ]
  return (
    <div >
      <NavBar menu={caminhos} />
      <BemVindo />
    </div>
  );
}

export default App;
