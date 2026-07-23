export function calculate(trait1,trait2){
    let output = "";
    // 
    if ((trait1 === "absurd" && trait2 === "strange") || (trait1 === "strange" && trait2 === "absurd")) {
        output = "1";
    }
    // Rickroll
    else if ((trait1 === "classic" && trait2 === "modern") || (trait1 === "modern" && trait2 === "classic")) {
        output = "2";
    }
    // 67 meme
    else if ((trait1 === "absurd" && trait2 === "modern") || (trait1 === "modern" && trait2 === "absurd")) {
        output = "3";
    }
    // Italian brainrot
    else if ((trait1 === "modern" && trait2 === "strange") || (trait1 === "strange" && trait2 === "modern")) {
        output = "4";
    }
    // 
    else if((trait1 === "absurd" && trait2 === "classic") || (trait1 === "classic" && trait2 === "absurd")) {
        output = "5";
    }
    else if((trait1 === "strange" && trait2 === "classic") || (trait1 === "classic" && trait2 === "strange")) {
        output = "6";
    }

    return output;
}