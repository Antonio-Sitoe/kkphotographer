import styled from 'styled-components';
import {
  BlackColor,
  GreyBlack,
  GreyColor,
  Purple,
  SuperBlackColor,
} from './Colors';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.6rem;
`;

export const HeaderStyle = styled.header`
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    span {
      max-width: 8rem;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        margin: 1rem;

        a {
          font-size: 1.5rem;
          padding: 1rem;
          border-radius: 0.3rem;
        }
      }
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }
    @media (max-width: 1050px) {
      justify-content: center;
      align-items: center;

      ul {
        margin: 0;

        li {
          margin: 1.5rem 1rem;
          a {
            background: ${GreyColor};
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    padding: 1rem 0;
  }
`;
export const Logo = styled.h1`
  font-size: 3rem;
  text-align: center;
`;
export const MainContainer = styled.div`
  margin: 4rem 0;
  display: grid;
  gap: 3rem;
  grid-template-columns: 30rem 1fr;

  div {
    img {
      border-radius: 1rem;
    }
  }

  p {
    color: ${GreyBlack};
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 1rem;

    div {
      img {
        display: none;
      }
    }
    @media (max-width: 500px) {
      p {
        text-align: center;
      }
    }
  }
`;

export const MainTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 0;

  &::after {
    content: '';
    width: 8rem;
    height: 1rem;
    display: block;
    background: ${Purple};
    border-radius: 1rem;
  }

  @media (max-width: 1050px) {
    font-size: 3rem;
    &::after {
      content: '';
      width: 3rem;
      height: 0.5rem;
    }
  }
  @media (max-width: 500px) {
    text-align: center;
    &::after {
      margin: 1rem auto;
    }
  }
`;

export const ExperienceStyle = styled.div`
  margin: 8rem 0;
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 3rem;

  h2 {
    text-transform: uppercase;
    margin: 0;
    font-size: 8rem;
    max-width: 300px;
    word-wrap: break-word;
    color: #cfcccc;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 3rem 0;

    h2 {
      font-size: 2rem;
      color: ${BlackColor};
    }
  }
`;
export const Galery = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  img {
    border-radius: 0.6rem;
  }
`;
export const FormStyle = styled.div`
  background: whitesmoke;
  padding: 2rem 0;
`;

export const FooterContainer = styled.div`
  padding: 2rem 0;
  background: ${SuperBlackColor};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  p {
    color: #e0e0e0;
    font-size: 2rem;
  }

  a {
    color: #e0e0e0;
  }
  a:hover {
    color: ${GreyBlack};
  }

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 1.5rem 0;
      color: ${GreyBlack};
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    p {
      font-size: 1.5rem;
    }

    ul {
      font-size: 1.5rem;

      li {
        flex-direction: column;
        a {
          margin-top: 0.5rem;
          word-break: break-all;
          text-align: center;
        }
      }
    }
  }
`;

export const CardContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Cardstyle = styled.div`
  flex: 1;
  background: ${BlackColor};
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
  height: 12rem;
  position: relative;

  h3 {
    color: whitesmoke;
    display: flex;

    &::before {
      content: '';
      width: 0.6rem;
      display: flex;
      align-items: center;

      height: 2rem;
      background: ${Purple};
      position: absolute;
      left: -0.6rem;
      border-radius: 0.1rem;
    }
  }
`;

export const ImagesStyle = styled.div`
  img {
    margin-bottom: 0;
  }
  span {
    margin-top: 0;
    padding: 0.6rem;
    text-align: center;
    background: ${BlackColor};
    display: block;
    color: whitesmoke;
    border-radius: .3rem;
  }
`;
