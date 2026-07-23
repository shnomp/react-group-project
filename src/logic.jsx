export function calculate(trait1,trait2){
    let output = "";
    // "Be Careful Around the Fabric of Reality, Garfield"
    if ((trait1 === "absurd" && trait2 === "strange") || (trait1 === "strange" && trait2 === "absurd")) {
        output = "1";
    }
    // Rickroll
    else if ((trait1 === "classic" && trait2 === "modern") || (trait1 === "modern" && trait2 === "classic")) {
        output = "2";
    }
    // 67 Meme
    else if ((trait1 === "absurd" && trait2 === "modern") || (trait1 === "modern" && trait2 === "absurd")) {
        output = "3";
    }
    // Italian Brainrot
    else if ((trait1 === "modern" && trait2 === "strange") || (trait1 === "strange" && trait2 === "modern")) {
        output = "4";
    }
    // And His Name is John Cena
    else if((trait1 === "absurd" && trait2 === "classic") || (trait1 === "classic" && trait2 === "absurd")) {
        output = "5";
    }
    // Big Chungus
    else if((trait1 === "strange" && trait2 === "classic") || (trait1 === "classic" && trait2 === "strange")) {
        output = "6";
    }

    return output;
}