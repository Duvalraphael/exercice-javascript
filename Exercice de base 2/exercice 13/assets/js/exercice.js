function CalculIMC() {
      let poids = prompt("Votre poids en Kg : ")
      let taille = prompt ("Votre taille en m ex : 1.87")
      
      let resultat = poids/(taille*taille)
      if (resultat< 16.5){
        alert(parseFloat(resultat).toFixed(2) + " Vous êtes en dénutrition ou famine consulter un médecin rapidement!")
      }else if (16.5<= resultat && resultat<18.5) {
        alert(parseFloat(resultat).toFixed(2) + " Vous êtes maigre trop maigre faites attention")
      }else if (18.5<= resultat  && resultat<25) {
        alert(parseFloat(resultat).toFixed(2) + " Bravo vous êtes dans la bonne catégorie ne changez rien ")
      }else if (25<= resultat  && resultat <30) {
        alert(parseFloat(resultat).toFixed(2) + " Vous etes en surpoids ! Faites attention")
      }else if (30<= resultat  && resultat<35) {
        alert(parseFloat(resultat).toFixed(2) + " Vous êtes en obésité modérée! Contacter  un médecin!")
      }else if (35<= resultat   && resultat< 40) {
        alert(parseFloat(resultat).toFixed(2) + " Vous êtes en obésité morbide! Pour votre santé contacter un médecin en priorité")
      }else if (40<=resultat ) {
        alert(parseFloat(resultat).toFixed(2) + " Vous êtes en obésité morbide Stoppez les fast food ou vous aller mourrir")
      }
    }