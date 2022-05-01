import create from 'zustand'
import shuffle from 'lodash/shuffle'

import helmet from 'images/helmet.png'
import potion from 'images/potion.png'
import ring from 'images/ring.png'
import scroll from 'images/scroll.png'
import shield from 'images/shield.png'
import sword from 'images/sword.png'

const images = [helmet, potion, ring, scroll, shield, sword]

const getImage = (index) => images[index]

const cardsPool = Array.from({ length: 6 }, (_, index) => ({
  index: index + 1,
  flipped: false,
  disabled: false,
  src: getImage(index),
}))

const shuffleCards = () => shuffle([...cardsPool, ...cardsPool])

const useStore = create((set) => ({
  cards: shuffleCards(),
  flipCard: (index) =>
    set((state) => ({
      cards: state.cards.map((card, idx) => (idx === index ? { ...card, flipped: !card.flipped } : card)),
    })),
  resetCards: () => set({ cards: shuffleCards() }),
}))

export default useStore
