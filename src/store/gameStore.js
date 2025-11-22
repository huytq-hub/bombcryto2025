import { create } from 'zustand'

export const useGameStore = create((set) => ({
  // Game state
  gameInstance: null,
  currentScene: 'Home',
  
  // User data
  coins: 1000,
  gems: 50,
  
  // Inventory
  heroes: [],
  items: [],
  
  // Actions
  setGameInstance: (game) => set({ gameInstance: game }),
  setCurrentScene: (scene) => set({ currentScene: scene }),
  
  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
  spendCoins: (amount) => set((state) => ({ 
    coins: Math.max(0, state.coins - amount) 
  })),
  
  addHero: (hero) => set((state) => ({ 
    heroes: [...state.heroes, hero] 
  })),
  
  addItem: (item) => set((state) => ({ 
    items: [...state.items, item] 
  })),
}))

