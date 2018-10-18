function jourDeLaSemaine(){
      let date =  new Date().getDay();
    
      switch (date) {
          case 1:
            alert('Lundi');
          break;
          case 2:
            alert('Mardi');
          break;
          case 3:
            alert('Mercredi');
          break;
          case 4:
            alert('Jeudi');
          break;
          case 5:
            alert('Vendredi');
          break;
          case 6:
            alert('Samedi');
          break;
        default:
            alert('Dimanche');
      }
    }