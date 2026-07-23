import garfield from './assets/garfield.jpg';
import rickroll from './assets/rickroll-roll.gif';
import sixSeven from './assets/six-seven.gif';
import brainrot from './assets/Tralalero_Tralala.webp';
import johnCena from './assets/john-cena.gif';
import chungus from './assets/Big_Chungus.png';

export function calculate(trait1,trait2){
    let output = NaN;
    // "Be Careful Around the Fabric of Reality, Garfield"
    if ((trait1 === "absurd" && trait2 === "strange") || (trait1 === "strange" && trait2 === "absurd")) {
        output = garfield;
    }
    // Rickroll
    else if ((trait1 === "classic" && trait2 === "modern") || (trait1 === "modern" && trait2 === "classic")) {
        output = rickroll;
    }
    // 67 Meme
    else if ((trait1 === "absurd" && trait2 === "modern") || (trait1 === "modern" && trait2 === "absurd")) {
        output = sixSeven;
    }
    // Italian Brainrot
    else if ((trait1 === "modern" && trait2 === "strange") || (trait1 === "strange" && trait2 === "modern")) {
        output = brainrot;
    }
    // And His Name is John Cena
    else if((trait1 === "absurd" && trait2 === "classic") || (trait1 === "classic" && trait2 === "absurd")) {
        output = johnCena;
    }
    // Big Chungus
    else if((trait1 === "strange" && trait2 === "classic") || (trait1 === "classic" && trait2 === "strange")) {
        output = chungus;
    }

    return output;
}