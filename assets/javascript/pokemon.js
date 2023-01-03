class Pokemon {

    constructor(name, type, life, imageSrc, soundSrc, attacks) {
        this.attacks = attacks;
        this.img = new Image();
        this.img.src = imageSrc;
        this.life = life;
        this.name = name;
        this.sound = new Audio(soundSrc);
        this.type = type;


        // This is constant per every pokemon
        this.w = 300
        this.h = 150
        this.vx = 0
        this.vy = 1.2
    }

    getAttackNames() {
        return this.attacks.map(attack => attack.name);
    }

    draw() {
        if (this.life > 0) {
            this.ctx.drawImage(this.img, this.x, this.y, 200, 120);
            this.animate();
        }
    }

    getRandomAttack() {
        const index = Math.floor(Math.random()*this.attacks.length)
        return this.attacks[index]
    }

    animate() {
        this.y += this.vy
        if (this.y <= (this.initialY - 10) || this.y >= (this.initialY + 10)) {
            this.vy *= -1
        }
    }

    receiveDamage(attack) {
        if (this.type === 'GRASS' && attack.type === 'FIRE') { this.life -= 30 }
        if (this.type === 'WATER' && attack.type === 'ELECTRIC') { this.life -= 30 }
        if (this.type === 'FIRE' && attack.type === 'WATER') { this.life -= 30 }
        if ((this.type === 'WATER' || this.type === 'ELECTRIC') && attack.type === 'GRASS') { this.life -= 30 }
        if (this.type === 'GRASS' && attack.type === 'WATER') { this.life -= 5 }
        if (this.type === 'FIRE' && attack.type === 'GRASS') { this.life -= 5 }
        if (this.type === 'WATER' && attack.type === 'FIRE') { this.life -= 5 }
        if (this.type === 'ELECTRIC' && attack.type === 'GRASS') { this.life -= 5 }
        if (attack.type === 'DEFENSE') { this.life = this.life}

       else { this.life -= 10 }
    }

    setContext(ctx) {
        this.ctx = ctx;
    }

    setInitialPosition(x, y) {
        this.initialX = x;
        this.initialY = y;
        this.x = x;
        this.y = y;
    }
}