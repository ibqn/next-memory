import Board from 'components/board'
import shuffle from 'lodash/shuffle'

const cardsPool = Array.from({ length: 6 }, (_, index) => index + 1)

const Game = () => {
  const cards = shuffle([...cardsPool, ...cardsPool])

  return (
    <main>
      <div>game</div>
      <Board cards={cards} />
    </main>
  )
}

export default Game
