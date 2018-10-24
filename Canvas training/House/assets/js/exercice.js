
let base = document.getElementById("house");
let house = base.getContext ("2d");

//brique

house.beginPath();
house.rect(300,600, 400,200);
house.closePath();
house.fillStyle = "orange";
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

// bonhomme

house.beginPath();
house.fillStyle ="pink";
house.strokeStyle = 'brown';
house.arc(175,375,50,0,2*Math.PI);// tête
house.fill();
house.stroke();
house.fillRect(150,425,50,50);//cou
house.fillRect(90,450,150,250);//corp
house.fillRect(90,250,25,200);//bras1
house.fillRect(215,450,200,25);//bras2
house.fillRect(100,700,25,300); //jambe1 
house.fillRect(200,700,25,300); //jambe2
house.closePath();
