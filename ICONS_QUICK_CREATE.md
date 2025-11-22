# 🎨 Hướng dẫn nhanh tạo Icons

## ⚡ Quick Start

### Option 1: Dùng Piskel (Dễ nhất - Khuyến nghị)

1. **Mở**: https://www.piskelapp.com/
2. **Tạo canvas**:
   - TopBar icons: **24x24px**
   - BottomNav icons: **36x36px**
3. **Vẽ icons** theo mô tả dưới đây
4. **Export**: Download → PNG
5. **Đặt vào**: `public/images/icons/`

### Option 2: Tải free icons

- **OpenGameArt**: https://opengameart.org/content/pixel-art-icons
- **Itch.io**: https://itch.io/game-assets/free/tag-pixel-art
- Tìm: "ui icons", "pixel art icons", "game icons"

---

## 📋 Icons cần tạo

### 1. **scroll.png** (24x24px)
```
┌─────────────┐
│  ────────   │  ← Top line (black)
│             │
│             │  ← White rectangle
│             │
│  ────────   │  ← Bottom line (black)
└─────────────┘
- Background: White (#ffffff)
- Border: Black (#000000), 2px
- 2 horizontal lines ở top và bottom
```

### 2. **chest.png** (24x24px và 36x36px)
```
       ┌──┐
      ╱    ╲
     │  ●  │  ← Lock (black circle)
     │─────│
     │     │  ← Brown rectangle
     │─────│
     └─────┘
- Body: Brown (#8b4513)
- Border: Black (#000000), 2px
- Lock: Small black circle ở giữa top
```

### 3. **shop.png** (36x36px)
```
┌─────────────┐
│ ═══════════ │  ← Red background
│ ═══════════ │  ← White stripes
│ ═══════════ │
└─────────────┘
- Background: Red (#ff0000)
- Stripes: White (#ffffff), horizontal
- Border: Black (#000000), 2px
```

### 4. **house.png** (36x36px)
```
       /\
      /  \      ← Red roof (#cc0000)
     /────\
    │      │    ← Brown house (#8b4513)
    │  ┌─┐ │    ← Black door
    │  │ │ │
    └──┴─┴─┘
- Roof: Red triangle (#cc0000)
- Body: Brown rectangle (#8b4513)
- Door: Black rectangle ở giữa
- Border: Black (#000000), 2px
```

### 5. **heroes.png** (36x36px)
```
      ╱───╲
     │  ●  │    ← Silver helmet (#c0c0c0)
     │─────│    ← Black visor (arc)
     │     │
     └─────┘
- Shape: Ellipse (silver/gray #c0c0c0)
- Visor: Black arc ở bottom
- Border: Black (#000000), 2px
```

---

## 🎨 Color Palette

```css
White:     #ffffff
Black:     #000000
Brown:     #8b4513
Red:       #ff0000
Dark Red:  #cc0000
Silver:    #c0c0c0
Gold:      #ffd700
```

---

## ✅ Checklist

- [ ] scroll.png (24x24px)
- [ ] chest.png (24x24px)
- [ ] chest.png (36x36px) - hoặc scale từ 24x24
- [ ] shop.png (36x36px)
- [ ] house.png (36x36px)
- [ ] heroes.png (36x36px)
- [x] coin.png - ✅ Đã có

---

## 📁 Nơi đặt icons

Tất cả icons đặt vào: `public/images/icons/`

```
public/images/icons/
├── scroll.png
├── coin.png    ✅
├── chest.png
├── shop.png
├── house.png
└── heroes.png
```

---

## 🚀 Sau khi tạo xong

1. Đặt tất cả PNG vào `public/images/icons/`
2. Refresh browser
3. Icons sẽ tự động load
4. Nếu không có, sẽ hiển thị emoji fallback tạm thời

---

## 💡 Tips

- **Pixel Art**: Vẽ từng pixel, không dùng anti-aliasing
- **Sharp Edges**: Đảm bảo edges sắc nét, không blur
- **Contrast**: Dùng màu đậm, tương phản cao
- **Simple**: Đơn giản, dễ nhận biết ở size nhỏ
- **Consistent**: Tất cả icons cùng style

---

**Bạn muốn tôi giúp tạo icons không? Tôi có thể:**
1. Tạo SVG icons đơn giản
2. Hướng dẫn chi tiết hơn
3. Tạo canvas script để generate

