'use client'

import styled from 'styled-components'
import Card from 'components/card'
import useStore from 'store'
import { useEffect, useState } from 'react'

const BoardFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(3, 200px);
  gap: 5px;
`

const Board = () => {
  const cards = useStore((state) => state.cards)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <BoardFrame>
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}
    </BoardFrame>
  )
}

export default Board
