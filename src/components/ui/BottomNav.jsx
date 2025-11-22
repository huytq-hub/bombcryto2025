export default function BottomNav({ onInventoryClick, onShopClick }) {
  return (
    <div className="absolute bottom-4 left-0 right-0 h-[70px] flex justify-end items-center gap-7 pr-8 z-[1000] pointer-events-none">
      <button 
        className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer pointer-events-auto transition-transform duration-100 p-2 hover:scale-115"
        onClick={onInventoryClick}
      >
        <div className="w-12 h-12 flex items-center justify-center pixelated">
          <img 
            src="/images/icons/chest-bottom.png" 
            alt="chest"
            className="w-full h-full object-contain pixelated"
            onError={(e) => {
              // Fallback to PNG version
              e.target.src = '/images/icons/chest-top.png';
              e.target.onError = () => {
                e.target.style.display = 'none';
                e.target.parentElement.textContent = '📦';
              };
            }}
          />
        </div>
        <span className="text-[11px] font-bold text-white font-pixel text-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] tracking-wide">
          CHEST
        </span>
      </button>
      
      <button 
        className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer pointer-events-auto transition-transform duration-100 p-2 hover:scale-115"
        onClick={onShopClick}
      >
        <div className="w-12 h-12 flex items-center justify-center pixelated">
          <img 
            src="/images/icons/shop.png" 
            alt="shop"
            className="w-full h-full object-contain pixelated"
            onError={(e) => {
              // Fallback: Ẩn image và hiển thị emoji tạm thời
              e.target.style.display = 'none';
              if (!e.target.parentElement.textContent.includes('🛒')) {
                e.target.parentElement.textContent = '🛒';
              }
            }}
          />
        </div>
        <span className="text-[11px] font-bold text-white font-pixel text-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] tracking-wide">
          SHOP
        </span>
      </button>
      
      <button className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer pointer-events-auto transition-transform duration-100 p-2 hover:scale-115">
        <div className="w-12 h-12 flex items-center justify-center pixelated">
          <img 
            src="/images/icons/house.png" 
            alt="house"
            className="w-full h-full object-contain pixelated"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.textContent = '🏠';
            }}
          />
        </div>
        <span className="text-[11px] font-bold text-white font-pixel text-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] tracking-wide">
          HOUSE
        </span>
      </button>
      
      <button className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer pointer-events-auto transition-transform duration-100 p-2 hover:scale-115">
        <div className="w-12 h-12 flex items-center justify-center pixelated">
          <img 
            src="/images/icons/heroes.png" 
            alt="heroes"
            className="w-full h-full object-contain pixelated"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.textContent = '⚔️';
            }}
          />
        </div>
        <span className="text-[11px] font-bold text-white font-pixel text-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] tracking-wide">
          HEROES
        </span>
      </button>
    </div>
  )
}

