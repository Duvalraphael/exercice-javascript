const input =document.getElementById("nom");

input.addEventListener("keypress", function(){
    let key=input.value
    alert("Voici votre entrée " + key);
});