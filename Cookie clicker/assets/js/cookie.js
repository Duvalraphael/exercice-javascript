let click = document.getElementById("click");
let affichage = document.getElementById("affichage");
let multiplier = document.getElementById("multiplier");
let autoclick = document.getElementById('autoclick')
let score = 0;


let functionClick =() => {
    score += 1;
    score = score +(1 *(multiplicateur-1));
    console.log( score , multiplicateur);
    affichage.innerHTML = score;
    if (score < 0){
        reset();
        alert("T'as déja eu  un nombres négatif de cookie sale loser!");
    };

};
let multiplicateur = 1;

let augmenterMultiplicateur = () => {
    console.log("multi " + multiplicateur);
    let prixM = 50 *multiplicateur
    multiplicateur += 1;
    score = score -prixM;
    affichage.innerHTML = score;
    multiplier.innerHTML = "Multiplicateur X " + multiplicateur + "\n Prix :" + 50*multiplicateur;
    if (score < 0){
        reset();
        alert("T'as déja eu  un nombres négatif de cookie sale loser!" +"\n Pour la peine tu recommence !");
    };
}

let autoClick = () => {
    if (score < 500){
        alert("Abandonne tu y arriveras jamais!");
    }else {
    score = score - 500 || true;
    affichage.innerHTML = score;
    autoclick.setAttribute('disabled', true);
    AutoClick =setInterval(function(){functionClick()},1000);
    };
};


let reset = () => {
    multiplicateur=1;
    score= 0;
    console.log("RESET");
    affichage.innerHTML = score;
    multiplier.innerHTML = "Multiplicateur X 1 \n Prix: 50";
    autoclick.removeAttribute('disabled');
    clearInterval(AutoClick);
};
