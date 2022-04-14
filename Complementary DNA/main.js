// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna) {
  //your code here
    let dnaArray = dna.split("");
    let newDnaArray = [];
    for (let i = 0; i < dnaArray.length; i++) {
        if (dnaArray[i] === "A") {
            newDnaArray.push("T");
        } else if (dnaArray[i] === "T") {
            newDnaArray.push("A");
        } else if (dnaArray[i] === "C") {
            newDnaArray.push("G");
        } else if (dnaArray[i] === "G") {
            newDnaArray.push("C");
        }
    }
    return newDnaArray.join("");
}