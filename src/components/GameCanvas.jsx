import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import HomeScene from '../scenes/HomeScene'
import TreasureHuntScene from '../scenes/TreasureHuntScene'
import { useGameStore } from '../store/gameStore'

export default function GameCanvas() {
  const gameRef = useRef(null)
  const containerRef = useRef(null)
  const { setGameInstance } = useGameStore()

  useEffect(() => {
    if (!containerRef.current || gameRef.current) return

    // Tạo Phaser game instance
    const config = {
      type: Phaser.AUTO,
      width: 960,
      height: 540,
      parent: containerRef.current,
      backgroundColor: '#a8d8f0',
      scene: [HomeScene, TreasureHuntScene],
      pixelArt: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    }

    gameRef.current = new Phaser.Game(config)
    setGameInstance(gameRef.current)

    // Cleanup
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true)
        gameRef.current = null
      }
    }
  }, [setGameInstance])

  return <div ref={containerRef} id="phaser-game-container" />
}

