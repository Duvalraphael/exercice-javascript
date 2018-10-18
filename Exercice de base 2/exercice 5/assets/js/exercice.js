let a = 3;
let b = 2;

function triple (x) {
return x * 3;
}

console.log(a=b++);
console.log(a=++b);
console.log(a=b--);
console.log(a=--b);
console.log(a+=b++);
console.log(a+=++b);
console.log(a-=b++);
console.log(a-=++b);
console.log(a+=b--);
console.log(a+=--b);

function affiche () {
alert("Le résultat de a= " + triple(a));
alert("Le résultat de b=" + triple(b));
}