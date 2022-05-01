import styled from 'styled-components'
import Card from 'components/card'
import useStore from 'store'

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
`

const Board = () => {
  const cards = useStore((state) => state.cards)

  return (
    <StyledBoard>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </StyledBoard>
  )
}

export default Board
