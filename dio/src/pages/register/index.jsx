import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Column, Title, Wrapper, TitleLogin, SubtitleLogin } from './styles';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().min(3, 'Minimo 3 caracteres').required('Senha obrigatória'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
      .required('Confirmar senha obrigatória'),
  })
  .required()

const Register = () => {
    const {
    control,
    handleSubmit,
    formState: { errors},
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

    const onSubmit = async formData => {
        navigator('/login');

    };

  return (<>
    <Header />
    <Container >
        <Column>
            <Title>
                A plataforma para você aprender completa, dominar novas habilidades e construir
                o seu futuro global agora!
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu Cadastro</TitleLogin>
                <SubtitleLogin>Informe seus dados para entrar na plataforma</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="email" placeholder="E-mail" name="email" control={control} />
                    <Input type="password" placeholder="Senha" name="password" control={control} />
                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" control={control} />
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
            </Wrapper>
        </Column>
    </Container>
  </>
  );
}

export { Register };