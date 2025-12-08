import gitlogo from '../assets/gitlogo.png';
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { useState } from 'react';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`);
  
      if (data.id) {
  
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
        alert('Repositório já adicionado');
      }
    } catch (error) {
      alert('Repositório não encontrado ou erro na busca');
    }
  }

  const handleRemoveRepo = (repoId) => {
    setRepos(prev => prev.filter(repo => repo.id !== repoId));
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="git logo" />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
