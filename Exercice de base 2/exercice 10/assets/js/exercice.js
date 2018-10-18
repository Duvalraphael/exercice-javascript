function somme() {
      let n;
      let resultat = 0;
      for (n=0; n <3; n++){
            let p = prompt("Entrez un nombre : ");
            resultat = resultat + Number(p);
      }
      alert(resultat);
}
