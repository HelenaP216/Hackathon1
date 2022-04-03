// function obeyRadio() {
//     let radio1 = document.getElementById("engToHeb")
//     console.log(radio1.innerHTML)
// }

function changeEngToHeb() {
    let textBox = document.getElementById("origText");
    let promptText = textBox.value;
    console.log(promptText)
    let textEng = promptText.toLowerCase();
    let textEng1 = textEng.replace(/[^1-9a-zA-z ]/g, '')
    console.log(textEng)
    
    let textEngToHeb = textEng1.replaceAll("a", "א").replaceAll("b", "ב").replaceAll("c", "ס").replaceAll("d", "ד").replaceAll("e", "ע").replaceAll("f", "פ").replaceAll("g", "ג").replaceAll("h", "ה").replaceAll("i", "י").replaceAll("j", "י").replaceAll("k", "כ").replaceAll("l", "ל").replaceAll("m", "מ").replaceAll("n", "נ").replaceAll("o", "ו").replaceAll("p", "ף").replaceAll("q", "ק").replaceAll("r", "ר").replaceAll("s", "ש").replaceAll("t", "ט").replaceAll("u", "ן").replaceAll("v", "ך").replaceAll("w", "צ").replaceAll("x", "ץ").replaceAll("y", "ח").replaceAll("z", "ז")
    
    console.log(textEngToHeb)
    let newBox = document.getElementById("newText");
    console.log(newBox);
    newBox.value = textEngToHeb;
    console.log(newBox.value);
    }


    function changeEngToMixedEng() {
        let textBox = document.getElementById("origText");
        console.log(textBox)
        let promptText = textBox.value;
        console.log(promptText)
        let textEng2 = promptText.toLowerCase();
        let textEng2a = textEng2.replace(/[^1-9a-zA-z ]/g, '')
        let myArray = textEng2a.split("");
        let wordArray = [];
        console.log(myArray)
        for (i=0; i<myArray.length; i=i+2) {
            wordArray.push(myArray[i+1]);
          wordArray.push(myArray[i]);
        }
          console.log(wordArray)
          let textMixEng = wordArray.join("")
          console.log(textMixEng)
let newBox = document.getElementById("newText");
console.log(newBox);
newBox.value = textMixEng;
console.log(newBox.value);

return textMixEng;
        }

        function changeMixedEngToHeb() {
            let textBox = document.getElementById("origText");
            let promptText = textBox.value;
            console.log(promptText)
            let textEng3 = promptText.toLowerCase();
            let textEng3a = textEng3.replace(/[^1-9a-zA-z ]/g, '')
            let myArray = textEng3a.split("");
            let wordArray = [];
            console.log(myArray)
            for (i=0; i<myArray.length; i=i+2) {
                wordArray.push(myArray[i+1]);
              wordArray.push(myArray[i]);
            }
            let textMixEng = wordArray.join("")
            console.log(textMixEng)
            let textMixEngToHeb = textMixEng.replaceAll("a", "א").replaceAll("b", "ב").replaceAll("c", "ס").replaceAll("d", "ד").replaceAll("e", "ע").replaceAll("f", "פ").replaceAll("g", "ג").replaceAll("h", "ה").replaceAll("i", "י").replaceAll("j", "י").replaceAll("k", "כ").replaceAll("l", "ל").replaceAll("m", "מ").replaceAll("n", "נ").replaceAll("o", "ו").replaceAll("p", "ף").replaceAll("q", "ק").replaceAll("r", "ר").replaceAll("s", "ש").replaceAll("t", "ט").replaceAll("u", "ן").replaceAll("v", "ך").replaceAll("w", "צ").replaceAll("x", "ץ").replaceAll("y", "ח").replaceAll("z", "ז")
            console.log(textMixEngToHeb)
            let newBox = document.getElementById("newText");
console.log(newBox);
newBox.value = textMixEngToHeb;
console.log(newBox.value);

        }
 
        function returnHebToEng() {
            let textBox = document.getElementById("origText");
            let promptText = textBox.value;
            console.log(promptText)
            
            let textHebToEng = promptText.replaceAll("א", "a").replaceAll("ב", "b").replaceAll("ס", "c").replaceAll("ד", "d").replaceAll("ע", "e").replaceAll("פ", "f").replaceAll("ג", "g").replaceAll("ה", "h").replaceAll("י", "i").replaceAll("י", "j").replaceAll("כ", "k").replaceAll("ל", "l").replaceAll("מ", "m").replaceAll("נ", "n").replaceAll("ו", "o").replaceAll("ף", "p").replaceAll("ק", "q").replaceAll("ר", "r").replaceAll("ש", "s").replaceAll("ט", "t").replaceAll("ן", "u").replaceAll("ך", "v").replaceAll("צ", "w").replaceAll("ץ", "x").replaceAll("ח", "y").replaceAll("ז", "z")
            
            console.log(textHebToEng)
            let newBox = document.getElementById("newText");
            console.log(newBox);
            newBox.value = textHebToEng;
            console.log(newBox.value);
            }
            
function returnMixedEngToEng() {
    let textBox = document.getElementById("origText");
            let promptText = textBox.value;
            console.log(promptText)
            
            let myArray2 = promptText.split("");
            let wordArray2 = [];
            console.log(myArray2)

            for (i=0; i<myArray2.length; i=i+2) {
                wordArray2.push(myArray2[i+1]);
              wordArray2.push(myArray2[i]);
            }
            
            console.log(wordArray2.join(""));
            let mixEngToEng = wordArray2.join("")

            let newBox = document.getElementById("newText");
            console.log(newBox);
            newBox.value = mixEngToEng;
            console.log(newBox.value);
        }
            
        function returnMixedHebToHeb() {
            let textBox = document.getElementById("origText");
            let promptText = textBox.value;
            console.log(promptText)
    
            let textHebToEng = promptText.replaceAll("א", "a").replaceAll("ב", "b").replaceAll("ס", "c").replaceAll("ד", "d").replaceAll("ע", "e").replaceAll("פ", "f").replaceAll("ג", "g").replaceAll("ה", "h").replaceAll("י", "i").replaceAll("י", "j").replaceAll("כ", "k").replaceAll("ל", "l").replaceAll("מ", "m").replaceAll("נ", "n").replaceAll("ו", "o").replaceAll("ף", "p").replaceAll("ק", "q").replaceAll("ר", "r").replaceAll("ש", "s").replaceAll("ט", "t").replaceAll("ן", "u").replaceAll("ך", "v").replaceAll("צ", "w").replaceAll("ץ", "x").replaceAll("ח", "y").replaceAll("ז", "z")            
            console.log(textHebToEng)

            let myArray3 = textHebToEng.split("");
            let wordArray3 = [];
            console.log(myArray3)

            for (i=0; i<myArray3.length; i=i+2) {
                wordArray3.push(myArray3[i+1]);
              wordArray3.push(myArray3[i]);
            }
            
            console.log(wordArray3.join(""));
            let mixHebtoEng = wordArray3.join("")
            
            let newBox = document.getElementById("newText");
            console.log(newBox);
            newBox.value = mixHebtoEng;
            console.log(newBox.value);



        }