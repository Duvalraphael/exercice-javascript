function  exo5(){
    var nombre1
    nombre1 = document.getElementById("premier_nombre").value;
    nombre1 = parseInt(nombre1);
    var nombre2
    nombre2 = document.getElementById("deuxieme_nombre").value;
    nombe2 = parseFloat(nombre2).toFixed(2);
    var nombre3
    nombre3 = nombre2 * nombre1;
    alert("Vos deux nombre multiplier donne : " + nombre3)
    }