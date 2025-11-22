import { useState } from 'react'
import GameCanvas from './components/GameCanvas'
import TopBar from './components/ui/TopBar'
import BottomNav from './components/ui/BottomNav'
import InventoryModal from './components/inventory/InventoryModal'
import ShopModal from './components/shop/ShopModal'
import { useGameStore } from './store/gameStore'

function App() {
  const [showInventory, setShowInventory] = useState(false)
  const [showShop, setShowShop] = useState(false)
  const { coins } = useGameStore()

  return (
    <div className="relative w-[960px] h-[540px] mx-auto border-[10px] border-game-green shadow-[0_0_20px_rgba(0,0,0,0.5)] pixelated font-pixel max-[1000px]:w-screen max-[1000px]:h-screen max-[1000px]:border-0">
      {/* React UI Layer - Overlay trên Phaser */}
      <TopBar coins={coins} />
      
      {/* Phaser Game Canvas */}
      <GameCanvas />
      
      {/* React UI Components */}
      <BottomNav 
        onInventoryClick={() => setShowInventory(true)}
        onShopClick={() => setShowShop(true)}
      />
      
      {/* Modals */}
      {showInventory && (
        <InventoryModal onClose={() => setShowInventory(false)} />
      )}
      {showShop && (
        <ShopModal onClose={() => setShowShop(false)} />
      )}
    </div>
  )
}

export default App

