// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  let words = str.split(" ");
  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    reversedWords.push(words[i].split("").reverse().join(""));
    }
    return reversedWords.join(" ");
}
