var redCrystalNumber = Math.floor(Math.random()*4 + 1);
var blueCrystalNumber = Math.floor(Math.random()*4 + 1);
var greenCrystalNumber = Math.floor(Math.random()*4 + 1);
var purpleCrystalNumber = Math.floor(Math.random()*4 + 1);

randomNumber = Math.floor(Math.random()*99);
$("#random-number-box").html("<h2>Random Number: " + randomNumber + "</h2>");

// setup global variables
var totalScore = 0;
var wins = 0;
var losses =0;
var gameReset = false;

// Crystal image click funcions
$("#first-crystal").on("click", function(){
    clickFunction(redCrystalNumber); 
});
$("#second-crystal").on("click", function(){
    clickFunction(blueCrystalNumber);
});
$("#third-crystal").on("click", function(){
    clickFunction(greenCrystalNumber);
});
$("#fourth-crystal").on("click", function(){
    clickFunction(purpleCrystalNumber);
});

// Execute Click Function
function clickFunction(crystalNumber){
    if (gameReset) {
        randomNumber = Math.floor(Math.random()*99);
        $("#random-number-box").html("<h2>Random Number: " + randomNumber + "</h2>");
        $("#total-score").html("<h2>" + "" + "</h2>");
        redCrystalNumber = Math.floor(Math.random()*4 + 1);
        blueCrystalNumber = Math.floor(Math.random()*4 + 1);
        greenCrystalNumber = Math.floor(Math.random()*4 + 1);
        purpleCrystalNumber = Math.floor(Math.random()*4 + 1);
        $("#win-loss-tally").html("<h2></h2>");
        gameReset = false;
    }
    else {
        console.log("entered click function 1");
        totalScore += crystalNumber;
        $("#total-score").html("<h2>" + totalScore+ "</h2>");
        winlose();
    }
}
// Determine win or loss
function winlose(){
    if (totalScore === randomNumber){
        wins ++;
        $("#win-loss").html("");
        $("#win-loss").html("<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>");
        $("#win-loss-tally").html("<h2> You Won! </h2>");
        gameReset = true;
        totalScore = 0;
    }
    else if (totalScore > randomNumber){
        losses ++;
        $("#win-loss").html("");
        $("#win-loss").append("<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>");
        $("#win-loss-tally").html("<h2> You Lost</h2>");
        gameReset = true;
        totalScore = 0;

    }
};