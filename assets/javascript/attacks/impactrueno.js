class Impactrueno {
    constructor(ctx, pikachuAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'electric'
        this.stamine = 10
        this.pikachuAttacks = document.getElementById('pikachuAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)
    }

    perform() {
        if (this.stamine > 0) {
            this.onAttack(this)
        }
    }

    render() {
        this.container.appendChild(this.btn)
    }


}