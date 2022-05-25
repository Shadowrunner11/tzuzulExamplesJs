import { LifeBar, ManaBar } from "./Bar.js";

class BaseCharacter{
    
    #life;
    #mana;

    constructor(clase, nombre, criticalRate, lifePoints, manaPoints, attack,level,expBase, spells ){
        if (this.constructor == BaseCharacter) throw new Error("Abstract classes can't be instantiated.");
        this.clase = clase
        this.nombre = nombre
        this.crticalRate = criticalRate
        this.#life = new LifeBar(lifePoints)
        this.#mana =  new ManaBar(manaPoints)
        this.attack = attack
        this.level = level
        this.exp = expBase
        this.spells = spells
    }
    atacar(foe){
        foe.getDamaged(this.crticalRate, this.attack)
    }
    getDamaged(criticalRate, attack){
        const rate  =  Math.ceil(Math.random()*(100-criticalRate))+criticalRate

        const pointOfDamage =rate>=98? attack*2: attack
        
        this.#life.actualPoints-=pointOfDamage
        
        if(this.isDead()){
            this.#life.actualPoints=0
        }


    }
    spendMana(mana){
        this.#mana.actualPoints-=mana
    }
    #levelUp(){
        this.level+=1
    }
    getLife(){
        return Number(this.#life)
    }
    isDead(){
        return this.#life.actualPoints<=0
    }
    toString(){
        return "\n"+this.nombre+"\n"+this.#life.toString() + "\n" + this.#mana.toString()
    }
}

export default BaseCharacter




