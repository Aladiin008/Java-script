console.log("Szia");

/* függvények definiálása

function függvényNeve(paraméterek)
{
    Folyamat
    return Visszatérési érték; //eljárás - nincs visszatérési érték
}*/


function Ketszamreciprokosszege(szam1, szam2) {
    var c = 1 / szam1 + 1 / szam2;
    return c;
}

function csempeDarab(meret1, meret2, szmeret1, szmeret2) {
    var d = Math.floor(szmeret1 / meret1)
    var e = Math.floor(szmeret2 / meret2)
    var f = d * e
    return f
}

function Szomegfordito(szo) {
    var ujszo = "";

    for (var i = szo.length - 1; i >= 0; i--) {
        ujszo += szo[i];
    }
    return ujszo;
}

function dobokockajatek(tomb, db) {
    for (var i = 0; i < db; i++) {
        tomb.push(Math.floor(Math.random() * 16 + 3));
    }

}


function nyertes(tomb)
 {
    var juliska = 0;
    var jancsi = 0;
    for (var i = 0; i < tomb.length; i++) 
    {
        if (i % 2 == 0)
            jancsi += tomb[i];
        else
            juliska += tomb[i];

    }

    if(jancsi/5 > juliska/5)
        return "Jancsi nyert";
    else
        return "julska nyert";
}

/*function nyertes(db) {
    for (var i = 0; i < 10; i++) 
    {   
        var juliskadobasok = 0;
        var jancsidobasok = 0;
        if(i%2 != 0)
        jancsidobasok += db
        else
        juliskadobasok += db

        var jacsi = (jancsidobasok/5);
        var juiska = (juliskadobasok/5);

        if (jacsi>juiska)
        return(jacsi)
        else
        return(juiska)


    }

}*/




function Main() {
    //Adott két valós szám. írjon függvényt ami megadja a két szám reciprokának az összegét!

    var a = 1.4568;
    var b = 0.1225;

    console.log(a + " " + b);
    console.log(Ketszamreciprokosszege(a, b));
    Ketszamreciprokosszege()

    /*Adott egy csempeméret (előző feldat a- hosszúság és b- szélesség méterben) Adjuk meg hény db egész csempe fér el egy 6x7.5m-es helységben!
     írjon egy függvényt, ami bekér 4 farab értéket és visszaad egy csempe darabszámot! */

    console.log(csempeDarab(a, b, 6, 7.5))


    // írjon egy függvényt ami függ egy szótól! A függvény megadja a szót visszafele!
    var szo = "Kalapács";
    console.log(Szomegfordito(szo));

    /*Jancsi és Juliska 3db 6 oldalú dobokockával dob. Az eredményüket egymás mellé írják le (egymás után tárolják az eredményt). A játék 5 körös. Az nyer akinek a kör végén
     a dobott értékek átlaga nagyobb.*/
    //írjon függvényt, ami feltölt a megadott paraméterekkel egy tömböt véletlen számokkal!
    //írjon egy függvényt, ami megadja kinyert!

    var dobasok = [];
    var db = 10
    dobokockajatek(dobasok, db);
    console.log(dobasok);
    console.log(nyertes(dobasok));



}
Main();





