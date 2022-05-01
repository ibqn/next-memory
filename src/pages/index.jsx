import Game from 'components/game'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Memory game</title>
        <meta name="description" content="Memory game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>memory</div>
      <Game />
    </>
  )
}

export default Home
