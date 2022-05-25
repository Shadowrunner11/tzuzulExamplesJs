import { Dwarf, Elf, Human } from "./models/Archetypes.js"

const TobyElElfo = new Elf("Toby")
const GandalfElHumano = new Human("Gandalf")

while(true){   
    
    alert("Toby's turn")
    TobyElElfo.atacar(GandalfElHumano)
    console.log(`%c${TobyElElfo.toString()}`,`color:red`)
    console.log(`%c${GandalfElHumano.toString()}`,`color:blue`) 
    if(GandalfElHumano.isDead()){
        console.log("Toby wins")
        break
    }

    alert("Gandalf's turn")
    GandalfElHumano.atacar(TobyElElfo)
    console.log(`%c${TobyElElfo.toString()}`,`color:red`)
    console.log(`%c${GandalfElHumano.toString()}`,`color:blue`) 
    if(TobyElElfo.isDead()){
        console.log("Gandalf wins")
        break
    }
  
}