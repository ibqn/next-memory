import Game from 'components/game'
import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Memory game</title>
        <meta name="description" content="Memory game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <header>
          <h1>memory</h1>
          <Game />
        </header>
      </Main>
    </>
  )
}

export default Home
