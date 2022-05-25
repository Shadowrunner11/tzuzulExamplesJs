import BaseCharacter from "./BaseCharacter.js";


export class Elf extends BaseCharacter{
    constructor(name){
        super("Elfo", name, 89, 800, 1000,98,0,1000,[])
    }
}

export class Human extends BaseCharacter{
    constructor(name){
        super("Human", name, 70, 1000, 400, 100, 0, 800, [])
    }
}

export class Dwarf extends BaseCharacter{
    constructor(name){
        super("Dwarf", name, 30, 1200, 200,150, 1300,[])
    }
}