class Lanzallamas {
    constructor(ctx,charmanderAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'fire'
        this.istamine = 10
        this.sound = new Audio(URL='')
        this.charmanderAttacks = document.getElementById('charmanderAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)

    }
}