/**
 * Script để generate các pixel art icons đơn giản
 * Chạy trong Node.js với canvas package
 * 
 * Usage: node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Tạo icon đơn giản bằng cách tạo pixel array
// Hoặc có thể dùng canvas package nếu đã cài

const iconSpecs = {
  scroll: {
    size: 24,
    description: 'White scroll with black border',
  },
  chest: {
    size: 24,
    description: 'Brown chest with lock',
  },
  shop: {
    size: 36,
    description: 'Red shop with white stripes',
  },
  house: {
    size: 36,
    description: 'Brown house with red roof',
  },
  heroes: {
    size: 36,
    description: 'Silver helmet',
  },
};

console.log('Icon Specifications:');
console.log(JSON.stringify(iconSpecs, null, 2));

console.log('\n📝 Note:');
console.log('Để generate icons thực sự, bạn cần:');
console.log('1. Cài đặt canvas package: npm install canvas');
console.log('2. Hoặc sử dụng Piskel (https://www.piskelapp.com/)');
console.log('3. Hoặc tải từ free resources (xem ICONS_GUIDE.md)');

// Tạo placeholder instructions
const instructions = `
# Hướng dẫn tạo Icons

1. Mở Piskel (https://www.piskelapp.com/)
2. Tạo canvas với kích thước:
   - TopBar icons: 24x24px
   - BottomNav icons: 36x36px
3. Vẽ icons theo specs trong ICONS_GUIDE.md
4. Export PNG với transparency
5. Đặt vào public/images/icons/

Icons cần tạo:
- scroll.png (24x24)
- chest.png (24x24 và 36x36)
- shop.png (36x36)
- house.png (36x36)
- heroes.png (36x36)
`;

fs.writeFileSync(
  path.join(__dirname, '../public/images/icons/README.md'),
  instructions
);

console.log('\n✅ Đã tạo README.md trong public/images/icons/');

