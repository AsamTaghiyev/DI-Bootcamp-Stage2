let sentence = "The movie is  that bad, I liked it";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if ( wordBad > wordNot) {
    let first = sentence.substring(0, wordNot);
    let second = "good";
    let third = sentence.substring(wordBad + 3); 
    let newSentence = first + second + third;
    console.log(newSentence);
} else {
    console.log(sentence);
}

// !!!wordNot !== -1 && wordBad !== -1 && sozun olmadigini yoxlamaq ucun ayrica else if yaza bilersen



