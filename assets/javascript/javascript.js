var tempSelectChar = 0;
var tempSelectEnemy = 0;
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

main();
// main function that calls all other functions
function main() {

    //*****INSERT****** 
    //reset function here: HP/AP/CAP of temps
    //reset css/html
    reset();


    //Character Selection
    $(".character").click(function () {
        if (tempSelectChar == 0) {
            tempSelectChar = this.id;
            console.log("you = " + tempSelectChar);
            switch (tempSelectChar) {
                case "obiwan":
                    tempChar = obiwan;
                    $("#obiwan").appendTo($("#you"));
                    $("#luke").appendTo($("#enemy"));
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthS").appendTo($("#enemy"));
                    break;
                case "luke":
                    tempChar = luke;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#luke").appendTo($("#you"));
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthS").appendTo($("#enemy"));
                    break;
                case "darthM":
                    tempChar = darthM;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#luke").appendTo($("#enemy"));
                    $("#darthM").appendTo($("#you"));
                    $("#darthS").appendTo($("#enemy"));
                    break;
                case "darthS":
                    tempChar = darthS;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#luke").appendTo($("#enemy"));
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthS").appendTo($("#you"));
                    break;
            }
        }
    
    });

    //Enemy Selection
    $(".character").click(function () {
        if (tempSelectChar != 0 && tempSelectEnemy == 0 && this.id != tempSelectChar) {
            tempSelectEnemy = this.id;
            console.log("enemy = " + tempSelectEnemy);
            console.log("you = " + tempSelectChar);
            switch (tempSelectEnemy) {
                case "obiwan":
                    tempEnemy = obiwan;
                    $("#obiwan").appendTo($("#defend"));
                    break;
                case "luke":
                    tempEnemy = luke;
                    $("#luke").appendTo($("#defend"));
                    break;
                case "darthM":
                    tempEnemy = darthM;
                    $("#darthM").appendTo($("#defend"));
                    break;
                case "darthS":
                    tempEnemy = darthS;
                    $("#darthS").appendTo($("#defend"));
                    break;
            }
        }
    
    });




    



    //Attacking
    ////////////////////////////////////////////////



}

//Enemy Selection
//Move enemy to defender div


// Character Selection
//move all other characters to enemys













//Attacking
$("#attack").click(function () {

    tempChar.hp -= tempEnemy.cap;

    tempEnemy.hp -= tempChar.ap;

    tempChar.ap *= 2;

});


//Survival Check
function SurviveCheck() {

    if (graveyard.length < 3 && tempChar.hp == 0 && tempEnemy.hp == 0) {
        //draw
    } else if (tempChar.hp <= 0) {
        //loss
    } else if (tempEnemy.hp <= 0) {
        //victory round
        //send enemy to graveyard
        if (graveyard.length = 3) {
            //victory game
        } else {
            //choose next opponent
        }
    }

}

function reset() {
    tempSelectChar = 0;
    tempSelectEnemy = 0;
    graveyard = [];

    tempChar = {
        hp: 0,
        ap: 0,
        cap: 0
    }
    tempEnemy = {
        hp: 0,
        ap: 0,
        cap: 0
    }
}




