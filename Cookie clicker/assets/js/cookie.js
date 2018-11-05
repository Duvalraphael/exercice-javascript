let click = document.getElementById("click");
let affichage = document.getElementById("affichage");
let multiplier = document.getElementById("multiplier");
let autoclick = document.getElementById('autoclick');
let bonus = document.getElementById('bonus');
let score = 0;
let multiplicateur = 1;


let functionClick =() => {
    if (bonus.disabled === true){
        score = (score +(1 * (multiplicateur-1))*2);
        score += 2;
        affichage.innerHTML = score;
        console.log(score);
    }else{
    score += 1;
    score = score +(1 *(multiplicateur-1));
    console.log( score , multiplicateur);
    affichage.innerHTML = score;
    }
    if (score < 0){
        reset();
        alert("T'as déja eu  un nombres négatif de cookie sale loser!");
    };
};

let augmenterMultiplicateur = () => {
    if (score < 50){
        alert("T'as déja eu  un nombres négatif de cookie sale loser! Tu essayes de tricher ?");
    }else{
        let prixM = 50 *multiplicateur || true;
        multiplicateur += 1;
        score = score -prixM;
        affichage.innerHTML = score;
        multiplier.innerHTML = "Multiplicateur X " + multiplicateur + "\n Prix :" + 50*multiplicateur;
    };
}

let autoClick = () => {
    if (score < 500){
        alert("Abandonne tu y arriveras jamais!");
    }else{
    score = score - 500 || true;
    affichage.innerHTML = score;
    autoclick.setAttribute('disabled', true);
    AutoClick =setInterval(function(){functionClick()},1000);
    };
};

let functionBonus = ()=> {
    if(score<5000){
        alert("Tu sais compter ? t'a pas assez de cookie")
    }else{
        score -= 5000;
        affichage.innerHTML = score;
        
        let timeLeft= 30;
        
        let count = () => {
            if (timeLeft == 0) {
                clearInterval(timer);
                bonus.innerHTML = "Bonus \n Prix: 5000";
                bonus.removeAttribute('disabled', 'disabled');
            } else {
                bonus.setAttribute('disabled', true);
                bonus.innerHTML = "Bonus " + timeLeft;
                timeLeft --;   
            }
        }
        let timer = setInterval(count, 1000);
    }
}

let reset = () => {
    multiplicateur=1;
    score= 0;
    console.log("RESET");
    affichage.innerHTML = score;
    multiplier.innerHTML = "Multiplicateur X 1 \n Prix: 50";
    autoclick.removeAttribute('disabled');
    clearInterval(AutoClick);
    clearInterval(timer);
};
