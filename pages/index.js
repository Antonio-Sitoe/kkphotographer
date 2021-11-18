import React from 'react';
import Experience from '../src/Components/Experience';
import Footer from '../src/Components/Footer';
import Formation from '../src/Components/Formation';
import Header from '../src/Components/Header';
import Main from '../src/Components/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>kkphotographer Portifolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <Main />
      <Experience />
      <Formation />
      <Footer />
    </>
  );
}
