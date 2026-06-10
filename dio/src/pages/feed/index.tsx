import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/Userinfo';
import { Container, Column, Title, TitleHighlight } from './styles';
import banner from '../../assets/Banner.jpg';


const Feed = () => {
  return (<>
        <Header />
        <Container >
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighlight> # RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={23} nome="Walmir Neto" image="https://avatars.githubusercontent.com/u/128555631?v=4"/>
            <UserInfo percentual={70} nome="Walmir Neto" image="https://avatars.githubusercontent.com/u/128555631?v=4"/>
            <UserInfo percentual={10} nome="Walmir Neto" image="https://avatars.githubusercontent.com/u/128555631?v=4"/>
            <UserInfo percentual={29} nome="Walmir Neto" image="https://avatars.githubusercontent.com/u/128555631?v=4"/>
            <UserInfo percentual={90} nome="Walmir Neto" image="https://avatars.githubusercontent.com/u/128555631?v=4"/>
          </Column>
        </Container>
  </>
    );
}

export { Feed };