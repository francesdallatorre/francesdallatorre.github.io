class Simon {
    constructor(colors, gameSequence, playerSequence, start, level) {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.gameSequence = [];
        this.playerSequence = [];
        this.start = false;
        this.level = 0
        $('.btn').click((event) => {
            console.log(typeof event.currentTarget.id)
        })
    }
    // this function initiates the game by prompting a random color
    init() {
        $('.start').one('click', () => {
            this.nextSequence()
        })
    }
    // this function generates a random color prompt, everytime it  is invoked it will increase the level by one, and it also stores the value of the random color prompt in a variable gameSequence
    nextSequence() {
        this.level++
        $('.start').text('level: ' + this.level)
        const randomNumber = Math.floor(Math.random() * 4)
        const randomColor = this.colors[randomNumber]
        this.gameSequence.push(randomColor)
        $('#' + randomColor).fadeOut(100).fadeIn(100)
        // flash and play music
    }

    checkClick(round) {
        if (this.playerSequence[round] === this.gameSequence[round]) {
            if (this.playerSequence.length === this.gameSequence.length) {
                setTimeout(() => {
                    this.nextSequence();
                }, 1000)
            }
        } else {
            $('.start').text('GAME OVER');
            setTimeout(() => {

            }, 1000);
            $('.start').text(Start)
        }
    }



}
const game = new Simon();
game.init()