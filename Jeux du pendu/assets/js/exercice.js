const word = ["B","O","N","J","O","U","R"];
let guess = ["","","","","","",""];
let i;
// Fonction 
let guessLetter = ()  => {
    let letter = prompt("Entrez une lettre svp");
    let goodEssai = letter.toUpperCase();
    if (word.includes(goodEssai) == false) {
        console.log("erreur");
    }
    for (let i = 0; i <= word.length; i++) {
        
        
        if (word[i] == goodEssai) {
            guess[i] = goodEssai;
            console.log("Bravo", guess);
        } 

    }
    
        if (guess.indexOf("") >= 0) {
            guessLetter();
        }
        else {
            alert("Gagné!");
        }
    
};

guessLetter();