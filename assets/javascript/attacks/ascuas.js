class Ascuas {
    constructor(ctx, charmanderAttacks, onAttack) {
        this.ctx = ctx
        this.sound = new Audio(URL='')
        this.type = 'fire'
        this.stamine = 10
        this.charmanderAttacks = document.getElementById('charmanderAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)


    }
}