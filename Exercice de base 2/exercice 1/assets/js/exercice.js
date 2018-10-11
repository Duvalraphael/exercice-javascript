function surfaceRectangle (){
     let longueur= prompt("Entrez la longueur: ");
    let largeur= prompt("Entrez la largeur: ");
    let aire= longueur * largeur
    alert("L'aire du rectangle d'une longueur de :" +longueur+ " et d'une largeur de: " +largeur+ " est: "+aire)
}
function periRectangle (){
    let longueur= prompt("Entrez la longueur: ");
    longueur= parseFloat(longueur);
    let largeur= prompt("Entrez la largeur: ");
    largeur= parseFloat(largeur);
    let peri= (longueur + largeur)*2
    alert("Le périmètre du rectangle d'une longueur de :" +longueur+ " et d'une largeur de: " +largeur+ " est: "+peri)
}
