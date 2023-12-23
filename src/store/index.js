import { create } from 'zustand'
import shuffle from 'lodash.shuffle'

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

export const useStore = create((set) => ({
  cards: shuffleCards(),
  currentSelection: [],
  stopFlip: false,
  flipOver: () =>
    set((state) => {
      const [firstIndex, secondIndex] = state.currentSelection
      const cards = state.cards.map((card, idx) =>
        idx === firstIndex || idx === secondIndex ? { ...card, flipped: !card.flipped } : card
      )
      return { stopFlip: false, currentSelection: [], cards }
    }),
  resetSelection: () => set({ currentSelection: [] }),
  flipCard: (index) =>
    set((state) => {
      let cards = state.cards.map((card, idx) => (idx === index ? { ...card, flipped: !card.flipped } : card))

      if (state.currentSelection.length === 0) {
        return { currentSelection: [index], cards }
      }

      const [firstIndex] = state.currentSelection
      const firstCard = state.cards[firstIndex]
      const secondCard = state.cards[index]

      if (firstIndex !== index) {
        if (firstCard.index === secondCard.index) {
          cards = cards.map((card, idx) => (idx === firstIndex || idx === index ? { ...card, disabled: true } : card))
        } else {
          return { cards, stopFlip: true, currentSelection: [firstIndex, index] }
        }
      }

      return { cards, currentSelection: [] }
    }),
  resetCards: () => set({ cards: shuffleCards() }),
}))
