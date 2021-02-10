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
    constructor(colors, sequence, playerSequence, start, level) {
        this.colors = ['green', 'red', 'yellow', 'red'];
        this.sequence = [];
        this.playerSequence = [];
        this.start = false;
        this.level = 0;
    }


}

const game = new Simon();

