import styled, { css } from 'styled-components'
import Image from 'next/image'

import cover from 'images/cover.png'
import useStore from 'store'

const StyledCard = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
    border: 2px solid #cfff;
    border-radius: 6px;
  }
`

const Front = styled.div`
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(0deg);
      transition-delay: 0.2s;
    `}
`

const Back = styled.div`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;

  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotateY(90deg);
      transition-delay: 0s;
    `}
`

const Card = ({ card, index }) => {
  const flipCard = useStore((state) => state.flipCard)
  const handleClick = () => {
    console.log('clicked', card.index, 'with index', index)
    flipCard(index)
  }

  return (
    <StyledCard onClick={handleClick}>
      <Front flipped={card.flipped}>
        <Image src={card.src} width={200} height={200} alt="card front" />
      </Front>
      <Back flipped={card.flipped}>
        <Image src={cover} width={200} height={200} alt="cover" />
      </Back>
    </StyledCard>
  )
}

export default Card
