import {
  CardContainer,
  Container,
  ExperienceStyle,
  FormStyle,
} from '../Styles/Styles';
import Cards from './Cards';
const Formation = () => {
  return (
    <FormStyle id="sobre">
      <Container>
        <ExperienceStyle>
          <h2>Sobre mim</h2>
          <div>
            <p>
              Sou Benedito Manhique, o CEO (fundador da agencia kkphotographer)
              moro na cidade de vilankulos, conclui o ensino Médio em 2021,
              trabalho como fotografo profissional a 4 anos, comecei como um
              hobby a 4 anos, hoje faço o trabalho por arte, e amor as imagens. Transformamos vidas através das nossas imagens e dos diversos servicos que fazemos os principais abragentes sao:
            </p>
            <CardContainer>
              <Cards title='Fotografia' />
              <Cards title='Video' />
              <Cards title='Publicidade e Marketing' />
            </CardContainer>
          </div>
        </ExperienceStyle>
      </Container>
    </FormStyle>
  );
};

export default Formation;
