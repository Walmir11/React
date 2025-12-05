import gitlogo from '../assets/gitlogo.png';
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { useState } from 'react';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="git logo" />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
