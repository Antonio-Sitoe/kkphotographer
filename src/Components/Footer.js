import React from 'react';
import Link from 'next/link';
import { Container, FooterContainer, FooterContent } from '../Styles/Styles';

const Footer = () => {
  return (
    <FooterContainer id="contato">
      <Container>
        <FooterContent>
          <p>
            Estou disponível para novos projetos no momento. Entre em contato
            comigo e marcamos uma conversa 👋
          </p>

          <ul>
            <li>
              <span>Email</span>
              <Link href=''>
                <a>beneditomanhique.m@gmail.com</a>
              </Link>
            </li>
            <li>
              <span>Telefone</span>
              <Link href=''>
                <a>+258 843607956 / +258 86 735 9410</a>
              </Link>
            </li>
            <li>
              <span>instagram</span>
              <Link href='https://www.instagram.com/kkphotographer258/'>
                <a>@kkphotographer258</a>
              </Link>
            </li>
            <li>
              <span>Telefone</span>
              <Link href=''>
                <a>+258 843607956 / +258 86 735 9410</a>
              </Link>
            </li>
            <li>
              <span>Whatsapp</span>
              <Link href=''>
                <a>+258 843607956</a>
              </Link>
            </li>
          </ul>
        </FooterContent>
        <p>Todos os direitos reservados</p>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
