
let triangle = document.getElementById("boat");
let boat = triangle.getContext ("2d");
boat.beginPath(); // Mats
boat.fillStyle = "#855E42";
boat.rect(400,200,25,400);
boat.fill();
boat.stroke();
boat.closePath();


// Cale

boat.fillStyle = "#855E42";
boat.beginPath(); 
boat.moveTo(100,600);
boat.lineTo(700,600);
boat.stroke();
boat.moveTo(700,600);
boat.lineTo(550,700);
boat.stroke();
boat.moveTo(550,700);
boat.lineTo(100,700);
boat.stroke();
boat.moveTo(100,700);
boat.lineTo(100,600);
boat.closePath();
boat.stroke();
boat.fill();

boat.beginPath(); //voile droite
boat.moveTo(425,200);
boat.lineTo(600,500);
boat.stroke();
boat.lineTo(425,500);
boat.stroke();
boat.closePath();
boat.fillStyle = "blue";
boat.fill();

boat.beginPath(); //voile gauche
boat.moveTo(400,200);
boat.lineTo(200,500);
boat.stroke();
boat.lineTo(400,500);
boat.stroke();
boat.closePath();
boat.fillStyle = "blue";
boat.fill();
