let img = document.getElementById("image1")

img.onmouseover = function() {over()};
img.onmouseout = function() {out()};
function over() {
    img.src="assets/img/image1_2.jpg";
}
  function out() {
    img.src="assets/img/image1.jpg";
}


