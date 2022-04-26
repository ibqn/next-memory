import Board from 'components/board'

const Game = () => {
  const cards = Array.from({ length: 12 }, (_, index) => index)

  return (
    <main>
      <div>game</div>
      <Board cards={cards} />
    </main>
  )
}

export default Game
