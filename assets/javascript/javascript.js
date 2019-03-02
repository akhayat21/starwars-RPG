var tempSelectChar;
var tempSelectEnemy;
var graveyard = [];

var tempChar = {
    hp: 0,
    ap: 0,
    cap: 0
}
var tempEnemy = {
    hp: 0,
    ap: 0,
    cap: 0
}
var obiwan = {
    hp: 10,
    ap: 110,
    cap: 1110
}
var luke = {
    hp: 0,
    ap: 0,
    cap: 0
}
var darthS = {
    hp: 0,
    ap: 0,
    cap: 0
}
var darthM = {
    hp: 0,
    ap: 0,
    cap: 0
}


// main function that calls all other functions
function main(){

    //*****INSERT****** 
            //reset function here: HP/AP/CAP of temps
            //reset css/html

    //Character Selection
    ////////////////////////////////////////////////


    //Enemy Selection
    ////////////////////////////////////////////////



    //Attacking
    ////////////////////////////////////////////////
    
    

}









// Character Selection
$(".character").click( function(){
    //console.log(this.id)
    tempSelectChar = this.id;
    //console.log(tempSelectChar);
    switch(tempSelectChar){
                        case "obiwan":
                            tempChar = obiwan;
                        //console.log(tempChar)
                        case "luke":
                            tempChar = luke;
                        case "darthM":
                            tempChar = darthM;
                        case "darthS":
                            tempChar = darthS;
    }
});

//Enemy Selection
//Move enemy to defender div
$(".character").click( function(){
    //console.log(this.id)
    tempSelectEnemy = this.id;
    //console.log(tempSelect);
    if(tempSelectEnemy == tempSelectChar){

    } else if(graveyard.indexOf(tempSelectEnemy) > -1){
    
    } else {
    switch(tempSelectEnemy){
                        case "obiwan":
                            tempEnemy = obiwan;
                        case "luke":
                            tempEnemy = luke;
                        case "darthM":
                            tempEnemy = darthM;
                        case "darthS":
                            tempEnemy = darthS;
    }
}
});



//Attacking
$("#attack").click( function(){

tempChar.hp -= tempEnemy.cap;

tempEnemy.hp -= tempChar.ap;

tempChar.ap *= 2;

});


//Survival Check
function SurviveCheck(){
    
    if(tempChar.hp == tempEnemy.hp && tempChar.hp == 0 && tempEnemy.hp ==0){
        //draw
    } else if(tempChar.hp <= 0){
        //loss
    } else if(tempEnemy.hp <= 0){
        //victory round
        //send enemy to graveyard
        if( graveyard.length=3){
            //victory game
        } else {
            //choose next opponent
        }
    }





}




