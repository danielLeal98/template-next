import React from 'react'
import Head from 'next/head'
import ImageSvg from '../assets/flamengo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>
      <ImageSvg />
      <h1> ReactJs + Next.js</h1>
      <h2> Uma vez Flamengo sempre Flamengo!!</h2>
    </Container>
  )
}

export default Home
