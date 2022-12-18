class Chispa {
    constructor(ctx, pikachuAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'electric'
        this.stamine = 5
        this.sound = new Audio(URL='')
        this.pikachuAttacks = document.getElementById('pikachuAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)

    }
}