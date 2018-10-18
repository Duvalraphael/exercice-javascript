function caculMoyenne () {
      let n ;
     let resultat;
     for (n=0; n <3; n++){
               let p = prompt("Entrez un nombre entier : ");
               if (p.isInt= false){
                 alert("Ceci n'est pas un nombre entier !")
               }
       do{
        resultat+=Number(p)    
       }while (n>=0)
        if(p<0){
          resultat= resultat/p.lenght
        }
     }
     alert("Voici vos nombre entrée : " + p + "Voici votre moyenne: " + resultat)
   }
   