import { Header } from '../../components/Header';
import background from '../../assets/background.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} alt='background app' className='background' />

      </div>
    </div>
  );
}

export default App;
