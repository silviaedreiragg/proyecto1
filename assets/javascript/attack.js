class Attack {
    constructor(name, type, stamine, audio, effect) {
        this.name = name
        this.type = type
        this.stamine = stamine
        this.audio = new Audio(audio)
        this.effect = new Image()
        this.effect.src = effect
        this.w = 300
        this.h = 150
    }

    draw() {
        ctx.drawImage(this.effect, this.x, this.y, this.w, this.h);
        this.animate()
    }

    animate() {
        this.x += this.vx
        this.y -= this.vy
    }

    execute(game, target) {
        game.blockUI()
        if (target === game.enemy) {
            this.x = 0;
            this.y = 150;
            this.vx = 3.5;
            this.vy = 1.5;
        }
        if (target === game.player) { 
            this.x = 300
            this.y = 30
            this.vx = -3.5
            this.vy = -1.5
        }

        game.attack = this;
        setTimeout(() => {
            target.receiveDamage(this);
            const isEnemyAttacking = target === game.player
            game.finishTurn(isEnemyAttacking)

        }, 1800) 
    }

   

}