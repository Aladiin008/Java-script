var a = Math.floor(Math.random()*51-25);  //[-25,25]
var b = Math.floor(Math.random()*51-25);  //[-25,25]

console.log(a +" "+b);
//ELÁGAZÁSOK

//Melyik száma a nagyobb, kisebb vagy egyenlő?

if(a>b){
    console.log("Az első szám a nagyobb");
}
else if(b>a){
    console.log("A második szám a nagyobb");
}
else{
    console.log("A két szám egyenlő")
}

switch(a){
    case 1 : console.log("egyes"); break;
    case 2 : console.log("kettes"); break;
    default : console.log("egyiksem"); break;
}

//CIKLUSOK
//Számlálós ciklus
var ki = "";
for(var i = 0; i<11; i++)
{
    ki += (i*3+i) +" ";
}

console.log(ki);
//0,4,8,12,16,20,24,28,32,36,40
//Előltesztelős
var ki2 = "";
var u = 0;
while(u<11){
    ki2 += (u*3+u) +" ";
    u++;
}
console.log(ki2);

//Hátultesztelős
var q = 0;
var ki3 = "";
var e = 0;
do{
    ki3 += (q*3+q) +" ";
    q++;
}while(q<11);

console.log(ki3);


//generáljon ki 13db véletlen számot [-100,100] között, addig amíg 7el osztható számot nem kapunk.
//Hány db negatív számot generált futás közben?
//Mennyi volt a pozitív számok átlága?

var ki4 = "";
var x = 0;
var n = 1;
var pozosszeg = 0;
var pozdb = 0;
var maxe = -100;
var maxi = 0;
var k = 0;

while(n %7 !=0){
    n = Math.floor((Math.random()*201-100));
    k++
    ki4 += n + " ";
    if(n<0){
        x++
    }
    else if(n>0){
        pozdb++
        pozosszeg+=n
    }
    if(maxe<n){
        maxe = n
        maxi = k;
    }
    
}
console.log(ki4);
console.log(x + "db negatív szám volt");
console.log((pozosszeg/pozdb).toFixed(2) + " a pozitív számok átlaga:");
console.log(maxe+ " a legnagyobb szám");
console.log(maxi+". helyen van a legnagyobb érték.");

//Szövegkezelés
var szoveg = "kalapács";
console.log(szoveg[0]+ " - Ez az első karakter");
//szöveg hossza - szoveg. length


//Array - tömb, lista

tomb = [];
tomb. push(12);
tomb. push(23);
tomb. push(11);
console.log(tomb);
console.log(tomb[0])
console.log("tömb hossza: " + tomb.length);


//Házi Feladat:10-33 ig a lapon.



