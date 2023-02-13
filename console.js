//konzolra való kiíratás
console.log("kapcsolat");

//változó - variable
var a = 1;
var b = 1;
var c = "1";
var d = true; //true = 1 false = 0

console.log(a+ " - " +typeof(a));
console.log(b+ " - " +typeof(b));
console.log(c+ " - " +typeof(c));
console.log(d+ " - " +typeof(d));

console.log(a === c);  // == értéket vizsgál, === értéket és típust vizsgál.
console.log(a + c);
console.log(a + d);
console.log(c + d);
console.log(c + (a + b));

var szam = 12.29543;
console.log(szam)
console.log("a szám gyöke: "+Math.sqrt(szam));
console.log("a szám 3. hatványa:"+ Math.pow(szam, 3));
console.log("A szám egészre kerekítve:" + Math.round(szam));
console.log("A szám 2 tizedesjegyre kerekítve:" +szam.toFixed(2));

var rnd = Math.random()*100;
console.log(rnd);
// Math.random()      -   [0,1[
// Math.random()+1    -   [0,1[ +1   =  [1,2[    
// Math.random()+10   -   [0,1[ +10  =  [10,11[
// Math.random()*10   -   [0,1] *10  =  [0,10[
// Math.random()*100  -   [0,100[


//[20,100[
//Math.random()*80+20  -  [0,1[  =>  [0,80[+20  =>  [20,100[

//[-20,30[
//Math.random()*50-20  -  [0,1[*50  =>  [0,50[-20  =>  [-20,30[

//[12,38[
//Math.random()*26+12  -  [0,1[*26  =>  [0,26[+12  =>  [12,38[

//[a,b[
//Math.random()*(b-a)+a  -  [0,1[  =>  [0,[  =>  [a,b[

console.log ( Math.random()*26+12);

//[20,100]:egész
//[20,101[ 100,99999999 ~ 100
Math.floor(Math.round()*81+20)

//math.floor(math.random()*(b-a+1)+a)    -    [a,b]


//Hf
/* 1.Generálj ki a következő intervallumokból 1-1 egész számot!*/
//[10,20]

console.log(Math.floor(Math.random()*11+10));

//[1,6]
console.log(Math.floor(Math.random()*6+1));

//[-5,5]
console.log(Math.floor(Math.random()*11-5));

//[-100,100]
console.log(Math.floor(Math.random()*201-100));


 /*2.Generálj ki a következő intervallumokból 1 olyan egész számot ami 50el osztható!
 [100-1000
pl. 250, 600, 350]*/
var a = 2;
var b = 20;
var rmd = Math.floor(Math.random()*(b-a)+2)*50;
console.log(rmd)

/*3.Generálj ki a következő intervallumokból 1 olyan egész számot, ami 7re végződik!
[10,100]
pl. 17, 57 ,27 ,37*/

// 1+7 2+7 3+7....
// 10+7 20+7 30+7....
//1*10+7 2*10+7 3*10+7....
//[1,9]*10 +7

var hetrevegzodo = Math.floor(Math.random()*9+1)*10+7;
console.log(hetrevegzodo);