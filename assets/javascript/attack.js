class Attack {
    constructor(name, type, stamine, audio, effect) {
        this.name = name
        this.type = type
        this.stamine = stamine
        this.audio = new Audio(audio)
        this.effect = effect

    }

    execute(target) {
        // target.receiveDamage()
        // target.drawAttack(this);
    }

    setContext(ctx) {
        this.ctx = ctx;
    }
}