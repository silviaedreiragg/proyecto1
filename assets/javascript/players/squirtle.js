class Squirtle extends Pokemon {
    constructor(ctx, type, life) {
        super(ctx, type, life);
        this.ctx = ctx
        
        this.w = 200
        this.h = 150
        this.name = 'squirtle'
        this.type = 'water'
        this.life = 100
        this.img = new Image()
        this.img.src = "https://img.pokemondb.net/sprites/diamond-pearl/normal/squirtle.png"
        this.tick = 0
        this.sound = new Audio('')
        this.attacks = [
            { normal: 'PLACAJE' },
            { water: 'PISTOLA-AGUA' },
            { water: 'SURF' },
            { defense: 'DOBLE-EQUIPO' }
        ]
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h)

        this.animate()
    }

    sound() {
        this.sound.play()
    }

    animate() {
        this.y += this.vy
            if (this.y <= 120 || this.y >= 170) {
                this.vy *= -1
            }

    }
}