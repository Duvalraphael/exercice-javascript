let img = document.getElementById("image1");

img.onmouseover = function() {border()};
img.onmouseout = function() {noborder()};
let border = () => {
    img.style.border = 'solid  15px red';
}
let noborder = () => {
img.style.border = '0';
}


