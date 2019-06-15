var tempSelectChar = 0;
var tempSelectEnemy = 0;
var graveyard = [];
var baseAp;
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
    hp: 90,
    ap: 16,
    cap: 4
}
var luke = {
    hp: 100,
    ap: 14,
    cap: 3
}
var darthS = {
    hp: 110,
    ap: 2,
    cap: 15
}
var darthM = {
    hp: 120,
    ap: 1,
    cap: 20
}


main();
// main function that calls all other functions
function main() {
    reset();
    //Character Selection
    $(".character").click(function () {
        if (tempSelectChar == 0) {
            tempSelectChar = this.id;
            // console.log("you = " + tempSelectChar);
            switch (tempSelectChar) {
                case "obiwan":
                    tempChar = obiwan;
                    $("#obiwan").appendTo($("#you"));
                    $("#luke").appendTo($("#enemy"));
                    $("#luke").css("border","4px black solid");
                    $("#luke").css("background-color","red");
                    $("#darthS").appendTo($("#enemy"));
                    $("#darthS").css("border","4px black solid");
                    $("#darthS").css("background-color","red");
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthM").css("border","4px black solid");
                    $("#darthM").css("background-color","red");
                    baseAp = obiwan.ap
                    break;
                case "luke":
                    tempChar = luke;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#obiwan").css("border","4px black solid");
                    $("#obiwan").css("background-color","red");
                    $("#luke").appendTo($("#you"));
                    $("#darthS").appendTo($("#enemy"));
                    $("#darthS").css("border","4px black solid");
                    $("#darthS").css("background-color","red");
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthM").css("border","4px black solid");
                    $("#darthM").css("background-color","red");
                    baseAp = luke.ap
                    break;
                case "darthM":
                    tempChar = darthM;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#obiwan").css("border","4px black solid");
                    $("#obiwan").css("background-color","red");
                    $("#luke").appendTo($("#enemy"));
                    $("#luke").css("border","4px black solid");
                    $("#luke").css("background-color","red");
                    $("#darthM").appendTo($("#you"));
                    $("#darthS").appendTo($("#enemy"));
                    $("#darthS").css("border","4px black solid");
                    $("#darthS").css("background-color","red");
                    baseAp = darthM.ap
                    break;
                case "darthS":
                    tempChar = darthS;
                    $("#obiwan").appendTo($("#enemy"));
                    $("#obiwan").css("border","4px black solid");
                    $("#obiwan").css("background-color","red");
                    $("#luke").appendTo($("#enemy"));
                    $("#luke").css("border","4px black solid");
                    $("#luke").css("background-color","red");
                    $("#darthM").appendTo($("#enemy"));
                    $("#darthM").css("border","4px black solid");
                    $("#darthM").css("background-color","red");
                    $("#darthS").appendTo($("#you"));
                    baseAp = darthS.ap
                    break;
            }
        }

    });

    //Enemy Selection

    $(".character").click(function () {

        if (tempSelectChar != 0 && tempSelectEnemy == 0 && this.id != tempSelectChar) {
            tempSelectEnemy = this.id;
            // console.log("enemy = " + tempSelectEnemy);
            // console.log("you = " + tempSelectChar);

            switch (tempSelectEnemy) {
                case "obiwan":
                    tempEnemy = obiwan;
                    $("#obiwan").appendTo($("#defend"));
                    $("#obiwan").css("border","4px green solid");
                    $("#obiwan").css("background-color","black");
                    $("#obiwan").css("color","white");
                    break;
                case "luke":
                    tempEnemy = luke;
                    $("#luke").appendTo($("#defend"));
                    $("#luke").css("border","4px green solid");
                    $("#luke").css("background-color","black");
                    $("#luke").css("color","white");
                    break;
                case "darthM":
                    tempEnemy = darthM;
                    $("#darthM").appendTo($("#defend"));
                    $("#darthM").css("border","4px green solid");
                    $("#darthM").css("background-color","black");
                    $("#darthM").css("color","white");
                    break;
                case "darthS":
                    tempEnemy = darthS;
                    $("#darthS").appendTo($("#defend"));
                    $("#darthS").css("border","4px green solid");
                    $("#darthS").css("background-color","black");
                    $("#darthS").css("color","white");
                    break;
            }
        }

    });


    //Attacking
    $("#attack").click(function () {
        // console.log(tempSelectEnemy)
        // console.log(tempSelectChar)
        // console.log(tempChar.hp)
        // console.log(tempEnemy.hp)

        if (!(tempChar.hp <= 0) && !(tempEnemy.hp <= 0)) {
            
            tempChar.hp -= tempEnemy.cap;

            tempEnemy.hp -= tempChar.ap;

            tempChar.ap += baseAp;

            $("#" + tempSelectChar + "hp").html(tempChar.hp);
            $("#" + tempSelectEnemy + "hp").html(tempEnemy.hp);
            $("#result").html("You attacked " + tempSelectEnemy + " for " + tempChar.ap + " damage");
            $("#result").append("<br>");
            $("#result").append(tempSelectEnemy + " attacked you for " + tempEnemy.ap + " damage");
            surviveCheck();
        }
    });


    //Survival Check
    function surviveCheck() {

        if (graveyard.length < 3 && tempChar.hp <= 0 && tempEnemy.hp <= 0) {
            $("#result").html("You have been defeated --- GAME OVER!")
            $("#reset").show();
        } else if (tempChar.hp <= 0) {
            $("#result").html("You have been defeated --- GAME OVER!")
            $("#reset").show();
        } else if (tempEnemy.hp <= 0) {
            //victory round
            //send enemy to graveyard
            $("#result").html("You have defeated " + tempSelectEnemy + ", choose another enemy to fight!")
            $("#" + tempSelectEnemy).hide();
            graveyard.push(tempSelectEnemy);


            if (graveyard.length == 3) {
                // console.log(graveyard.length)
                // console.log(graveyard)
                $("#result").html("You have defeated " + tempSelectEnemy + ", Congratulations on defeating everyone!")
                tempSelectEnemy = 0;
                $("#reset").show();
            } else {
                tempSelectEnemy = 0;
                $(".character").click(function () {

                    if (tempSelectChar != 0 && tempSelectEnemy == 0 && this.id != tempSelectChar) {
                        tempSelectEnemy = this.id;
                        // console.log("enemy = " + tempSelectEnemy);
                        // console.log("you = " + tempSelectChar);
                        switch (tempSelectEnemy) {
                            case "obiwan":
                                tempEnemy = obiwan;
                                $("#obiwan").appendTo($("#defend"));
                                $("#obiwan").css("border","4px green solid");
                                $("#obiwan").css("background-color","black");
                                $("#obiwan").css("color","white");
                                break;
                            case "luke":
                                tempEnemy = luke;
                                $("#luke").appendTo($("#defend"));
                                $("#luke").css("border","4px green solid");
                                $("#luke").css("background-color","black");
                                $("#luke").css("color","white");
                                break;
                            case "darthM":
                                tempEnemy = darthM;
                                $("#darthM").appendTo($("#defend"));
                                $("#darthM").css("border","4px green solid");
                                $("#darthM").css("background-color","black");
                                $("#darthM").css("color","white");
                                break;
                            case "darthS":
                                tempEnemy = darthS;
                                $("#darthS").appendTo($("#defend"));
                                $("#darthS").css("border","4px green solid");
                                $("#darthS").css("background-color","black");
                                $("#darthS").css("color","white");
                                break;
                        }
                    }

                });

            }
        }
        else { }

    }




    $("#reset").click(function (){ reset()} );
    
    function reset()
    {
        
        // console.log("reset")
        tempSelectChar = 0;
        tempSelectEnemy = 0;
        graveyard = [];
        baseAp = 10;
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
        obiwan = {
            hp: 90,
            ap: 18,
            cap: 4
        }
        luke = {
            hp: 100,
            ap: 16,
            cap: 3
        }
        darthS = {
            hp: 110,
            ap: 3,
            cap: 15
        }
        darthM = {
            hp: 120,
            ap: 2,
            cap: 20
        }


        $("#obiwan").appendTo($(".start"));
        $("#obiwan").css("border","4px green solid");
        $("#obiwan").css("background-color","white");
        $("#obiwan").css("color","black");
        $("#obiwanhp").html(obiwan.hp);
        $("#obiwan").show();

        $("#luke").appendTo($(".start"));
        $("#luke").css("border","4px green solid");
        $("#luke").css("background-color","white");
        $("#luke").css("color","black");
        $("#lukehp").html(luke.hp);
        $("#luke").show();

        $("#darthS").appendTo($(".start"));
        $("#darthS").css("border","4px green solid");
        $("#darthS").css("background-color","white");
        $("#darthS").css("color","black");
        $("#darthShp").html(darthS.hp);
        $("#darthS").show();

        $("#darthM").appendTo($(".start"));
        $("#darthM").css("border","4px green solid");
        $("#darthM").css("background-color","white");
        $("#darthM").css("color","black");
        $("#darthMhp").html(darthM.hp);
        $("#darthM").show();

        

        $("#result").empty();
        $("#reset").hide();
    };






}






















