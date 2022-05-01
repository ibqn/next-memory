import create from 'zustand'
import shuffle from 'lodash/shuffle'

const cardsPool = Array.from({ length: 6 }, (_, index) => ({ type: index + 1, flipped: false, disabled: false }))

const shuffleCards = () => shuffle([...cardsPool, ...cardsPool])

const useStore = create((set) => ({
  cards: shuffleCards(),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  resetCards: () => set({ cards: shuffleCards() }),
}))

export default useStore
