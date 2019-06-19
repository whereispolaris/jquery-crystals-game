//==== GLOBAL letIABLES ====
let wins;
let losses;
let totalScore;
let chosenNumber;
let crystaArray = ["1", "2", "3", "4"];

// ==== FUNCTIONS ====

function randomCrystalNumber() {
    // Random number from 1 to 12 for crystals
    crystalNumber = Math.ceil(Math.random() * 12);
    return crystalNumber;
}

function randomNumber() {
    // BUG: NUMBER IS NOT FROM 19 TO 120 - I THINK I FIXED IT
    chosenNumber = Math.floor((Math.random() * 101) + 19);
    return chosenNumber;
}

function startGame() {

    // Resets total score for round
    totalScore = 0;
    $("#bigScore").text(totalScore);
    // Chooses random number for round
    randomNumber();
    // Appends random target number
    $("#bigNumber").text(chosenNumber);

    // Add random number to each crystal image as data-number="randomCrystalNumber()" 
    // TRY TO CODE THIS BETTER - USE LOOP 
    $("#crystal-one").data("number", randomCrystalNumber());
    $("#crystal-two").data("number", randomCrystalNumber());
    $("#crystal-three").data("number", randomCrystalNumber());
    $("#crystal-four").data("number", randomCrystalNumber());

}

function scoreCheck() {
    // check if totalScore is equal to chosenNumber
    if (totalScore === chosenNumber) {
        $(".alert").addClass("show alert-success");
        $("#totalScoreDisplay").addClass("correct-number");
        $("#win-lose").text("YOU WON!");
        console.log("you've won!");
        // If equal, add to Wins
        wins += 1;
        $(".wins").text(wins);
        // Setting timeout to display correct numer before new game starts
        setTimeout(startGame, 1000);
    }
    // check if totalScore is greater than chosenNumber
    if (totalScore > chosenNumber) {
        $(".alert").addClass("show alert-danger");
        $("#win-lose").text("YOU LOST!");
        $("#totalScoreDisplay").addClass("wrong-number");
        console.log("you've lost!");
        losses += 1;
        $(".losses").text(losses);
        // Setting timeout to display wrong numer before new game starts
        setTimeout(startGame, 1000);
    }
}

// Crystal click event
$(".crystal").on("click", function () {
    $(".alert").removeClass("show alert-danger alert-success");
    $("#totalScoreDisplay").removeClass("wrong-number correct-number");
    $(".alert").addClass("hide");
    // Get the data from clicked crystal
    let crystalValue = $(this).data("number");

    // Add value to totalScore
    totalScore += crystalValue;
    $("#bigScore").text(totalScore);

    scoreCheck();
});

// ==== DOCUMENT READY ====
$(document).ready(function () {
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


// ======= PSEUDO CODE =======
// DOCUMENT READY
    // 1. Wins, losses, and totalScore is set to 0; 

// RESET (START) GAME - Function
    // 2. Number to guess is generated (chosenNumber) at the start of the game (Number between 19 and 120);

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