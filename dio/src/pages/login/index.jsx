import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Column, ErrorText, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles';

const schema = yup
  .object({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().min(3, 'Minimo 3 caracteres').required('Senha obrigatória'),
  })
  .required()


const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  console.log(errors, isValid)

  const onSubmit = (data) => console.log(data)

  const handleClickSignIn = () => {
    navigate('/feed');
  }

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input control={control} name="email" placeholder="E-mail" leftIcon={<MdEmail />} errorMessage={errors.email?.message}/>
              <Input control={control} name="password"placeholder='Senha' type='password' leftIcon={<MdLock />} errorMessage={errors.password?.message} />
              <Button title='Entrar' variant='secondary' onClick={handleClickSignIn} type="submit"/>
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