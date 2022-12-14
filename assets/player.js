class Pikachu {
    constructor(type, life) {
        this.type = electric
        this.life = 100
        this.img = new Image()
        this.img.src = './images/pikachu.jpeg'
        this.electricAtack = newAudio('./sounds/pika-pika.mp3')
        this.attacks = [
            {electric: IMPACTRUENO},
            {normal: ATAQUE-RAPIDO},
            {defense: LATIGO},
            {electric: CHISPA}
        ]
    }
    receivedDamage() {
        
    }

    attack() {
        let index = Math.round(Math.random() * this.attacks.length);
        return this.attacks[index]
    }
}


