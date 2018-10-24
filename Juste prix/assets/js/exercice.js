let count;
const min = 20;
const max = 80;
let  nb = Math.floor(Math.random() * (max - min + 1) ) + min;
//console.log(nb); permet d'afficher le random 
let guess;
let justeprix = () => {
    count = 0;

    while (guess != nb){   
        let guess = prompt("Devinez le juste prix! (Entre 20 et 80)");
        if (guess<nb) {
            alert("C'est plus !");
            count ++;
            continue;
            }
        if (guess>nb) {
            alert("C'est moins !");
            count ++;
            continue;
            }
        if (guess=nb) {
            alert("C'est juste! Vous avez trouvé en " + count +"coups !");
            break;
            }
    }
}
justeprix ();
