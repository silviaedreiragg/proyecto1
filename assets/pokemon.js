class Pokemon {

    constructor(ctx, type, life) {
        this.ctx = ctx
        this.type = type
        this.life = life
    }

    draw() {
        this.ctx.drawImage(
            this.img, this.x, this.y)
        
    }
    receivedDamage(damage) {
        this.life -= damage
    }

    attack() {
        
    }
}