import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    Logo,
    UserPicture
} from "./styles";

function Header({autenticado}) {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo src={logo} alt="Logo da Dio"/>
                {autenticado ? (
                    <>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu href="#" >Live Code</Menu>
                    <Menu href="#" >Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/128555631?v=4"/>
                ) : (
                    <>
                        <MenuRight href="#" >Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  );
}

export {Header}