class Game {
  constructor(ctx, pokemons) {
    this.ctx = ctx
    this.interval = null
    this.isInteractive = true
    this.background = new Background(ctx)
    this.UI = new UserInterface()

    this.player = pokemons[0];
    this.player.setContext(this.ctx);
    this.player.setInitialPosition(10, 150);

    this.enemy = pokemons[3];
    this.enemy.setContext(this.ctx);
    this.enemy.setInitialPosition(400, 30);

    this.tick = 60 * 5
    this.audio = new Audio('./assets/sounds/comienzo-batalla.mp3')
  }

  start() {
    this.audio.play()
    this.player.sound.play()
    this.enemy.sound.play()
    this.UI.initUI(this)


    this.interval = setInterval(() => {
      this.clear()
      this.draw()
    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth)
  }

  drawLifeBars() {
    const playerLife = document.getElementById('playerLifeBar')
    playerLife.value = this.player.life

    const enemyLife = document.getElementById('enemyLifeBar')
    enemyLife.value = this.enemy.life
  }

  blockUI() {
    const playerAttacks = document.getElementById('player-attacks')
    playerAttacks.style.display = `none`
  }

  unblockUI() {
    const playerAttacks = document.getElementById('player-attacks')
    playerAttacks.style.display = `block`
  }

  drawAttack() {
    if(this.attack){
      this.attack.draw();
    }
  }

  draw() {
    this.background.draw()
    this.player.draw()
    this.enemy.draw()
    this.drawLifeBars()
    this.drawAttack();
  }

  executeAttack(attack) {
    const playerAttacks = document.getElementById('player-attacks')
    playerAttacks.style.display = 'none'
   
    playerAttacks.addEventListener('click', () => {
      this.isInteractive = false

      this.interval = setInterval(() => {
        this.player.attack.execute()
        this.player.attack.animate()
      }, 1000 / 60)
    })
  }

  getRandomAttack() {
    return this.enemy.attacks[Math.floor(Math.random * this.enemy.attacks.length)]
  }

  enemyAttack() {
    const attack = this.enemy.getRandomAttack()
    attack.execute(this.player)
    this.isInteractive = true


    // 1. Elegir ataque aleatorio
    // const attack = this.enemy.getRandomAttack();

    // 2. Ejecutar ataque
    // attack.execute(this.player);

    // 3. Desbloquear UI
    // this.isInteractive = true
  }

}