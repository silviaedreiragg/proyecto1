class Charmander extends Pokemon {
    constructor(ctx, type, life) {
        super(ctx, type, life);

        
        this.w = 200
        this.h = 150
        this.name = 'charmander'
        this.type = 'fire'
        this.life = 100
        this.img = new Image()
        this.img.src = "https://img.pokemondb.net/sprites/diamond-pearl/normal/charmander.png"
        this.tick = 0
        this.sound = new Audio('')
        this.attacks = [
            { normal: 'MORDISCO' },
            { FIRE: 'ASCUAS' },
            { fire: 'LANZALLAMAS' },
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