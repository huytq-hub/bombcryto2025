# 🎮 BombCrypto 2025

A modern Web3 game inspired by BombCrypto, built with **React + Phaser 3**.

![BombCrypto 2025](https://img.shields.io/badge/React-18.2.0-blue)
![Phaser](https://img.shields.io/badge/Phaser-3.90.0-green)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Tech Stack](#-tech-stack)
- [Cài đặt](#-cài-đặt)
- [Sử dụng](#-sử-dụng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Phát triển](#-phát-triển)
- [Build & Deploy](#-build--deploy)
- [Roadmap](#-roadmap)
- [Đóng góp](#-đóng-góp)

## 🎯 Giới thiệu

BombCrypto 2025 là một game Web3 được xây dựng dựa trên concept của BombCrypto (2021). Game kết hợp:

- **Phaser 3** - Game engine mạnh mẽ cho gameplay
- **React** - UI/UX hiện đại và dễ maintain
- **Zustand** - State management nhẹ và hiệu quả
- **Vite** - Build tool nhanh và hiện đại

### Kiến trúc Hybrid

```
┌─────────────────────────────────────┐
│         React App (Wrapper)         │
│  ┌───────────────────────────────┐  │
│  │   React UI Layer              │  │
│  │   - Menu, Inventory, Shop     │  │
│  │   - Modals, Settings          │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │   Phaser Game Canvas         │  │
│  │   - Game scenes               │  │
│  │   - Gameplay logic            │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## ✨ Tính năng

### Đã implement
- ✅ **Home Scene** - Màn hình chính với các panel (Adventure, Treasure Hunt, Battle)
- ✅ **Treasure Hunt** - Gameplay tìm kho báu với pathfinding
- ✅ **React UI Overlay** - TopBar, BottomNav với coins display
- ✅ **Inventory System** - Quản lý heroes và items
- ✅ **Shop System** - Mua bán items với coins
- ✅ **State Management** - Zustand store cho game state

### Đang phát triển
- 🚧 **Battle Scene** - Hệ thống chiến đấu
- 🚧 **Adventure Scene** - Chế độ phiêu lưu
- 🚧 **Heroes Management** - Quản lý và upgrade heroes
- 🚧 **Wallet Integration** - Kết nối ví Web3
- 🚧 **Multiplayer** - Chơi cùng bạn bè

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **Phaser 3.90.0** - Game engine
- **Zustand 4.4.7** - State management
- **React Router 6.20.0** - Routing (sẵn sàng cho tương lai)
- **Axios 1.6.0** - HTTP client

### Build Tools
- **Vite 5.0.0** - Build tool và dev server
- **@vitejs/plugin-react** - React plugin cho Vite

### Game Libraries
- **pathfinding 0.4.18** - A* pathfinding algorithm

## 📦 Cài đặt

### Yêu cầu
- Node.js >= 16.0.0
- npm >= 7.0.0

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd bombcryto2025
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:3000` (hoặc port mà Vite hiển thị)

## 🎮 Sử dụng

### Development
```bash
# Chạy dev server với hot reload
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

### Game Controls
- **Click** vào các panel để vào game mode
- **Click** vào navigation bar để mở các menu
- **Click** vào TopBar icons để xem coins, chest, etc.

### Scenes
1. **Home Scene** - Màn hình chính, chọn game mode
2. **Treasure Hunt** - Tìm kho báu, hero tự động di chuyển

## 📁 Cấu trúc dự án

```
bombcryto2025/
├── public/                 # Static assets (served at root)
│   └── images/            # Game images (Phaser scenes load từ đây)
│       ├── icons/         # UI icons
│       ├── panels/        # Game panel images
│       ├── characters/    # Character sprites
│       └── items/         # Item images
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # UI components (TopBar, BottomNav)
│   │   ├── inventory/    # Inventory modal
│   │   ├── shop/         # Shop modal
│   │   └── GameCanvas.jsx # Phaser wrapper
│   ├── scenes/           # Phaser game scenes
│   │   ├── HomeScene.js
│   │   └── TreasureHuntScene.js
│   ├── store/            # Zustand state management
│   │   └── gameStore.js
│   ├── assets/           # Game assets
│   │   └── images/
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies
└── README.md             # This file
```

## 🚀 Phát triển

### Thêm Scene mới

1. Tạo file scene trong `src/scenes/`:
```javascript
// src/scenes/NewScene.js
import Phaser from "phaser";

export default class NewScene extends Phaser.Scene {
  constructor() {
    super("NewScene");
  }
  
  preload() {
    // Load assets
  }
  
  create() {
    // Initialize scene
  }
  
  update() {
    // Game loop
  }
}
```

2. Import vào `src/components/GameCanvas.jsx`:
```javascript
import NewScene from "../scenes/NewScene";

// Thêm vào config.scene array
scene: [HomeScene, TreasureHuntScene, NewScene]
```

### Thêm React Component

1. Tạo component trong `src/components/`:
```javascript
// src/components/NewComponent.jsx
export default function NewComponent() {
  return <div>New Component</div>;
}
```

2. Import vào `App.jsx`:
```javascript
import NewComponent from "./components/NewComponent";
```

### Quản lý State

Sử dụng Zustand store trong `src/store/gameStore.js`:

```javascript
import { useGameStore } from '../store/gameStore';

function MyComponent() {
  const { coins, addCoins } = useGameStore();
  
  return (
    <button onClick={() => addCoins(100)}>
      Add Coins: {coins}
    </button>
  );
}
```

### Communication giữa React và Phaser

**Từ React → Phaser:**
```javascript
// Trong React component
const { gameInstance } = useGameStore();
gameInstance.scene.getScene('Home').events.emit('customEvent', data);
```

**Từ Phaser → React:**
```javascript
// Trong Phaser scene
this.events.emit('updateCoins', 100);

// Trong React component (lắng nghe qua store)
```

## 🏗️ Build & Deploy

### Build Production
```bash
npm run build
```

Output sẽ ở trong thư mục `dist/`

### Deploy

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

#### Static Hosting
Upload thư mục `dist/` lên bất kỳ static hosting nào (GitHub Pages, AWS S3, etc.)

## 🗺️ Roadmap

### Phase 1: Core Game (✅ Hoàn thành)
- [x] React + Phaser setup
- [x] Home Scene
- [x] Treasure Hunt Scene
- [x] Basic UI overlay

### Phase 2: Game Features (🚧 Đang phát triển)
- [ ] Battle Scene
- [ ] Adventure Scene
- [ ] Heroes system
- [ ] Items system
- [ ] Upgrade system

### Phase 3: Web3 Integration (📅 Kế hoạch)
- [ ] Wallet connection (MetaMask, WalletConnect)
- [ ] Smart contract integration
- [ ] NFT minting/trading
- [ ] Token rewards

### Phase 4: Multiplayer (📅 Kế hoạch)
- [ ] Real-time multiplayer (Socket.io)
- [ ] Leaderboards
- [ ] Guild system
- [ ] PvP battles

### Phase 5: Polish (📅 Kế hoạch)
- [ ] Animations
- [ ] Sound effects
- [ ] Music
- [ ] Tutorial
- [ ] Mobile optimization

## 🤝 Đóng góp

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

ISC License

## 🙏 Acknowledgments

- Inspired by [BombCrypto](https://bombcrypto.io/) (2021)
- Built with [Phaser 3](https://phaser.io/)
- UI powered by [React](https://react.dev/)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for the Web3 gaming community**

