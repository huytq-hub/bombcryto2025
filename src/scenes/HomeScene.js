import Phaser from "phaser";

export default class HomeScene extends Phaser.Scene {
  constructor() {
    super("Home");
  }

  preload() {
    // Load images từ public/images/ folder
    // Vite serve public folder ở root path "/"
    
    // Background
    this.load.image("bg", "/images/background.png");
    
    // Panels - chỉ load panel images (UI icons đã có trong React)
    this.load.image("panel-adventure", "/images/panels/adventure.png");
    this.load.image("panel-treasure-hunt", "/images/panels/treasure-hunt.png");
    this.load.image("panel-battle", "/images/panels/battle.png");
    
    // Error handlers
    this.load.on("loaderror", (file) => {
      console.warn(`Failed to load ${file.key}:`, file.src);
    });
    
    // Debug: log when images are loaded
    this.load.on("filecomplete-image-panel-treasure-hunt", () => {
      console.log("✅ Treasure hunt panel image loaded successfully!");
    });
    
    this.load.on("filecomplete", (key, type, data) => {
      if (key.startsWith("panel-")) {
        console.log(`✅ Panel image loaded: ${key}`, data ? "with data" : "no data");
      }
    });
    
    // Debug: log all loaded textures after load completes
    this.load.on("complete", () => {
      console.log("📦 All files loaded. Available textures:", Object.keys(this.textures.list));
      const panelTextures = {
        adventure: this.textures.exists("panel-adventure"),
        treasureHunt: this.textures.exists("panel-treasure-hunt"),
        battle: this.textures.exists("panel-battle")
      };
      console.log("🎨 Panel textures status:", panelTextures);
      
      // Kiểm tra chi tiết texture treasure-hunt
      if (panelTextures.treasureHunt) {
        const texture = this.textures.get("panel-treasure-hunt");
        console.log("🔍 Treasure hunt texture details:", {
          key: texture.key,
          width: texture.width,
          height: texture.height,
          source: texture.source
        });
      }
    });
  }

  create() {
    const { width, height } = this.cameras.main;

    // Set camera background (using first checkerboard color)
    this.cameras.main.setBackgroundColor(0x82a2f5);

    // Background image hoặc pattern checkered
    let bgKey = "bg";
    if (!this.textures.exists("bg") || this.textures.get("bg").key === "__MISSING") {
      bgKey = "bg-fallback";
    }
    
    if (this.textures.exists(bgKey) && this.textures.get(bgKey).key !== "__MISSING") {
      // Sử dụng background image nếu có
      const bg = this.add.image(0, 0, bgKey).setOrigin(0, 0);
      // Scale background để cover toàn bộ màn hình
      const scaleX = width / bg.width;
      const scaleY = height / bg.height;
      const scale = Math.max(scaleX, scaleY);
      bg.setScale(scale);
      bg.setDepth(0);
    } else {
      // Fallback: Background với pattern checkered
      this.createCheckeredBackground();
    }

    // Main panels - ADVENTURE, TREASURE HUNT, BATTLE
    // (TopBar và BottomNav đã được render bởi React components)
    this.createMainPanels();

    // Border xanh lá (vẽ cuối cùng để ở trên cùng)
    this.createBorder();
  }

  createCheckeredBackground() {
    const { width, height } = this.cameras.main;
    const tileSize = 32;
    // Checkerboard colors from CSS root variables for reusability
    const checkerColor1 = 0x82a2f5; // #82a2f5
    const checkerColor2 = 0x7ec9ff; // #7ec9ff

    for (let y = 0; y < height; y += tileSize) {
      for (let x = 0; x < width; x += tileSize) {
        const isEven = Math.floor(x / tileSize) % 2 === Math.floor(y / tileSize) % 2;
        this.add
          .rectangle(x, y, tileSize, tileSize, isEven ? checkerColor1 : checkerColor2)
          .setOrigin(0);
      }
    }
  }

  createBorder() {
    const { width, height } = this.cameras.main;
    const borderWidth = 10;
    // const greenColor = 0x4a9b3a;

    // Top border
    const topBorder = this.add.rectangle(width / 2, borderWidth / 2, width, borderWidth, greenColor);
    topBorder.setDepth(1000);
    
    // Bottom border
    const bottomBorder = this.add.rectangle(width / 2, height - borderWidth / 2, width, borderWidth, greenColor);
    bottomBorder.setDepth(1000);
    
    // Left border
    const leftBorder = this.add.rectangle(borderWidth / 2, height / 2, borderWidth, height, greenColor);
    leftBorder.setDepth(1000);
    
    // Right border
    const rightBorder = this.add.rectangle(width - borderWidth / 2, height / 2, borderWidth, height, greenColor);
    rightBorder.setDepth(1000);
  }

  // TopIcons đã được render bởi React TopBar component - không cần vẽ trong Phaser

