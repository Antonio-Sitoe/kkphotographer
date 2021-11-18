import React from 'react';
import { Container, HeaderStyle, Logo } from '../Styles/Styles';
import LogoUrl from '../Assets/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <nav>
          <span>
            <Image src={LogoUrl} alt='logo' />
          </span>
          <ul>
            <li>
              <a href='#experiencia'>Experiencia</a>
            </li>
            <li>
              <a href='#sobre'>Sobre mim</a>
            </li>
            <li>
              <a href='#contato'>Contato</a>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
