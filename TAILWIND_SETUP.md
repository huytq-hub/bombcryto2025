# 🎨 Tailwind CSS Setup - BombCrypto 2025

## ✅ Đã hoàn thành migration sang Tailwind CSS

Tất cả components đã được chuyển từ CSS thông thường sang Tailwind CSS utility classes.

## 📦 Dependencies đã thêm

```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  }
}
```

## 🔧 Files cấu hình

### 1. `tailwind.config.js`
- Cấu hình Tailwind với custom colors cho game
- Custom font family (pixel font)
- Content paths để Tailwind scan files

### 2. `postcss.config.js`
- PostCSS config để xử lý Tailwind và Autoprefixer

### 3. `src/index.css`
- Tailwind directives (`@tailwind base/components/utilities`)
- Custom base styles
- Pixelated utility class

## 🎯 Custom Colors

Đã thêm game colors vào Tailwind config:

```js
colors: {
  'game-green': '#4a9b3a',    // Border color
  'game-blue': '#a8d8f0',     // Background
  'game-gold': '#ffd700',     // Coins
  'game-brown': '#8b4513',    // Buttons
  'game-red': '#ff0000',      // Shop header
}
```

## 📝 Components đã chuyển đổi

### ✅ TopBar.jsx
- Chuyển từ CSS classes sang Tailwind utility classes
- Giữ nguyên pixel art styling
- Responsive design

### ✅ BottomNav.jsx
- Chuyển sang Tailwind
- Hover effects với Tailwind
- Pixel art icons support

### ✅ InventoryModal.jsx
- Modal styling với Tailwind
- Grid layout với Tailwind grid
- Responsive design

### ✅ ShopModal.jsx
- Modal styling
- Button states (disabled/enabled)
- Grid layout

### ✅ App.css
- Chuyển sang `@layer components`
- Responsive breakpoints với Tailwind

### ✅ index.css
- Base styles với Tailwind directives
- Custom utilities cho pixel art

## 🗑️ Files đã xóa

- ❌ `src/components/ui/TopBar.css`
- ❌ `src/components/ui/BottomNav.css`
- ❌ `src/components/inventory/InventoryModal.css`
- ❌ `src/components/shop/ShopModal.css`

## 🚀 Cách sử dụng

### Install dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```

Tailwind sẽ tự động scan và generate CSS từ utility classes trong code.

## 📚 Tailwind Features đã sử dụng

- **Utility Classes**: Colors, spacing, typography
- **Custom Colors**: Game-specific color palette
- **Responsive**: Mobile-first responsive design
- **Hover States**: Interactive elements
- **Transitions**: Smooth animations
- **Z-index**: Layering components
- **Flexbox/Grid**: Layout systems

## 🎨 Custom Utilities

### Pixelated Images
```css
.pixelated {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
```

Sử dụng: `className="pixelated"` trên image elements

## 💡 Lợi ích

1. **Consistency**: Tất cả styles dùng cùng design system
2. **Performance**: Tailwind chỉ generate CSS đang dùng
3. **Maintainability**: Dễ maintain, không cần switch giữa files
4. **Responsive**: Built-in responsive utilities
5. **Customizable**: Dễ extend với custom colors/fonts

## 📖 Tài liệu

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind + Vite](https://tailwindcss.com/docs/guides/vite)

---

**Migration hoàn tất!** Tất cả components giờ dùng Tailwind CSS 🎉

