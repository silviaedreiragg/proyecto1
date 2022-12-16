class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.interval = null
      this.background = new Background(ctx)
      this.pikachu = new Pikachu(ctx)
      this.tick = 60 * 5
      this.audio = new Audio('./assets/sounds/comienzo-batalla.mp3')

    }
  
    start() {
      this.audio.play()
      this.pikachu.sound.play()

      this.interval = setInterval(() => {
        this.draw() 
      }, 1000 / 60)
    }

    draw() {
      this.background.draw()
      this.pikachu.draw()
      
    }
  }