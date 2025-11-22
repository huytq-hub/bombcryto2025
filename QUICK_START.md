# 🚀 Quick Start Guide

## Cài đặt nhanh

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy development server
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`

## Cấu trúc chính

- **React UI**: `src/components/` - TopBar, BottomNav, Modals
- **Phaser Scenes**: `src/scenes/` - Game scenes
- **State**: `src/store/gameStore.js` - Zustand store
- **Assets**: `public/images/` - Game images

## Lệnh thường dùng

```bash
npm run dev      # Development server
npm run build    # Build production
npm run preview  # Preview production build
```

## Thêm tính năng mới

### Thêm Scene
1. Tạo file trong `src/scenes/NewScene.js`
2. Import vào `src/components/GameCanvas.jsx`
3. Thêm vào `scene: []` array

### Thêm React Component
1. Tạo trong `src/components/`
2. Import vào `src/App.jsx`

### Quản lý State
Sử dụng `useGameStore()` từ `src/store/gameStore.js`

Xem [README.md](./README.md) để biết chi tiết hơn!

