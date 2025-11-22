# 🎨 Hướng dẫn tạo Icons cho BombCrypto 2025

## 📋 Icons cần thiết

### TopBar Icons (24x24px)
- `scroll.png` - Scroll icon (document/paper)
- `coin.png` - Coin icon (đã có)
- `chest.png` - Chest icon

### BottomNav Icons (36x36px)
- `chest.png` - Chest icon (dùng chung với TopBar)
- `shop.png` - Shop icon (red & white striped)
- `house.png` - House icon (brown house với roof)
- `heroes.png` - Heroes icon (silver knight helmet)

## 🎯 Style Requirements

- **Pixel Art Style**: 8-bit/16-bit retro game aesthetic
- **Format**: PNG với transparency
- **Size**: Theo yêu cầu (24x24 hoặc 36x36px)
- **Colors**: Bold, contrasting colors
- **Border**: Black outline (2px) cho các icons

## 🔧 Cách tạo Icons

### Option 1: Sử dụng công cụ online

1. **Piskel** (https://www.piskelapp.com/)
   - Tạo pixel art online
   - Export PNG
   - Free và dễ dùng

2. **Lospec Pixel Editor** (https://apps.lospec.com/pixel-editor/)
   - Chuyên cho pixel art
   - Có palette sẵn

3. **Aseprite** (Paid, nhưng có trial)
   - Professional pixel art tool
   - Best cho animation

### Option 2: Tạo bằng code/Canvas

Tôi có thể tạo các icons đơn giản bằng HTML5 Canvas nếu bạn muốn.

### Option 3: Download từ free resources

1. **OpenGameArt.org** - https://opengameart.org/
2. **Itch.io** - https://itch.io/game-assets/free/tag-pixel-art
3. **Kenney.nl** - https://kenney.nl/assets

## 📝 Icon Specifications

### Scroll Icon (24x24px)
```
- White scroll/paper
- Black border
- 2 horizontal lines (top and bottom)
- Simple, clean design
```

### Coin Icon (16x16px hoặc 24x24px)
```
- Gold/yellow circle
- Black border
- "$" symbol hoặc coin design
- Đã có trong public/images/icons/coin.png
```

### Chest Icon (24x24px và 36x36px)
```
- Brown wooden chest (#8b4513)
- Black border
- Lock detail (small black circle)
- Simple rectangular shape
```

### Shop Icon (36x36px)
```
- Red background (#ff0000)
- White horizontal stripes
- Black border
- Rectangular shape
```

### House Icon (36x36px)
```
- Brown house body (#8b4513)
- Red roof (#cc0000)
- Black door (rectangle)
- Black border
```

### Heroes Icon (36x36px)
```
- Silver/gray helmet (#c0c0c0)
- Black visor (arc shape)
- Black border
- Simple helmet design
```

## 🚀 Cách thêm Icons

1. **Tạo hoặc tải icons** theo spec trên
2. **Đặt vào thư mục**: `public/images/icons/`
3. **Đặt tên đúng**: `scroll.png`, `chest.png`, `shop.png`, `house.png`, `heroes.png`
4. **Refresh browser** - Icons sẽ tự động load

## 📦 Icons hiện có

- ✅ `coin.png` - Đã có trong `public/images/icons/`

## 🎨 Color Palette tham khảo

```css
/* Main Colors */
--white: #ffffff;
--black: #000000;
--brown: #8b4513;
--red: #ff0000;
--gold: #ffd700;
--silver: #c0c0c0;
--light-brown: #a0522d;
```

## ⚠️ Lưu ý

1. **Image Rendering**: Code đã có `image-rendering: pixelated` để giữ pixel art sharp
2. **Fallback**: Nếu không có image, sẽ hiển thị emoji (temporary)
3. **Size**: Icons sẽ scale theo container, nhưng nên tạo đúng size để sharp
4. **Transparency**: Dùng PNG với alpha channel cho background trong suốt

## 🔗 Resources

- [Piskel - Pixel Art Editor](https://www.piskelapp.com/)
- [OpenGameArt - Free Pixel Art](https://opengameart.org/)
- [Itch.io - Game Assets](https://itch.io/game-assets/free/tag-pixel-art)

## 💡 Gợi ý

Nếu bạn muốn tôi tạo các icons đơn giản bằng code, tôi có thể:
1. Tạo HTML5 Canvas script để generate icons
2. Export thành PNG
3. Hoặc tạo SVG icons đơn giản

Bạn muốn tôi giúp tạo icons không?

