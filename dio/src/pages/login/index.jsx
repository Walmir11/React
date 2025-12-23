import { MdEmail, MdLock } from 'react-icons/md';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles';


const Login = () => {
  return (<>
        <Header />
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Column>
            <Title>
              A plataforma para você aprender completa, dominar novas habilidades e construir
              o seu futuro global agora!
            </Title>
          </Column>
          <Column>
          <Wrapper>
            <TitleLogin>
              Faça seu cadastro
            </TitleLogin>
            <SubtitleLogin>
              Faça seu login e make the change._
            </SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input placeholder='Senha' type='password' leftIcon={<MdLock />} />
              <Button title='Entrar' variant='secondary'/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
          </Column>
        </Container>
  </>
    );
}

export { Login };