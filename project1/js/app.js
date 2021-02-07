/**
 [x] declare my global variables
 [x] create a function "on" to announce the game starts by lighting the green btn after you click the on btn
 [x] - if the green-btn isn't click within 10 seconds turn off the game automatically
    - if the green-btn is pressed start the game and fire randomColor function
 [] create a function that will randomly choose between the colorBtns and do something, change color, play music, etc
 [] create a new class on css for each button to light up
 [] make a control flow to check if the #colorBtn is equal to the event.currentTarget when the users plays the game, if it is push that colorbtn in an array
 [] create a variable array colorsPressed that stores the color if the colorBtn cliked, if it's not clicked you lose
 [] create a function that calls the randomColor function and uses the color stored in the variable colorsPressed and adds a new random color
 [] create a function for each btn that fires everytime the btn is clicked

 */
////////////////////////////////////////////////////////////////////////////////////////////////
// Global Variables
////////////////////////////////////////////////////////////////////////////////////////////////


class Game {
    constructor($greenBtn, $redBtn, $yellowBtn, $blueBtn, $onBtn, $counter) {
        this.$greenBtn = $('#green-btn');
        this.$redBtn = $('#red-btn');
        this.$yellowBtn = $('#yellow-btn');
        this.$blueBtn = $('#blue-btn');
        this.$onBtn = $('#on-btn');
        this.$counter = $('#counter')
    }
    turnOnGame() {
        //press on button to turn on the game board
        this.$onBtn.one('click', (event) => {
            let onBtnTime = event.timeStamp
            this.$greenBtn.css('background-color', 'lightgreen')
            alert('press green to start')
            //10 seconds countdown
            let counter = 10
            let countdown = setInterval(function () {
                counter--;
                if (counter <= 0) {
                    // If counter gets to zero clear interval and send alert "game over, you ran out of time" and reload the browser
                    clearInterval(countdown);
                    alert("Game over, you ran out of time");
                    location.reload()
                }
                $('#counter').text(counter)
            }, 1000);
            // press greenBtn within 10 secs to start the game
            this.$greenBtn.on('click', (event) => {
                // once pressed greenBtn make counter dissapear
                // get greenBtn timeStamp and compare to onBtn timeStamp, the difference between them should be less than 10 seconds
                this.$greenBtn.css('background-color', 'green')
                $('#counter').css('display', 'none')
                const greenTime = event.timeStamp;
                const totalTime = greenTime - onBtnTime;
                // if  total time is less than 10 secs, clear the counter,  Start the game generating a random colorBtn
                if (totalTime < 10000) {
                    console.log("start the game")
                    clearInterval(countdown);
                    // setTimeout(getRandomBtn(), 1000) //first color prompt
                }
            })
        })


    }
}


let game = new Game()
game.turnOnGame()







