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
    Logo
} from "./styles";

function Header() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Logo src={logo} alt="Logo da Dio"/>
                <BuscarInputContainer>
                    <Input placeholder="Buscar..."/>
                </BuscarInputContainer>
                <Menu href="#" >Live Code</Menu>
                <Menu href="#" >Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#" >Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  );
}

export {Header}