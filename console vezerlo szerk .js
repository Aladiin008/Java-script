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
for(var i = 0; i<11; i++)
{
    console.log(i*3+i);
}
//0,4,8,12,16,20,24,28,32,36,40



//[12,38[
//Math.random()*26+12  -  [0,1[*26  =>  [0,26[+12  =>  [12,38[