import React from 'react';
import Image from 'next/image';
import ProfilePic from '../Assets/image.jpg';
import { Container, MainContainer, MainTitle } from '../Styles/Styles';

const Main = () => {
  return (
    <Container>
      <MainContainer>
        <div>
          <Image src={ProfilePic} alt='profile pic' />
        </div>
        <div>
          <MainTitle>Fotografo de profissão, Apaixonado pela Imagem.</MainTitle>
          <p>Localizado na Cidade de Vilankulos, Inhambane, Mz 🏖</p>
        </div>
      </MainContainer>
    </Container>
  );
};

export default Main;
