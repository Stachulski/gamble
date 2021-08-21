var stan = 10;
var cena = 1;
var obroty = 0;
function stanKonta(){
    document.getElementById('konto').innerHTML = stan;
}

function start(){
    if(stan >=cena){
        document.getElementById('guzik').innerHTML='<img src="./obrazki/dzwignia4.jpg">';
        for(var i = 1; i<10; i++)
            document.getElementById('obrazek'+i).style.borderColor = "#aaa";
        bandyta();
        stan -= cena;
        stanKonta();
    }else{
        alert("Nie stać Cię na gre!");
    }
    document.getElementById('komunikat').style.display = "none";
}

function bandyta(){
    obroty ++;
    var ilosc = 7; // ilość losowanych obrazków
    var x = Math.round(Math.random()*15);
    var y = Math.round(Math.random()*15);
    var los = Math.round(Math.random()*ilosc);
    var obrazki = new Array('1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png','8.png');
    document.getElementById('obrazek1').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek2').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek3').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    var los = Math.round(Math.random()*ilosc);
    document.getElementById('obrazek4').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek5').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek6').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    var los = Math.round(Math.random()*ilosc);
    document.getElementById('obrazek7').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek8').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek9').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    if(x == y){
        obroty = 0;
        bandyta2();
    }else if(obroty == 100){
        obroty = 0;
        bandyta2();
    }else{
        setTimeout( 'bandyta()', 50);
    }
}

function bandyta2(){
    var ilosc = 7; // ilość losowanych obrazków
    obroty ++;
    var x = Math.round(Math.random()*15);
    var y = Math.round(Math.random()*15);
    var los = Math.round(Math.random()*ilosc);
    var obrazki = new Array('1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png','8.png');
    document.getElementById('obrazek2').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek3').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    var los = Math.round(Math.random()*ilosc);
    document.getElementById('obrazek5').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek6').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    var los = Math.round(Math.random()*ilosc);
    document.getElementById('obrazek8').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    document.getElementById('obrazek9').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    if(x == y){
        obroty = 0;
        bandyta3();
    }else if(obroty == 100){
        obroty = 0;
        bandyta3();
    }else{
        setTimeout( 'bandyta2()', 50);
    }
}

function bandyta3(){
    var ilosc = 7; // ilość losowanych obrazków
    obroty ++;
    var x = Math.round(Math.random()*15);
    var y = Math.round(Math.random()*15);
    var los = Math.round(Math.random()*ilosc);
    var obrazki = new Array('1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png','8.png');
    document.getElementById('obrazek3').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    var los = Math.round(Math.random()*ilosc);
    document.getElementById('obrazek6').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    var los = Math.round(Math.random()*ilosc);
    document.getElementById('obrazek9').innerHTML = '<img src="./obrazki/'+obrazki[los]+'">';
    if(x != y){
        setTimeout( 'bandyta3()', 50);
    }else if(obroty == 100){
        obroty = 0;
        sprawdzanie();
    }else{
        obroty = 0;
        sprawdzanie();
    }
}

