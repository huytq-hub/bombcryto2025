# 📁 Hướng dẫn tổ chức Assets (Images, Audio, etc.)

## 🎯 Khuyến nghị: Cấu trúc Assets

### Quy tắc chung

Với **Vite + Phaser + React**, có 2 nơi để đặt assets:

1. **`public/images/`** - Game assets (Phaser scenes) ⭐ **KHUYẾN NGHỊ**
2. **`src/assets/`** - React component assets (nếu cần import/optimize)

## 📂 Cấu trúc đề xuất

```
public/
└── images/
    ├── background.png          # Background images
    ├── icons/                  # UI icons
    │   ├── coin.png
    │   ├── house.png
    │   └── ...
    ├── panels/                 # Game panel images
    │   ├── adventure.png
    │   ├── treasure-hunt.png
    │   └── battle.png
    ├── characters/             # Character sprites
    │   ├── hero.png
    │   └── ...
    ├── items/                  # Item images
    │   ├── chest.png
    │   └── ...
    └── tiles/                  # Tile maps
        └── tile.png

src/assets/                     # (Optional) Cho React components
└── images/                     # Nếu React components cần import images
    └── ui/
        └── ...
```

## 🎮 Phaser Scenes - Dùng `public/images/`

### ✅ Đúng - Load từ public folder

```javascript
// src/scenes/HomeScene.js
preload() {
  // Load trực tiếp từ /images/ (public/images/)
  this.load.image("coin-icon", "/images/icons/coin.png");
  this.load.image("panel-treasure-hunt", "/images/panels/treasure-hunt.png");
  this.load.image("hero", "/images/characters/hero.png");
}
```

**Ưu điểm:**
- ✅ Đơn giản, không cần import
- ✅ Có thể thay đổi runtime (dùng cho dynamic assets)
- ✅ Phù hợp với game assets
- ✅ Vite tự động copy vào `dist/` khi build

### ❌ Không khuyến nghị - Import trong Phaser

```javascript
// Không cần thiết với Phaser scenes
import heroImage from "../assets/images/hero.png?url";
this.load.image("hero", heroImage);
```

**Lý do:**
- Phức tạp không cần thiết
- Phaser đã có loader riêng
- Không có lợi ích gì thêm

## ⚛️ React Components - Có thể dùng cả 2

### Option 1: Từ public (đơn giản)

```jsx
// src/components/ui/Icon.jsx
function Icon({ name }) {
  return <img src={`/images/icons/${name}.png`} alt={name} />;
}
```

### Option 2: Import từ src/assets (được optimize)

```jsx
// src/components/ui/Icon.jsx
import coinIcon from "../assets/images/icons/coin.png";

function Icon() {
  return <img src={coinIcon} alt="coin" />;
}
```

**Khi nào dùng Option 2:**
- Khi cần Vite optimize images (resize, format conversion)
- Khi muốn type safety với TypeScript
- Khi assets chỉ dùng trong React components

## 📋 Quy tắc chọn vị trí

| Loại Asset | Vị trí | Lý do |
|------------|--------|-------|
| **Phaser game images** | `public/images/` | Phaser loader, đơn giản |
| **React component images** | `src/assets/` hoặc `public/images/` | Tùy nhu cầu optimize |
| **Sprites, tiles** | `public/images/` | Game assets |
| **UI icons** | `public/images/icons/` | Dùng chung cho cả Phaser và React |
| **Background music** | `public/audio/` | Audio files |
| **Fonts** | `public/fonts/` | Font files |

## 🔧 Cách sử dụng

### Trong Phaser Scenes

```javascript
// src/scenes/MyScene.js
export default class MyScene extends Phaser.Scene {
  preload() {
    // Tất cả từ public/images/
    this.load.image("hero", "/images/characters/hero.png");
    this.load.image("coin", "/images/icons/coin.png");
    this.load.spritesheet("player", "/images/characters/player.png", {
      frameWidth: 32,
      frameHeight: 32
    });
  }
}
```

### Trong React Components

```jsx
// Option 1: Từ public (simple)
function MyComponent() {
  return <img src="/images/icons/coin.png" alt="coin" />;
}

// Option 2: Import (optimized)
import coinIcon from "../assets/images/icons/coin.png";
function MyComponent() {
  return <img src={coinIcon} alt="coin" />;
}
```

## 🚀 Build & Deploy

### Development
- Vite serve `public/` folder ở root `/`
- `public/images/coin.png` → `http://localhost:3000/images/coin.png`

### Production
- Vite tự động copy `public/` vào `dist/`
- Cấu trúc giữ nguyên: `dist/images/coin.png`

## ⚠️ Lưu ý

1. **Không đặt assets trong `src/` nếu dùng cho Phaser** - Phức tạp không cần thiết
2. **Public folder không được process bởi Vite** - Không thể import như module
3. **Assets trong `src/assets/` được Vite process** - Có thể optimize, nhưng cần import
4. **Path trong Phaser**: Luôn bắt đầu với `/` - `/images/...` không phải `images/...`

## 📝 Checklist khi thêm assets mới

- [ ] Đặt file vào `public/images/[category]/`
- [ ] Đảm bảo path đúng: `/images/...`
- [ ] Test load trong Phaser scene
- [ ] Kiểm tra console không có lỗi 404
- [ ] Test cả development và production build

## 🔗 Tham khảo

- [Vite Static Assets](https://vitejs.dev/guide/assets.html)
- [Phaser Loader](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.LoaderPlugin.html)

