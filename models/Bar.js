class Bar {
    constructor(name,maxPoints){
        this.name = name
        this.maxPoints = maxPoints
        this.actualPoints = maxPoints
    }

    fill(points){
        this.actualPoints+=points
        if(this.actualPoints>this.maxPoints)this.actualPoints=this.maxPoints
    }
    toString(){
        const barPercentaje  = this.actualPoints*50/this.maxPoints
        return  this.name+": "+"#".repeat(Math.round(barPercentaje))
    }
}

class LifeBar extends Bar {
    constructor(maxPoints){
        super("Life", maxPoints)
    }
}

class ManaBar extends Bar {
    constructor(maxPoints){
        super("Mana", maxPoints)
    }  
}

export {LifeBar, ManaBar}