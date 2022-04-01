
//ENGLISH TO ENGLISH
function LetterChanges (str) {
    return str.replace(/[a-zA-Z]/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0)+1);
    });
}
console.log(LetterChanges('abc'));
//THIS ALSO WORKS!!

// //ENGLISH TO CAPITAL ENGLISH
// const string = "abca";
// const newText = string.replaceAll("a", "A");
// console.log(newText);
// //YIPPEE! IT WORKS!

//HEBREW LETTERS, MEM SOFI
// console.log(\u05DD);

//ENGLISH TO HEBREW, "A"
// let \u05DD;
// const string = "abca";
// const newText = string.replaceAll("abca", \u05DD);
// console.log("I am " + &#1494; + " a student.");
console.log("I am נה a student.");
//YIPPEE! IT WORKS!

// REPLACEMENTS IN ACTION
// let text = "Mr Blue has a bluehouse and a blue car. Miss Green has a green car.";
// let result = text.replace(/blue/gi, "red");
// console.log(result);
//YIPPEE AGAIN!!

// let textEng = "";

// function lowerCase() {
//     let textEngLC;
//     textEngLC = textEng.toLowerCase();
// return textEngLC;
// }



// console.log(text)
let promptText = "AabU";
let textEng = promptText.toLowerCase();
console.log(textEng)

let textEngToHeb = textEng.replaceAll("a", "א").replaceAll("b", "ב").replaceAll("c", "ס").replaceAll("d", "ד").replaceAll("e", "ע").replaceAll("f", "פ").replaceAll("g", "ג").replaceAll("h", "ה").replaceAll("i", "י").replaceAll("j", "י").replaceAll("k", "כ").replaceAll("l", "ל").replaceAll("m", "מ").replaceAll("n", "נ").replaceAll("o", "ו").replaceAll("p", "ף").replaceAll("q", "ק").replaceAll("r", "ר").replaceAll("s", "ש").replaceAll("t", "ט").replaceAll("u", "ן").replaceAll("v", "ך").replaceAll("w", "צ").replaceAll("x", "ץ").replaceAll("y", "ח").replaceAll("z", "ז")

console.log(textEngToHeb)

// function replaceToHebrew(i, j) {
// if (let i = 0; i < 4; i++) {
//     if (i = "a") {
//         j = "A"
//     } else if (i = "u") {
//         j = "U"
//     }

//     let newText = text.replaceAll("a", "A" "u", "U")
// console.log(newText)

// let newText = text.replace(i, j)
//    switch (i)
//    {
//        case "a":
//            replace("a", "A");
//            break;
//            case "b":
//                replace("b", "B")
//    } 
   
// }   

// //ENGLISH TO CAPITAL ENGLISH
// const string = "abca";
// const newText = string.replaceAll("a", "A");
// console.log(newText);
// //YIPPEE! IT WORKS!

// forEach (char in text)
// {
//     switch (char)
//     {
//         case "a":
//             replace(/a/gi, "A"); break;
//         case "b":
//             replace(/b/gi, "ב"); break;
        // case 'e': counte++; j++; break;
        // case 'i': counti++; j++; break;
        // case 'o': counto++; j++; break;
        // case 'u': countu++; j++; break;
//     }
//     console.log(textHeb);
// }
// }

// replaceToHebrew();

// function replaceToHebrew() {
// let textEng = "";
// let textHeb = "";
// switch 
// textHeb = textEng.replace
// }

// var car;

// function latcyr() {
// car = document.transcription.text2.value;
// car = car.replace(/[hx]/g, "Ñ…");
// car = car.replace(/a/g, "Ð°");
// car = car.replace(/b/g, "Ð±");
// car = car.replace(/v/g, "Ð²");
// car = car.replace(/g/g, "Ð³");
// document.transcription.text1.value = car;
// console.log(latcyr("abv"))
// }

//SIMPLE ENGLISH TO MIXED ENGLISH

let promptText2 = "aabu aabut aabujen";
// myArray = text.split(" ");
// let word = myArray[1];

let myArray = promptText2.split("");
let wordArray = [];

for (i=0; i<myArray.length; i=i+2) {
    wordArray.push(myArray[i+1]);
  wordArray.push(myArray[i]);
}

console.log(wordArray.join(""));


// MIXED ENGLISH TO HEBREW
let textMixEng = wordArray.join()

let textMixEngToHeb = textMixEng.replaceAll("a", "א").replaceAll("b", "ב").replaceAll("c", "ס").replaceAll("d", "ד").replaceAll("e", "ע").replaceAll("f", "פ").replaceAll("g", "ג").replaceAll("h", "ה").replaceAll("i", "י").replaceAll("j", "י").replaceAll("k", "כ").replaceAll("l", "ל").replaceAll("m", "מ").replaceAll("n", "נ").replaceAll("o", "ו").replaceAll("p", "ף").replaceAll("q", "ק").replaceAll("r", "ר").replaceAll("s", "ש").replaceAll("t", "ט").replaceAll("u", "ן").replaceAll("v", "ך").replaceAll("w", "צ").replaceAll("x", "ץ").replaceAll("y", "ח").replaceAll("z", "ז")

console.log(textMixEngToHeb.replaceAll(",", ""))

//SIMPLE HEBREW TO ENGLISH
let textHeb = "אאבן";

let textHebToEng = textHeb.replaceAll("א", "a").replaceAll("ב", "b").replaceAll("ס", "c").replaceAll("ד", "d").replaceAll("ע", "e").replaceAll("פ", "f").replaceAll("ג", "g").replaceAll("ה", "h").replaceAll("י", "i").replaceAll("י", "j").replaceAll("כ", "k").replaceAll("ל", "l").replaceAll("מ", "m").replaceAll("נ", "n").replaceAll("ו", "o").replaceAll("ף", "p").replaceAll("ק", "q").replaceAll("ר", "r").replaceAll("ש", "s").replaceAll("ט", "t").replaceAll("ן", "u").replaceAll("ך", "v").replaceAll("צ", "w").replaceAll("ץ", "x").replaceAll("ח", "y").replaceAll("ז", "z")

console.log(textHebToEng)

//MIXED ENGLISH TO SIMPLE ENGLISH

let promptText3 = "aauba batua bajune";
// myArray = text.split(" ");
// let word = myArray[1];

let myArray2 = promptText3.split("");
let wordArray2 = [];

for (i=0; i<myArray2.length; i=i+2) {
    wordArray2.push(myArray2[i+1]);
  wordArray2.push(myArray2[i]);
}

console.log(wordArray2.join(""));

