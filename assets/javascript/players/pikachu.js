class Pikachu extends Pokemon {
    constructor(ctx, type, life, onAttack) {
        super(ctx, type, life);
        this.ctx = ctx
        this.onAttack =  
        this.w = 200
        this.h = 150
        this.name = 'pikachu'
        this.type = 'electric'
        this.life = 100
        this.img = new Image()
        this.img.src = "https://img.pokemondb.net/sprites/diamond-pearl/normal/pikachu-f.png"
        this.tick = 0
        this.sound = new Audio('./assets/sounds/pika-pika.mp3')
        this.attacks = [
            { electric: 'IMPACTRUENO' },
            { normal: 'ATAQUE-RAPIDO' },
            { defense: 'LATIGO' },
            { electric: 'CHISPA' }
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

    hit(attack) {
    }
} 
