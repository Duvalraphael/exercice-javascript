function  exo6(){
    let  nombre1
    nombre1 = document.getElementById("premier_nombre").value;
    nombre1 = parseInt(nombre1);
    let nombre2
    nombre2 = document.getElementById("deuxieme_nombre").value;
    nombe2 = parseInt(nombre2);
    let nombre3
    nombre3 = nombre1 % nombre2;
    alert("Le reste de la division de vos deux nombre est : " + nombre3)
    }