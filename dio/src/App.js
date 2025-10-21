import Input from './components/input';
import Button from './components/button';
import { Container, Content } from './styles';

const App = () => {
  return (
    <Container>
      <Content>
        Ola Mundo
        <Input />
        <Button />
      </Content>
    </Container>
  );
}

export default App;
