import Phaser from 'phaser';

// Cấu hình game
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  backgroundColor: '#0c0f11',
  scene: {
    create: create
  }
};

// Tạo game
const game = new Phaser.Game(config);

// Scene function
function create() {
  // Thêm text chào mừng
  this.add.text(
    config.width / 2,
    config.height / 2,
    'BombCrypto 2025\nGame đã sẵn sàng!',
    {
      fontSize: '32px',
      fill: '#ffffff',
      align: 'center'
    }
  ).setOrigin(0.5);
}

