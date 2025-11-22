import { useGameStore } from '../../store/gameStore'

const shopItems = [
  { id: 1, name: 'Hero Pack', price: 100, icon: '⚔️' },
  { id: 2, name: 'Energy Potion', price: 50, icon: '🧪' },
  { id: 3, name: 'Treasure Key', price: 200, icon: '🗝️' },
  { id: 4, name: 'Upgrade Stone', price: 150, icon: '💎' },
]

export default function ShopModal({ onClose }) {
  const { coins, spendCoins, addItem } = useGameStore()

  const handlePurchase = (item) => {
    if (coins >= item.price) {
      spendCoins(item.price)
      addItem({ ...item, id: Date.now() })
      alert(`Purchased ${item.name}!`)
    } else {
      alert('Not enough coins!')
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-[2000]" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl border-4 border-black w-[700px] max-w-[90vw] max-h-[80vh] overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 bg-game-red text-white border-b-[3px] border-black">
          <h2 className="m-0 text-2xl text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">SHOP</h2>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-game-gold/90 rounded-full border-2 border-black font-bold text-sm text-black">
            <span>🪙</span>
            <span>{coins.toLocaleString()}</span>
          </div>
          <button 
            className="bg-transparent border-none text-white text-[32px] w-10 h-10 flex items-center justify-center rounded transition-colors duration-200 hover:bg-white/20" 
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <div className="p-5 overflow-y-auto flex-1">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5">
            {shopItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-100 border-[3px] border-black rounded-xl p-5 text-center flex flex-col items-center gap-2.5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
              >
                <div className="text-5xl">{item.icon}</div>
                <div className="text-base font-bold text-gray-800">{item.name}</div>
                <div className="flex items-center gap-1.5 text-lg font-bold text-game-gold">
                  <span>🪙</span>
                  <span>{item.price}</span>
                </div>
                <button 
                  className={`w-full rounded-md py-2.5 px-5 text-sm font-bold cursor-pointer transition-all duration-200 ${
                    coins < item.price
                      ? 'bg-gray-400 text-white opacity-60 cursor-not-allowed'
                      : 'bg-game-green text-white border-2 border-black hover:bg-[#3a7b2a] hover:scale-105'
                  }`}
                  onClick={() => handlePurchase(item)}
                  disabled={coins < item.price}
                >
                  BUY
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

