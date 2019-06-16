// ======= PSEUDO CODE =======
// DOCUMENT READY
    // 1. Wins, losses, and totalScore is set to 0; 

// RESET (START) GAME - Function
    // 2. NumBer to guess is generated (chosenNumber) at the start of the game (Number between 19 and 120);

    // 3. Numbers for each crystal (crystal1, crystal2, crystal3, crystal14) are also generated at random (Number between 1 and 12);
        // Each Crystal gets assigned a number

 // CLICK EVENT 
    // 4. When user clicks on one crystal
        // Add crystal number value to totalScore:
        // Check for chosenNumber is  GREATER THAN OR EQUAL to total score
            // If equal: Wins++
                // RESET (START) GAME - Function
            // If  Greater than: Losses++
                // RESET (START) GAME - Function
// RESET (START) GAME - Function
    // totalScore is set to 0;
    // chosenNumber is generated;
    // random numbers are generated for crystals

// ----------

//==== GLOBAL VARIABLES ====
var wins;
var losses;
var totalScore;
var chosenNumber;

var crystaArray = ["1", ]

// ==== FUNCTIONS ====

function startGame() {
    console.log("game starts");
    // Resets total score for round
    totalScore = 0;
    $("#bigScore").text(totalScore);
    // Chooses random number for round
    randomNumber();
    // Appends random target number
    $("#bigNumber").text(chosenNumber);
}

function randomNumber() {
    // BUG: NUMBER IS NOT FROM 19 TO 120 - I THINK I FIXED IT
    chosenNumber = Math.floor((Math.random() * 101) + 19);
    return chosenNumber;
}

// TEMPORARY - Set static data values for each crystal for now

// Crystal click event
$(".crystal").on("click", function(){
    console.log("You clicked on a crystal!");
    
    // Get the data from clicked crystal
    var crystalValue = $(this).data("number");
    console.log(crystalValue);

    // Add value to totalScore
    totalScore += crystalValue;
    console.log(totalScore);
    $("#bigScore").text(totalScore);

    // check if totalScore is greater than or equal to chosenNumber
        // If equal, add to Wins
        // If greater, add to losses
        // else, continue game
});


// ==== DOCUMENT READY ====
$(document).ready(function(){
    console.log("Tis ready");
    // set wins to 0
    wins = 0;
    // Add wins to page
    $(".wins").text(wins);
    // set losses to 0
    losses = 0;
    // Add losses to page
    $(".losses").text(losses);

    startGame();

});








