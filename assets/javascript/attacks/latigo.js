class Latigo {
    constructor(ctx, pikachuAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'defense'
        this.istamine = 25
        this.sound = new Audio(URL='')
        this.pikachuAttacks = document.getElementById('pikachuAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)

    }
}