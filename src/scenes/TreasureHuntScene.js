import Phaser from "phaser";
import PF from "pathfinding";

export default class TreasureHuntScene extends Phaser.Scene {
  constructor() {
    super("TreasureHunt");
  }

  preload() {
    this.load.image("hero", "https://i.imgur.com/UKN2E8k.png");
    this.load.image("chest", "https://i.imgur.com/aE6K6Qu.png");
    this.load.image("tile", "https://i.imgur.com/KX5zItf.png");
  }

  create() {
    // Kích thước map
    this.rows = 10;
    this.cols = 16;

    // Tạo map 0 = ô trống
    this.map = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(0)
    );

    this.cellSize = 48;
    
    // Tính toán offset để căn giữa map
    const { width, height } = this.cameras.main;
    const mapWidth = this.cols * this.cellSize;
    const mapHeight = this.rows * this.cellSize;
    this.offsetX = (width - mapWidth) / 2;
    this.offsetY = (height - mapHeight) / 2;

    this.drawMap();
    this.spawnHero();
    this.spawnChest();

    this.time.addEvent({
      delay: 3000,
      loop: true,
      callback: () => this.spawnChest(),
    });
  }

  drawMap() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.add
          .image(
            this.offsetX + x * this.cellSize, 
            this.offsetY + y * this.cellSize, 
            "tile"
          )
          .setOrigin(0);
      }
    }
  }

  spawnHero() {
    const centerX = this.offsetX + 1 * this.cellSize + this.cellSize / 2;
    const centerY = this.offsetY + 1 * this.cellSize + this.cellSize / 2;
    this.hero = this.add.sprite(centerX, centerY, "hero").setScale(0.8);
    this.hero.gridX = 1;
    this.hero.gridY = 1;
  }

  spawnChest() {
    // random vị trí trống
    let x = Phaser.Math.Between(0, this.cols - 1);
    let y = Phaser.Math.Between(0, this.rows - 1);

    const centerX = this.offsetX + x * this.cellSize + this.cellSize / 2;
    const centerY = this.offsetY + y * this.cellSize + this.cellSize / 2;
    
    this.chest = this.add.sprite(centerX, centerY, "chest");

    this.chest.gridX = x;
    this.chest.gridY = y;

    this.moveHeroToChest();
  }

  moveHeroToChest() {
    const grid = new PF.Grid(this.cols, this.rows);
    const finder = new PF.AStarFinder();

    const path = finder.findPath(
      this.hero.gridX,
      this.hero.gridY,
      this.chest.gridX,
      this.chest.gridY,
      grid.clone()
    );

    if (path.length < 2) return;

    let i = 1;
    this.time.addEvent({
      delay: 200,
      loop: true,
      callback: () => {
        if (i >= path.length) return;

        const [x, y] = path[i];
        this.hero.gridX = x;
        this.hero.gridY = y;

        this.hero.x = this.offsetX + x * this.cellSize + this.cellSize / 2;
        this.hero.y = this.offsetY + y * this.cellSize + this.cellSize / 2;

        if (x === this.chest.gridX && y === this.chest.gridY) {
          this.chest.destroy();
        }

        i++;
      },
    });
  }
}
