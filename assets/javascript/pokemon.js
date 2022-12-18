class Pokemon {

    constructor(ctx, type, life) {
        this.ctx = ctx
        this.type = type
        this.life = life
        this.x = 10
        this.y = 150
        this.w = 200
        this.h = 150
        this.vx = 0
        this.vy = 1.5
        
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