export default function TopBar({ coins }) {
  return (
    <div 
      className="absolute top-0 left-0 right-0 h-[60px] z-[1000] pointer-events-none"
      style={{
        backgroundImage: 'url(/images/top.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated'
      }}
    >
      <div className="flex justify-end items-center gap-4 px-4 h-full">
        {/* Coin display */}
        <div className="flex items-center gap-2 pointer-events-auto font-bold text-xs font-pixel">
          <span className="text-white text-shadow-[1px_1px_0px_rgba(255,255,255,0.5)] text-2xl">
            {coins.toLocaleString()}
          </span>
          <img 
            src="/images/icons/coin.png" 
            alt="coin"
            className="w-8 h-8 pixelated"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />

        </div>
        
        {/* Chest icon */}
        <div className="w-20 h-20 flex items-center justify-center cursor-pointer pointer-events-auto pixelated transition-transform duration-100 hover:scale-110">
          <img 
            src="/images/icons/chest-top.png" 
            alt="chest"
            className="w-full h-full object-contain pixelated"
            onError={(e) => {
              // Fallback to other chest icon
              e.target.src = '/images/icons/pixel-art-treasure-chest-icon-retro-gaming-adventure-design_1292377-15461.avif';
              e.target.onError = () => {
                e.target.style.display = 'none';
                e.target.parentElement.textContent = '📦';
              };
            }}
          />
        </div>
      </div>
    </div>
  )
}
