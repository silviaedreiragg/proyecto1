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
        this.vy = 1.5
    }

    getAttackNames() {
        return this.attacks.map(attack => attack.name);
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, 200, 120);
        this.animate();
    }

    animate() {
        this.y += this.vy
        if (this.y <= (this.initialY - 20) || this.y >= (this.initialY + 20)) {
            this.vy *= -1
        }
    }

    receivedDamage(damage) {
        this.life -= damage
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