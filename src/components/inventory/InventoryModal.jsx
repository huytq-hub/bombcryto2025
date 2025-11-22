import { useGameStore } from '../../store/gameStore'

export default function InventoryModal({ onClose }) {
  const { heroes, items } = useGameStore()

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-[2000]" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl border-4 border-black w-[600px] max-w-[90vw] max-h-[80vh] overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 bg-game-brown text-white border-b-[3px] border-black">
          <h2 className="m-0 text-2xl text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">INVENTORY</h2>
          <button 
            className="bg-transparent border-none text-white text-[32px] w-10 h-10 flex items-center justify-center rounded transition-colors duration-200 hover:bg-white/20" 
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <div className="p-5 overflow-y-auto flex-1">
          <div className="mb-8">
            <h3 className="mb-4 text-gray-800 text-lg">Heroes ({heroes.length})</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
              {heroes.length === 0 ? (
                <p className="text-center text-gray-500 py-10 italic col-span-full">No heroes yet</p>
              ) : (
                heroes.map((hero, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-100 border-2 border-black rounded-lg p-4 text-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                  >
                    <div className="text-4xl mb-2">⚔️</div>
                    <div className="text-xs font-bold text-gray-800">{hero.name || `Hero ${idx + 1}`}</div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-gray-800 text-lg">Items ({items.length})</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
              {items.length === 0 ? (
                <p className="text-center text-gray-500 py-10 italic col-span-full">No items yet</p>
              ) : (
                items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-100 border-2 border-black rounded-lg p-4 text-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                  >
                    <div className="text-4xl mb-2">🎒</div>
                    <div className="text-xs font-bold text-gray-800">{item.name || `Item ${idx + 1}`}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

