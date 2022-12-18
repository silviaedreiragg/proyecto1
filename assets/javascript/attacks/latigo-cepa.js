class LatigoCepa {
    constructor(ctx, bulbasaurAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'grass'
        this.istamine = 15
        this.sound = new Audio(URL='')
        this.bulbasaurAttacks = document.getElementById('bulbasaurAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)

    }
}