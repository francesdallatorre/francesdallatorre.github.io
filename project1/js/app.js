/**
 [x] declare my global variables
 [x] create a function "on" to announce the game starts by lighting the green btn after you click the on btn
 [x] - if the green-btn isn't click within 10 seconds turn off the game automatically
    - if the green-btn is pressed start the game and fire randomColor function
 [] create a function that will randomly choose between the colorBtns and do something, change color, play music, etc
 [] make a control flow to check if the #colorBtn is equal to the event.currentTarget when the users plays the game, if it is push that colorbtn in an array
 [] create a variable array colorsPressed that stores the color if the colorBtn cliked, if it's not clicked you lose
 [] create a function that calls the randomColor function and uses the color stored in the variable colorsPressed and adds a new random color
 [] create a function for each btn that fires everytime the btn is clicked

 */


$(() => {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Global Variables
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const $greenBtn = $('#green-btn');
    const $redBtn = $('#red-btn');
    const $yellowBtn = $('#yellow-btn');
    const $blueBtn = $('#blue-btn');
    const $onBtn = $('#on-btn');
    const $counter = $('#counter')
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Turn On the game board
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // onBtn click event, when pressed light up greenBtn 
    // get onBtn timeStamp to compare with greeBtn timeStap
    $onBtn.one('click', (event) => {
        const onBtnTime = event.timeStamp
        $greenBtn.css('background-color', 'lightgreen');
        //10 second countdown to start the game
        let counter = 10
        let countdown = setInterval(function () {
            counter--;
            if (counter <= 0) {
                // If counter gets to zero clear interval and send alert "game over, you ran out of time" and reload the browser
                clearInterval(countdown);
                alert("Game over, you ran out of time");
                location.reload()
            }
            $counter.text(`${counter} seconds to start`)
        }, 1000);
        ////////////////////////////////////////////////////////////////////////////////////////////
        // Green Button to Start Game
        ////////////////////////////////////////////////////////////////////////////////////////////
        $greenBtn.one('click', (event) => {
            // once pressed greenBtn make counter dissapear
            // get greenBtn timeStamp and compare to onBtn timeStamp
            $greenBtn.css('background-color', 'green')
            $counter.css('display', 'none')
            const greenTime = event.timeStamp;
            const totalTime = greenTime - onBtnTime;
            // if  total time is less than 10 secs, clear the counter,  Start the game generating a random colorBtn
            if (totalTime < 10000) {
                console.log("start the game")
                clearInterval(countdown);
                setTimeout(getRandomBtn, 1000) //first color prompt
            } else if (totalTime >= 10000) {
                console.log("Too Late")
            }
        })
    })
    ////////////////////////////////////////////////////////////////////////////////////////////
    // Random Color Btn generator
    ////////////////////////////////////////////////////////////////////////////////////////////
    const getRandomBtn = () => {
        let randomBtn = Math.floor(Math.random() * 4);
        console.log(randomBtn)
        if (randomBtn === 0) {
            $('.green').css('background-color', 'lightgreen')
        } else if (randomBtn === 1) {
            $('.red').css('background-color', 'palevioletred')
        } else if (randomBtn === 2) {
            $('.yellow').css('background-color', 'lightyellow')
        } else if (randomBtn === 3) {
            $('.blue').css('background-color', 'lightskyblue')
        }
    }




















})