  createMainPanels() {
    const { width, height } = this.cameras.main;
    const panelWidth = 220;
    const panelHeight = 280;
    const spacing = 70;
    const startX = (width - (panelWidth * 3 + spacing * 2)) / 2;
    const startY = 120;

    // ADVENTURE Panel (Locked)
    this.createPanel(
      startX,
      startY,
      panelWidth,
      panelHeight,
      "ADVENTURE",
      "panel-adventure",
      true
    );

    // TREASURE HUNT Panel (Active)
    this.createPanel(
      startX + panelWidth + spacing,
      startY,
      panelWidth,
      panelHeight,
      "TREASURE HUNT",
      "panel-treasure-hunt",
      false
    );

    // BATTLE Panel (Locked)
    this.createPanel(
      startX + (panelWidth + spacing) * 2,
      startY,
      panelWidth,
      panelHeight,
      "BATTLE",
      "panel-battle",
      true
    );
  }

  createPanel(x, y, width, height, label, imageKey, isLocked) {
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    
    // Panel background với border trắng (fallback nếu không có image)
    let panelBg;
    if (!this.textures.exists(imageKey) || this.textures.get(imageKey).key === "__MISSING") {
      panelBg = this.add
        .rectangle(centerX, centerY, width, height, 0xffffff)
        .setStrokeStyle(3, 0x000000)
        .setOrigin(0.5)
        .setDepth(100);
    }

    // Panel image - sử dụng hình ảnh thật
    let panelImage;
    // Debug: check texture
    console.log(`Checking texture for ${imageKey}:`, this.textures.exists(imageKey));
    
    if (this.textures.exists(imageKey)) {
      const texture = this.textures.get(imageKey);
      console.log(`Texture ${imageKey} exists, key:`, texture.key);
      
      if (texture.key !== "__MISSING" && texture.key !== "__DEFAULT") {
        try {
          panelImage = this.add
            .image(centerX, centerY, imageKey)
            .setDisplaySize(width, height)
            .setOrigin(0.5)
            .setDepth(100);
          console.log(`Panel image ${imageKey} displayed successfully`);
        } catch (e) {
          console.error(`Error displaying ${imageKey}:`, e);
        }
      }
    }
    
    // Fallback: vẽ panel bằng shape nếu không có image
    if (!panelImage) {
      console.warn(`Using fallback for ${imageKey} - image not found or failed to load`);
      const fallbackBg = this.add
        .rectangle(centerX, centerY, width, height, 0xffffff)
        .setStrokeStyle(3, 0x000000)
        .setOrigin(0.5)
        .setDepth(100);
      
      // Placeholder area
      this.add
        .rectangle(centerX, centerY - 80, width - 20, height - 120, 0xcccccc)
        .setAlpha(0.3)
        .setOrigin(0.5)
        .setDepth(101);
    }

    // Lock overlay nếu bị khóa (hiển thị trên panel image)
    if (isLocked) {
      // Lock icon (padlock style)
      const lockSize = 50;
      const lockX = centerX;
      const lockY = centerY - 20;

      // Lock body
      const lockBody = this.add
        .rectangle(lockX, lockY + 5, lockSize * 0.6, lockSize * 0.7, 0x666666)
        .setStrokeStyle(3, 0x000000)
        .setOrigin(0.5)
        .setDepth(102);

      // Lock shackle (U shape)
      const lockShackle = this.add
        .arc(lockX, lockY - 8, lockSize * 0.3, 180, 0, false, 0x666666)
        .setStrokeStyle(3, 0x000000)
        .setOrigin(0.5)
        .setDepth(102);

      // "COMING SOON" text
      const comingSoonText = this.add
        .text(lockX, lockY + 35, "COMING SOON", {
          fontSize: "18px",
          fontFamily: "Arial",
          color: "#ffffff",
          stroke: "#000000",
          strokeThickness: 3,
          fontStyle: "bold",
        })
        .setOrigin(0.5)
        .setDepth(102);
    }

    // Label button (brown button style) - có thể đặt trên panel image
    // Fixed width cho tất cả buttons để có cùng kích thước
    const buttonWidth = 220;
    const buttonHeight = 40;
    const button = this.add
      .rectangle(centerX, y + height - 20, buttonWidth, buttonHeight, 0x8b4513)
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .setDepth(101);

    // Button highlight
    this.add
      .rectangle(centerX, y + height - 25, buttonWidth - 4, 5, 0xa0522d)
      .setOrigin(0.5)
      .setDepth(101);

    const buttonText = this.add
      .text(centerX, y + height - 20, label, {
        fontSize: "16px",
        fontFamily: "Arial",
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2,
        fontStyle: "bold",
      })
      .setOrigin(0.5)
      .setDepth(102);

    // Click handler cho TREASURE HUNT
    if (!isLocked && label === "TREASURE HUNT") {
      button.on("pointerdown", () => {
        this.scene.start("TreasureHunt");
      });

      button.on("pointerover", () => {
        button.setTint(0x6b3413);
        button.setScale(1.05);
      });

      button.on("pointerout", () => {
        button.clearTint();
        button.setScale(1);
      });
    } else if (isLocked) {
      button.setAlpha(0.6);
    }
  }

  // BottomNavigation đã được render bởi React BottomNav component - không cần vẽ trong Phaser
  // Watermark có thể thêm vào React component nếu cần
}

