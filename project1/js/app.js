/**
 [x] declare my global variables
 [x] create a function "on" to announce the game starts by lighting the green btn after you click the on btn
 [x] - if the green-btn isn't click within 10 seconds turn off the game automatically
    - if the green-btn is pressed start the game and fire randomColor function
 [x] create a function that will randomly choose between the colorBtns and do something, change color, play music, etc
 [x] create a new class on css for each button to light up
 [x] make a control flow to check if the #colorBtn is equal to the event.currentTarget when the users plays the game, if it is push that colorbtn in an array
 [] create a variable array colorsPressed that stores the color if the colorBtn cliked, if it's not clicked you lose
 [] create a function that calls the randomColor function and uses the color stored in the variable colorsPressed and adds a new random color
 [] create a function for each btn that fires everytime the btn is clicked

 */
////////////////////////////////////////////////////////////////////////////////////////////////
// Game Object
////////////////////////////////////////////////////////////////////////////////////////////////
class Game {
    constructor(greenBtn, redBtn, yellowBtn, blueBtn, onBtn, storeRandom, list, clicked) {
        this.greenBtn = $('#green-btn');
        this.redBtn = $('#red-btn');
        this.yellowBtn = $('#yellow-btn');
        this.blueBtn = $('#blue-btn');
        this.onBtn = $('#on-btn');
        this.storeRandom = [];
        this.list = [];
        this.clicked = [];
    }
    // this function will get the randomNumber stored in 'list' and compare it with the click event, if it matches we will store that same  value in a variable 'clicked, else the game stops
    playRound() {
        const values = [
            { btn: this.greenBtn, val: '0' },
            { btn: this.redBtn, val: '1' },
            { btn: this.yellowBtn, val: '2' },
            { btn: this.blueBtn, val: '3' }
        ]
        for (let i = 0; i < values.length; i++) {
            if (this.list[0] === values[i].val) {
                (values[i].btn).one('click', (event) => {
                    console.log(event.currentTarget)
                    this.clicked.push(values[i].val)
                    console.log(this.clicked)
                    console.log("you got it")
                })
            } else if (this.list[0] !== values[i].val) {
                (values[i].btn).one('click', (event) => {
                    console.log(event.currentTarget)
                    console.log("you missed, game over")
                })
            }
        }
    }
    // this function will generate a randomNumber that will pick a color and display it, and this value will be stored in a variable called 'list' to later compare it with the user click event choice
    generateRandomColorBtn() {
        let randomNumber = Math.floor(Math.random() * 4);
        setTimeout(() => {
            console.log("randon numbers is " + randomNumber)
            if (randomNumber === 0) {
                this.greenBtn.css('background-color', 'lightgreen')
                console.log("green on")
                this.list.push('0')
            } else if (randomNumber === 1) {
                this.redBtn.removeClass('.red');
                this.redBtn.addClass('red-on');
                console.log("red on")
                this.list.push('1')
            } else if (randomNumber === 2) {
                this.yellowBtn.removeClass('.yellow');
                this.yellowBtn.addClass('yellow-on')
                console.log("yellow on")
                this.list.push('2')
            } else if (randomNumber === 3) {
                this.blueBtn.removeClass('.blue')
                this.blueBtn.addClass('blue-on')
                console.log("blue-on")
                this.list.push('3')
            }
            this.playRound()
        }, 2000);

    }
    // this function inititalizes the game
    turnOnGame() {
        //press on button to turn on the game board
        this.onBtn.one('click', (event) => {
            let onBtnTime = event.timeStamp
            this.greenBtn.removeClass('.green');
            this.greenBtn.addClass('green-on')
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
            this.greenBtn.one('click', (event) => {
                this.greenBtn.css('background-color', 'green')
                // once pressed greenBtn make counter dissapear
                // get greenBtn timeStamp and compare to onBtn timeStamp, the difference between them should be less than 10 seconds
                $('#counter').css('display', 'none')
                const greenTime = event.timeStamp;
                const totalTime = greenTime - onBtnTime;
                // if  total time is less than 10 secs, clear the counter,  Start the game generating a random colorBtn
                if (totalTime < 10000) {
                    console.log("start the game")
                    clearInterval(countdown)
                    this.generateRandomColorBtn()
                    //first color prompt


                }
            })
        })
    }

}



let game = new Game()
game.turnOnGame()










