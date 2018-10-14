let soustrait = (x) =>{
     return x-2
     if (x<=0) {
         alert("Nombre négatif")
     }else{
         alert(x)
     }
      }
let affiche = () =>{
    let table =[-2,1,4]

    alert(soustrait(table[0]))
    alert(soustrait(table[table.length-1]));
}