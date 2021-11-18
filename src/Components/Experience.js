import React from 'react';
import Image from 'next/image';
import Couple from '../Assets/couple.jpg';
import Couples from '../Assets/couples.jpg';
import Woman from '../Assets/woman.jpg';
import Social from '../Assets/social.jpg';
import paisa from '../Assets/pasagem.jpg';
import womanOn from '../Assets/paisagen.jpg';
import { Container, ExperienceStyle, Galery } from '../Styles/Styles';
import Images from './Images';

const Experience = () => {
  return (
    <Container>
      <ExperienceStyle id="experiencia">
        <div>
          <h2>Experiencia</h2>
        </div>
        <div>
          <p>
            A fotografia é uma arte, trazer alegria e poder registar momentos
            marcantes na vida dos nossos clientes é um prazer, ela é uma das
            poucas coisas que tem poder sobre o tempo: ela paralisa, por esta
            razão o nosso objetivo é trazer os melhores serviços para você!
          </p>
          <Galery>
            <Images src={Couples} titles="Noivados" />
            <Images src={Social} titles="Festas Familiares" />
            <Images src={Couple} titles="Eventos Socias" />
            <Images src={Woman} titles="Fotos Livres" />
            <Images src={womanOn} titles="Modelos" />
            <Images src={paisa} titles="Paisagens" />
          </Galery>
        </div>
      </ExperienceStyle>
    </Container>
  );
};

export default Experience;
