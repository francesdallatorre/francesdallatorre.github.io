/**
 [x] declare my global variables
 [x] create a function "on" to announce the game starts by lighting the green btn after you click the on btn
[x]  - if the green-btn isn't click within 10 seconds turn off the game automatically
    - if the green-btn is pressed start the game and fire randomColor function
 [] create a function randomColor that will light on a random color when the game starts (on Function), if the colorBtn of that random color is pressed then push that color into an array
 [] create a variable array colorsPressed that stores the color if the color-btn cliked, if it's not clicked you lose
 [] create a function that calls the randomColor function and uses the color stored in the variable colorsPressed and adds a new random color
 [] create a function for each btn that fires everytime the btn is clicked
 []

 */

// Global Variables
// const $greenBtn = $('#green-btn');
// const $redBtn = $('#red-btn');
// const $yellowBtn = $('#yellow-btn');
// const $blueBtn = $('#blue-btn');
// const $onBtn = $('#on-btn');
// const $counter = $('#counter')


// let counter = 10
// let countdown = setInterval(function () {
//     counter--;
//     if (counter <= 0) {
//         clearInterval(countdown)
//     }
//     console.log(counter)
//     $counter.text(`${counter}`)

// }, 1000);












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
    // onBtn click event, when pressed light up greenBtn 
    // get onBtn timeStamp to compare with greeBtn timeStap
    $onBtn.one('click', (event) => {
        const onBtnTime = event.timeStamp
        $greenBtn.css('background-color', 'lightgreen');
        // when onbtn pressed start 10 second countdown
        let counter = 10
        let countdown = setInterval(function () {
            counter--;
            if (counter <= 0) {
                // If counter gets to zero clear interval and send alert "game over, you ran out of time" and reload the browser
                clearInterval(countdown);
                alert("Game over, you ran out of time");
                location.reload()
            }
            $counter.text(`${counter}`)
        }, 1000);

        $greenBtn.one('click', (event) => {
            // once pressed greenBtn make counter dissapear
            // get greenBtn timeStamp and compare to onBtn timeStamp
            $counter.css('display', 'none')
            const greenTime = event.timeStamp;
            const totalTime = greenTime - onBtnTime;
            // if statement to start the game, if greenBtn is pressed within 10 secs
            if (totalTime < 10000) {
                console.log("start the game")
                clearInterval(countdown)
            } else if (totalTime >= 10000) {
                console.log("Too Late")
            }
        })




    })



























})