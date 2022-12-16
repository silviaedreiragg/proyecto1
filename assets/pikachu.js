class Pikachu extends Pokemon {
    constructor(ctx, name, type, life) {
        super(ctx, type, life);
        this.ctx = ctx
        this.x = 10
        this.y = 150
        this.w = 200
        this.h = 150
        this.name = 'pikachu'
        this.type = 'electric'
        this.life = 100
        this.img = new Image()
        this.img.src = './assets/images/pikachuMov.png'
        this.img.frames = 24
        this.img.frameIndex = 0
        this.tick = 0
        this.sound = new Audio('./assets/sounds/pika-pika.mp3')
        this.attacks = [
            {electric: 'IMPACTRUENO'},
            {normal: 'ATAQUE-RAPIDO'},
            {defense: 'LATIGO'},
            {electric: 'CHISPA'}
        ]
    }

    draw() {
        this.ctx.drawImage(
            this.img, 
            this.img.frameIndex * this.img.width / this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h)
    }

    sound() {
        this.sound.play()
    }

    animate() {
        this.tick++

        if (this.tick > 15) {
            this.tick = 0
            this.img.frameIndex++

            if (this.img.frameIndex > this.img.frames -1) {
                this.img.frameIndex = 0
            }
        }
    }
}