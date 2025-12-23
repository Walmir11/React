import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Container, TextContent, Title, TitleHighlight } from './styles';
import banner from '../../assets/Banner.jpg';


const Home = () => {
  return (<>
        <Header />
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Title>
               
              <TitleHighlight>
                Implemente
                <br/>
              </TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e 
              encare os desafios para se tornar um profissional completo.
            </TextContent>
            <Button title="Começar agora" variant='secondary' onClick={() => null} />
          </div>
          <div>
            <img src={banner} alt="Imagem Banner" style={{ width: '1000px' }}/>
            
          </div>
        </Container>
  </>
    );
}

export { Home };