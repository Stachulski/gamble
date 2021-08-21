var o = 0;
    var x = 0;
    var gracz = -1;
    

function dodaj(a){
    
    var wynik='';
    var u = gracz;
    for(var i = 1; i<10; i++){
        if(document.getElementById('a'+i).innerHTML == 'x'){
            u --;
        }else if(document.getElementById('a'+i).innerHTML == 'o'){
            u ++;
        }
    }
    if(document.getElementById(a).innerHTML !='x' && document.getElementById(a).innerHTML !='o'){    
        if(u == 1){
            document.getElementById(a).innerHTML = 'x';
            document.getElementById('KolGracz').innerHTML = "Następny ruch: O";
        }else if(u == 0){
            document.getElementById(a).innerHTML = 'o';
            document.getElementById('KolGracz').innerHTML = "Następny ruch: X";
        }else{
            if(gracz = 0){
                document.getElementById(a).innerHTML = 'o';
            }else{
                document.getElementById(a).innerHTML = 'x';
            }
            
        }
    }
    var a1= document.getElementById('a1').innerHTML;
    var a2= document.getElementById('a2').innerHTML;
    var a3= document.getElementById('a3').innerHTML;
    var a4= document.getElementById('a4').innerHTML;
    var a5= document.getElementById('a5').innerHTML;
    var a6= document.getElementById('a6').innerHTML;
    var a7= document.getElementById('a7').innerHTML;
    var a8= document.getElementById('a8').innerHTML;
    var a9= document.getElementById('a9').innerHTML;

    
    if(a1 && a2 && a3){
        if(a1 == 'x' && a2 =='x' && a3 =='x' ){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a1 == 'o' && a2 == 'o' && a3 == 'o' ){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a1 && a4 && a7){
        if(a1 == 'x' && a4 =='x' && a7 =='x' ){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a1 == 'o' && a4 == 'o' && a7 == 'o' ){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a1 && a5 && a9){
        if(a1 == 'x' && a5 =='x' && a9 =='x' ){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a1 == 'o' && a5 == 'o' && a9 == 'o' ){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a4 && a5 && a6){
        if(a4 == 'x' && a5 =='x' && a6 =='x' ){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a4 == 'o' && a5 == 'o' && a6 == 'o' ){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a7 && a8 && a9){
        if(a7 == 'x' && a8 =='x' && a9 =='x' ){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a7 == 'o' && a8 =='o' && a9 =='o' ){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a3 && a5 && a7){
        if(a3 =='x' && a5 =='x' && a7 =='x'){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a3 =='o' && a5 =='o' && a7 =='o'){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a2 && a5 && a8){
        if(a2 =='x' && a5 =='x' && a8 =='x'){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a2 =='o' && a5 =='o' && a8 =='o'){
            o++;
            gracz = 1;
            nextPlayer();
        }
    }
    if(a3 && a6 && a9){
        if(a3 =='x' && a6 =='x' && a9 =='x'){
            x++;
            gracz = 0;
            nextPlayer();
        }else if(a3 =='o' && a6 =='o' && a9 =='o'){
            o++;
            gracz = 1;
            nextPlayer();
        }
    if(a1 && a2 && a3 && a4 && a5 && a6 && a7 && a8 && a9){
        nextPlayer();
        if(gracz = 0){
            gracz = 1;
            document.getElementById('KolGracz').innerHTML = "Następny ruch: X";
        }else{
            gracz = 0;
            document.getElementById('KolGracz').innerHTML = "Następny ruch: O";
        }
    }
    }
    if(o>x){
        document.getElementById('o').style.color = "#0f0";
        document.getElementById('x').style.color = "#f00";
    }else if(x>o){
        document.getElementById('o').style.color = "#f00";
        document.getElementById('x').style.color = "#0f0";
    }else if(x == o){
        document.getElementById('o').style.color = "#88f";
        document.getElementById('x').style.color = "#88f";
    }
    document.getElementById('o').innerHTML = o;
    document.getElementById('x').innerHTML = x;
}

function reset(){
    for(var i = 1; i<10; i++){
        document.getElementById('a'+i).innerHTML = '';
    }
    x=0;
    o=0;
    u=0;
    document.getElementById('o').style.color = "#88f";
    document.getElementById('x').style.color = "#88f";
    document.getElementById('o').innerHTML = o;
    document.getElementById('x').innerHTML = x;
}

function nextPlayer(){
    for(var i = 1; i<10; i++){
        document.getElementById('a'+i).innerHTML = '';
    }
}
    
