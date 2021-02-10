/**
 [x] declare my global variables
 [] create a function "on" to announce the game starts by lighting the green btn after you click the on btn
 [] - if the green-btn isn't click within 10 seconds turn off the game automatically
    - if the green-btn is pressed start the game and fire randomColor function
 [] create a function that will randomly choose between the colorBtns and do something, change color, play music, etc
 [] create a new class on css for each button to light up
 [] make a control flow to check if the #colorBtn is equal to the event.currentTarget when the users plays the game, if it is push that colorbtn in an array
 [] create a variable array colorsPressed that stores the color if the colorBtn cliked, if it's not clicked you lose
 [] create a function that calls the randomColor function and uses the color stored in the variable colorsPressed and adds a new random color
 [] create a function for each btn that fires everytime the btn is clicked
 [] display rounds as you go
 */

class Simon {
    constructor(btns, colors, sequence, playerSequence, start, level, startBtn) {
        this.btns = $('.btn')
        this.colors = ['green', 'red', 'yellow', 'red'];
        this.sequence = [];
        this.playerSequence = [];
        this.start = false;
        this.level = 0;
        this.startBtn = $('.start')
    }

    initiate() {
        // this function will change the boolean from 'start' to true when start is pressed and will display the round number
        if (this.start === false) {
            this.startBtn.one('click', (event) => {
                if (event.currentTarget) {
                    this.startBtn.text('round ' + this.level)
                }
                this.randomColor()
                this.start = true;
            })
        }
    }
    randomColor() {
        this.playerSequence = [];
        this.level++;
        let random = this.colors[Math.floor(Math.random() * 4)];
        this.sequence.push(random);
        $('#' + random).fadeIn(100).fadeOut(50).fadeIn(100).fadeOut(50).fadeIn(100);
        console.log(random + " sounds")
        this.playerClicks()
    }

    playerClicks() {
        this.btns.on('click', (event) => {
            let playerClickChoice = (event.currentTarget.id)
            this.playerSequence.push(playerClickChoice)
            console.log(this.playerSequence)
        })
    }






}


const game = new Simon();
game.initiate()

