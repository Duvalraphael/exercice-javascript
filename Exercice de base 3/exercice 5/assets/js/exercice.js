let img = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");
let img4 = document.getElementById("image4");
let img5 = document.getElementById("image5");
img.onmouseover = function() {over()};
img2.onmouseover = function() {over2()};
img3.onmouseover = function() {over3()};
img4.onmouseover = function() {over4()};
img5.onmouseover = function() {over5()};

function over() {
    img.src="assets/img/image1_2.jpg";
}
function over2() {
    img2.src="assets/img/image2_2.jpg";
}
function over3() {
    img3.src="assets/img/image3_2.jpg";
}
function over4() {
    img4.src="assets/img/image4_2.jpg";
}
function over5() {
    img5.src="assets/img/image5_2.jpg";
}


