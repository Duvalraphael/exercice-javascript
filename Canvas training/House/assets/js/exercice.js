
let base = document.getElementById("house");
let house = base.getContext ("2d");

//brique

house.beginPath();
house.rect(300,600, 400,200);
house.closePath();
house.fillStyle = "blue";
house.fill();

//porte
house.beginPath();
house.rect(500,750,25,50);
house.closePath();
house.fillStyle = "red";
house.fill();


//toit
house.beginPath();
house.moveTo(500,450);
house.lineTo(300,600);
house.lineTo(700,600);
house.closePath();
house.fillStyle = "red";
house.fill();
