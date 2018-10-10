function  exo7(){
    let pointure
    pointure = document.getElementById("pointure").value;
    let resultat
    resultat = ((pointure*2) +5) *50;
    let annee
    annee = document.getElementById("annee").value;
    resultat = resultat - annee;
    resultat = resultat + 1766;
    alert("Votre resultat est : " + resultat)
    }