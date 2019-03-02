var tempSelectChar;
var tempSelectEnemy;

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
$(".character").click( function(){
    //console.log(this.id)
    tempSelectEnemy = this.id;
    //console.log(tempSelect);
    if(tempSelectEnemy == tempSelectChar){

    } else {
    switch(tempSelectEnemy){
                        case "obiwan":
                            tempChar = obiwan;
                        case "luke":
                            tempChar = luke;
                        case "darthM":
                            tempChar = darthM;
                        case "darthS":
                            tempChar = darthS;
    }
}
});



//Attacking
//onclick button with ID "attack"
$("#attack").click( function(){




});





