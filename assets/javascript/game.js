class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.interval = null
      this.background = new Background(ctx)
      this.player = new Pikachu(this.ctx, this.onPlayerAttack)
      this.enemy = new Charmander(this.ctx, this.onEnemyAttack)
      this.tick = 60 * 5
      this.audio = new Audio('./assets/sounds/comienzo-batalla.mp3')

    }
  
    start() {
      this.audio.play()
      this.player.sound.play()
      

      this.interval = setInterval(() => {
        this.clear()
        this.background.draw()
        this.player.draw() 
       
        
      }, 1000 / 60)
    }

    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth)
    }

    onPlayerAttack() {
      this.player.hit(attack)
    }

    onEnemyAttack() {
      this.enemy.hit(attack)
    }

    draw() {

    }
  
  }