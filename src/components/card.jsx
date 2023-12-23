'use client'

import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

import cover from 'images/cover.png'
import { useStore } from 'store'

const CardFrame = styled.div`
  position: relative;

  img {
    display: block;
    border: 2px solid #cfff;
    border-radius: 6px;
  }
`

const Front = styled.div`
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;

  ${({ $flipped }) =>
    $flipped &&
    css`
      transform: rotateY(0deg);
      transition-delay: 0.2s;
    `}
`

const Back = styled.div`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;

  ${({ $flipped }) =>
    $flipped &&
    css`
      transform: rotateY(90deg);
      transition-delay: 0s;
    `}
`

const Card = ({ card, index }) => {
  const flipCard = useStore((state) => state.flipCard)
  const stopFlip = useStore((state) => state.stopFlip)
  const flipOver = useStore((state) => state.flipOver)

  const handleClick = () => {
    if (stopFlip || card.disabled) {
      return
    }
    console.log('clicked', card.index, 'with index', index)
    flipCard(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => stopFlip && flipOver(), 2 * 1000)

    return () => clearTimeout(timer)
  }, [stopFlip, flipOver])

  return (
    <CardFrame onClick={handleClick}>
      <Front $flipped={card.flipped}>
        <Image src={card.src} width={200} height={200} alt="card front" />
      </Front>
      <Back $flipped={card.flipped}>
        <Image src={cover} width={200} height={200} alt="cover" priority />
      </Back>
    </CardFrame>
  )
}

export default Card
