export function calculate(trait1,trait2){
    let output = "";
    if ((trait1 === "absurd" && trait2 === "confusing") || (trait1 === "confusing" && trait2 === "absurd")) {
        output = "1";
    }
    else if ((trait1 === "classic" && trait2 === "modern") || (trait1 === "modern" && trait2 === "classic")) {
        output = "2";
    }
    else if ((trait1 === "absurd" && trait2 === "modern") || (trait1 === "modern" && trait2 === "absurd")) {
        output = "3";
    }
    else if ((trait1 === "modern" && trait2 === "confusing") || (trait1 === "confusing" && trait2 === "modern")) {
        output = "4";
    }
    else if((trait1 === "absurd" && trait2 === "classic") || (trait1 === "classic" && trait2 === "absurd")) {
        output = "5";
    }
    else if((trait1 === "confusing" && trait2 === "classic") || (trait1 === "classic" && trait2 === "confusing")) {
        output = "6";
    }

    return output;
}