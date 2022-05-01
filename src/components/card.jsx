import styled from 'styled-components'
import Image from 'next/image'

import cover from 'images/cover.png'

const StyledCard = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
    border: 2px solid #cfff;
    border-radius: 6px;
  }

  .front {
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
  }
  .flipped .front {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }

  .back {
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
  }

  .flipped .back {
    transform: rotateY(90deg);
    transition-delay: 0s;
  }
`

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <StyledCard flipped={flipped}>
      {/* <Image src={card.src} width={100} height={100} alt="card front" /> */}
      <Image src={cover} width={100} height={100} onClick={handleClick} alt="cover" />
    </StyledCard>
  )
}

export default Card
