# Images Folder

Thư mục này chứa các hình ảnh sử dụng trong game.

## Cấu trúc:

```
public/images/
├── background.png          # Hình nền chính của game
├── panels/                # Hình ảnh cho 3 panel buttons
│   ├── adventure.png      # Panel Adventure (locked)
│   ├── treasure-hunt.png   # Panel Treasure Hunt (open - có chest với coins)
│   └── battle.png         # Panel Battle (locked)
└── icons/
    ├── coin.png           # Icon coin/token (gold coin)
    ├── house.png          # Icon house (market icon)
    ├── chest.png          # Icon chest
    ├── shop.png           # Icon shop
    └── heroes.png         # Icon heroes
```

## Cách sử dụng:

1. **Tải hình ảnh về**: Tải các hình ảnh cần thiết và đặt vào đúng thư mục
2. **Tự động load**: Code sẽ tự động ưu tiên load từ thư mục local này
3. **Fallback**: Nếu không tìm thấy file local, code sẽ tự động load từ URL online

## Các hình ảnh cần thiết:

### Panels (quan trọng):
- **panels/adventure.png**: Hình ảnh panel Adventure (kích thước đề xuất: 240x280px)
- **panels/treasure-hunt.png**: Hình ảnh panel Treasure Hunt với chest và coins (kích thước đề xuất: 240x280px)
- **panels/battle.png**: Hình ảnh panel Battle (kích thước đề xuất: 240x280px)

### Icons:
- **icons/coin.png**: Icon coin vàng (kích thước đề xuất: 64x64 hoặc 128x128)
- **icons/house.png**: Icon house/market (kích thước đề xuất: 64x64 hoặc 128x128)

### Background:
- **background.png**: Hình nền chính (kích thước đề xuất: 1920x1080 hoặc lớn hơn)

## Lưu ý:

- Nếu không có file local, game vẫn hoạt động bình thường bằng cách load từ URL online
- Định dạng khuyến nghị: PNG với transparency
- Kích thước nên là bội số của 2 để tối ưu hiệu suất

