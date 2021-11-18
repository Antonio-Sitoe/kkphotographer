import React from 'react';
import Experience from '../src/Components/Experience';
import Footer from '../src/Components/Footer';
import Formation from '../src/Components/Formation';
import Header from '../src/Components/Header';
import Main from '../src/Components/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Formation />
      <Footer />
    </>
  );
}
