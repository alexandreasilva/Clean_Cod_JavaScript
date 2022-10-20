"use strict"

class Pessoa {
    constructor() {

        this.idade = 0;

        setInterval(() => {
            console.log(this.idade++);
        }, 2000);

    }
}

const p1 = new Pessoa()