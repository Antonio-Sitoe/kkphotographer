import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BlackColor, GreyBlack } from '../src/Styles/Colors';
import '../src/Styles/index.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.5rem;
    
  }

  ul {
    list-style: none;
  }

  a {
    color: ${BlackColor};
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  p {
    color: ${GreyBlack};
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
