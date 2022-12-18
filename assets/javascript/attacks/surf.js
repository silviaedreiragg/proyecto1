class Surf {
    constructor(ctx, squirtleAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'water'
        this.istamine = 10
        this.sound = new Audio(URL='')
        this.squirtleAttacks = document.getElementById('squirtleAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)

    }
}