function sprawdzanie(){
    document.getElementById('konto').innerHTML = stan;
    var wygrana = 0;
    var a1= document.getElementById('obrazek1').innerHTML;
    var a2= document.getElementById('obrazek2').innerHTML;
    var a3= document.getElementById('obrazek3').innerHTML;
    var a4= document.getElementById('obrazek4').innerHTML;
    var a5= document.getElementById('obrazek5').innerHTML;
    var a6= document.getElementById('obrazek6').innerHTML;
    var a7= document.getElementById('obrazek7').innerHTML;
    var a8= document.getElementById('obrazek8').innerHTML;
    var a9= document.getElementById('obrazek9').innerHTML;
    document.getElementById('guzik').innerHTML='<img src="./obrazki/dzwignia1.jpg" onClick="start()">';
    if(a1 == a2 && a3 == a1){
        document.getElementById('obrazek1').style.borderColor = "#f00";
        document.getElementById('obrazek2').style.borderColor = "#f00";
        document.getElementById('obrazek3').style.borderColor = "#f00";
        if(a1 == '<img src="./obrazki/4.png">'){
            wygrana += 1*cena;
        }else if(a1 == '<img src="./obrazki/8.png">'){
            wygrana +=2*cena;
        }else if(a1 == '<img src="./obrazki/7.png">'){
            wygrana +=5*cena;
        }else if(a1 == '<img src="./obrazki/6.png">'){
            wygrana +=10*cena;
        }else if(a1 == '<img src="./obrazki/5.png">'){
            wygrana +=15*cena;
        }else if(a1 == '<img src="./obrazki/3.png">'){
            wygrana +=25*cena;
        }else if(a1 == '<img src="./obrazki/2.png">'){
            wygrana +=50*cena;
        }else if(a1 == '<img src="./obrazki/1.png">'){
            wygrana +=100*cena;
        }
        document.getElementById('komunikat').style.display = "block";
    }
    if(a4 == a5 && a6 == a4){
        document.getElementById('obrazek4').style.borderColor = "#f00";
        document.getElementById('obrazek5').style.borderColor = "#f00";
        document.getElementById('obrazek6').style.borderColor = "#f00";
        if(a4 == '<img src="./obrazki/4.png">'){
            wygrana += 1*cena;
        }else if(a4 == '<img src="./obrazki/8.png">'){
            wygrana +=2*cena;
        }else if(a4 == '<img src="./obrazki/7.png">'){
            wygrana +=5*cena;
        }else if(a4 == '<img src="./obrazki/6.png">'){
            wygrana +=10*cena;
        }else if(a4 == '<img src="./obrazki/5.png">'){
            wygrana +=15*cena;
        }else if(a4 == '<img src="./obrazki/3.png">'){
            wygrana +=25*cena;
        }else if(a4 == '<img src="./obrazki/2.png">'){
            wygrana +=50*cena;
        }else if(a4 == '<img src="./obrazki/1.png">'){
            wygrana +=100*cena;
        }
        document.getElementById('komunikat').style.display = "block";
    }
    if(a7 == a8 && a9 == a7){
        document.getElementById('obrazek7').style.borderColor = "#f00";
        document.getElementById('obrazek8').style.borderColor = "#f00";
        document.getElementById('obrazek9').style.borderColor = "#f00";
        if(a7 == '<img src="./obrazki/4.png">'){
            wygrana += 1*cena;
        }else if(a7 == '<img src="./obrazki/8.png">'){
            wygrana +=2*cena;
        }else if(a7 == '<img src="./obrazki/7.png">'){
            wygrana +=5*cena;
        }else if(a7 == '<img src="./obrazki/6.png">'){
            wygrana +=10*cena;
        }else if(a7 == '<img src="./obrazki/5.png">'){
            wygrana +=15*cena;
        }else if(a7 == '<img src="./obrazki/3.png">'){
            wygrana +=25*cena;
        }else if(a7 == '<img src="./obrazki/2.png">'){
            wygrana +=50*cena;
        }else if(a7 == '<img src="./obrazki/1.png">'){
            wygrana +=100*cena;
        }
        document.getElementById('komunikat').style.display = "block";
    }
    if(a3 == a5 && a7 == a3){
        document.getElementById('obrazek3').style.borderColor = "#f00";
        document.getElementById('obrazek5').style.borderColor = "#f00";
        document.getElementById('obrazek7').style.borderColor = "#f00";
        if(a3 == '<img src="./obrazki/4.png">'){
            wygrana += 1*cena;
        }else if(a3 == '<img src="./obrazki/8.png">'){
            wygrana +=2*cena;
        }else if(a3 == '<img src="./obrazki/7.png">'){
            wygrana +=5*cena;
        }else if(a3 == '<img src="./obrazki/6.png">'){
            wygrana +=10*cena;
        }else if(a3 == '<img src="./obrazki/5.png">'){
            wygrana +=15*cena;
        }else if(a3 == '<img src="./obrazki/3.png">'){
            wygrana +=25*cena;
        }else if(a3 == '<img src="./obrazki/2.png">'){
            wygrana +=50*cena;
        }else if(a3 == '<img src="./obrazki/1.png">'){
            wygrana +=100*cena;
        }
        document.getElementById('komunikat').style.display = "block";
    }
    if(a1 == a5 && a9 == a1){
        document.getElementById('obrazek1').style.borderColor = "#f00";
        document.getElementById('obrazek5').style.borderColor = "#f00";
        document.getElementById('obrazek9').style.borderColor = "#f00";
        if(a1 == '<img src="./obrazki/4.png">'){
            wygrana += 1*cena;
        }else if(a1 == '<img src="./obrazki/8.png">'){
            wygrana +=2*cena;
        }else if(a1 == '<img src="./obrazki/7.png">'){
            wygrana +=5*cena;
        }else if(a1 == '<img src="./obrazki/6.png">'){
            wygrana +=10*cena;
        }else if(a1 == '<img src="./obrazki/5.png">'){
            wygrana +=15*cena;
        }else if(a1 == '<img src="./obrazki/3.png">'){
            wygrana +=25*cena;
        }else if(a1 == '<img src="./obrazki/2.png">'){
            wygrana +=50*cena;
        }else if(a1 == '<img src="./obrazki/1.png">'){
            wygrana +=100*cena;
        }
        document.getElementById('komunikat').style.display = "block";
    }
    stan +=  Math.round(wygrana);
    document.getElementById('komunikat').innerHTML = 'Gratulacje, wygrałeś '+wygrana;
    stanKonta();
    start();

}

