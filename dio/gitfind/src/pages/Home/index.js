import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} alt='background app' className='background' />
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
            <div className='perfil'>
              <img src='https://avatars.githubusercontent.com/u/128555631?v=4' className='profile' alt='profile' />
              <div>
                <h3>Walmir Dev</h3>
                <span>@walmirdev</span>
                <p>Descrição do perfil</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
