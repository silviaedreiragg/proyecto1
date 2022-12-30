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
      this.isAlive()
    }, 1000 / 60)
  }

  isAlive() {
    if (this.player.life <= 0) {
      this.UI.gameOver()
    }
    if (this.enemy.life <= 0) {
      this.UI.youWin()
    }

  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth)
  }

  finishTurn(isEnemyAttacking) {
    if (isEnemyAttacking) {
      this.unblockUI()
    }

    else {
      this.enemy.getRandomAttack().execute(this, this.player)
    }
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
    if (this.attack) {
      this.attack.draw();
    }
  }

  draw() {
    this.background.draw()
    this.player.draw()
    this.enemy.draw()
    this.drawLifeBars()
    this.drawAttack()
  }

}