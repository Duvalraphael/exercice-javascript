function testWhile() {
      do {
            phrase = prompt("Inserer une phrase contenant la lettre p");
      }while(phrase.indexOf ('p')=== -1){
            alert( "' " + phrase + " '");
      }
}
