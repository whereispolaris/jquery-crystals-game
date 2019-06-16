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

var wins;
var losses;
var totalScore;
var chosenNumber;

function startGame() {
    console.log("game starts");

}

$(document).ready(function(){
    console.log("Tis ready");
});



// BOTTOM
startGame();



