//PNJ
let Character = {
    name: "Michel",
    age: 33,
    items_to_give: ["Armure du paysan", "Fourche"," Céréales", "Potion de soin"],
};
for( i in Character){
    console.log(Character[i]);
}
getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
    }
let random = getRandomArbitrary(0,4);   
giveItem = () =>{
    let objet = Character.items_to_give[random];
    console.log(objet);
}
giveItem();
//Shop
let épée = {
    title: "Tranchoir à Orc",
    physic: 4,
    magic: 0,
    minLevel: 10,
    available: false,
};
let hache = {
    title: "Pourfendeuse de Gobelins",
    physic: 4,
    magic: 0,
    minLevel: 7,
    available: false,
};
let marteau = {
    title: "Arrache-Tripes",
    physic: 4,
    magic: 0,
    minLevel: 5,
    available: true,
};
let mitaines = {
    title: "Pugilat d'arene",
    physic: 4,
    magic: 0,
    minLevel: 2,
    available: true,
};
let baton = {
    title: "Baton de Sorcier",
    physic: 4,
    magic: 0,
    minLevel: 2,
    available: true,
};
let Tosell = [épée,hache,marteau,mitaines,baton];

for( i in Tosell){
    console.log(Tosell[i]);
}

for( i in Tosell){
    if (Tosell[i].available === true){
    console.log(Tosell[i]);
    }
}
for( i in Tosell){
    if (Tosell[i].minLevel >= 10){
    console.log(Tosell[i]);
    }
}

//BASTON!!!!

let mainCharacter = {
    name:  "Max",
    level:  25,
    life:  400,
    weapon: {
        name:  "Pugilat d'arene" ,
        damage: 4,
    },
    oppenentCharacter: Nemesis,
    attack:  () =>{
        console.log(mainCharacter.name + " attaque avec  " + mainCharacter.weapon.name + " les dégats sont " + mainCharacter.level * mainCharacter.weapon.damage);
    },
    receiveDamage: () =>{
        console.log(Nemesis.name + " attaque " + mainCharacter.name +  "\n avec l'arme " + Nemesis.weapon.name + "\n et lui inflige" + Nemesis.level * Nemesis.weapon.damage + "\n" + mainCharacter.name + " ne posséde plus que " + mainCharacter.life-Nemesis.level * Nemesis.weapon.damage + " PV");
    },
}
mainCharacter.receiveDamage ();

let Nemesis = {
    name: "Hadrien Lebobo",
    level: 35,
    life: 2000,
    weapon: {
        name: "Céléri Géant",
        damage: 3,
    },
    oppenentCharacter: mainCharacter,
    attack:  () =>{
        console.log(Nemesis.name + " attaque avec  " + Nemesis.weapon.name + " les dégats sont " + Nemesis.level * Nemesis.weapon.damage);
    },
    receiveDamage: () =>{
        console.log(mainCharacter.name + " attaque "+ "\n" + Nemesis.name + " \n avec l'arme" + mainCharacter.weapon.name + "\n et lui inflige " + mainCharacter.level * mainCharacter.weapon.damage + "\n" + Nemesis.name + " ne posséde plus que " + Nemesis.life-mainCharacter.level * mainCharacter.weapon.damage + " PV");
    },

}
Nemesis.receiveDamage ();