let mdp = document.getElementById("motdepasse");
let conf = document.getElementById("confirmation");

let verif = () => {
    if (mdp.value === conf.value) {
        mdp.style.border = 'solid 5px green';
        conf.style.border = 'solid 5px green';
    }else {
        mdp.style.border = 'solid 5px red';
        conf.style.border = 'solid 5px red';
    }
}