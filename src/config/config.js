export default {
  type: Phaser.CANVAS,
  width: 800,
  height: 800,

  render: {
    pixelArt: true,
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      //debug: true,
    },
  },
};
