class Game {
  constructor(ctx, pokemons) {
    this.ctx = ctx
    this.interval = null
    this.background = new Background(ctx)
    this.UI = new UserInterface()

    this.player = pokemons[0];
    this.player.setContext(this.ctx);
    this.player.setInitialPosition(10, 150);

    this.enemy = pokemons[2];
    this.enemy.setContext(this.ctx);
    this.enemy.setInitialPosition(400, 30);

    this.tick = 60 * 5
    this.audio = new Audio('./assets/sounds/comienzo-batalla.mp3')
  }

  start() {
    this.audio.play()
    this.player.sound.play()
    this.enemy.sound.play()


    this.interval = setInterval(() => {
      this.clear()
      this.draw()
    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth)
  }

  draw() {
    this.background.draw()
    this.player.draw()
    this.enemy.draw()
    this.UI.draw(this.player)
  }

  playerAttack(attack) {
    // Bloquear UI
    // this.isInteractive = false;

    // attack.execute(this.enemy);
    // this.enemyAttack();
  }

  enemyAttack() {
    // 1. Elegir ataque aleatorio
    // const attack = this.enemy.getRandomAttack();

    // 2. Ejecutar ataque
    // attack.execute(this.player);

    // 3. Desbloquear UI
    // this.isInteractive = true
  }

}