import styled from 'styled-components'

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
      <img src={card.src} alt="card front" />
      <img src="/img/cover.png" onClick={handleClick} alt="cover" />
    </StyledCard>
  )
}

export default Card
