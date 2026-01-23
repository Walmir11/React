import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Column, Title, Wrapper, TitleLogin, SubtitleLogin } from './styles';
import { useForm } from "react-hook-form";

const Register = () => {
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
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
                <TitleLogin>Faça seu login</TitleLogin>
                <SubtitleLogin>Informe seus dados para entrar na plataforma</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" name="email" control={control} />
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