function bandytaWygrana(){
    var ilosc = 7; // ilość losowanych obrazków
    var x = Math.round(Math.random()*20);
    var y = Math.round(Math.random()*20);
    var los3 = Math.round(Math.random()*ilosc);
    var obrazki = new Array('1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png','8.png');
    document.getElementById('obrazek1').innerHTML = '<img src="./obrazki/'+obrazki[los3]+'">';
    document.getElementById('obrazek2').innerHTML = '<img src="./obrazki/'+obrazki[los3]+'">';
    document.getElementById('obrazek3').innerHTML = '<img src="./obrazki/'+obrazki[los3]+'">';
    if(x != y){
        setTimeout( 'bandytaWygrana()', 50);
    }else{
        sprawdzanie();
    }
}

function doladuj(a){
    var kod = prompt("Podaj kod otrzymany poprzez sms").toUpperCase();
    if(a == 30){
        if(kod == "9461"){
            stan += a;
            stanKonta();
        }else{
            alert("Podano błędny kod");
        }
    }else if(a == 90){
        if(kod == "8503"){
            stan += a;
            stanKonta();
        }else{
            alert("Podano błędny kod");
        }
    }else{
        if(kod == "7324"){
            stan += a;
            stanKonta();
        }else{
            alert("Podano błędny kod");
        }
    }
}

function kolorki(){
    var kolor1 = Math.round(Math.random()*155)+20;
    var kolor2 = Math.round(Math.random()*155)+20;
    var kolor3 = Math.round(Math.random()*155)+20;
    var kolor = "rgb(" + kolor1+','+kolor2+','+kolor3+')';
    document.getElementById('komunikat').style.color = kolor;
    setTimeout( 'kolorki()', 20);
}
function koszt(x){
    if(x == 5){
        document.getElementById('cena1').style.borderColor = '#10131E';
        document.getElementById('cena5').style.borderColor = '#f00';
    }else if(x == 1){
        document.getElementById('cena5').style.borderColor = '#10131E';
        document.getElementById('cena1').style.borderColor = '#f00';
    }
    cena = x;
}
