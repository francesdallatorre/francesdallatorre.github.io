class Simon {
    constructor(colors, computer, player, start, level, currentLevel, playerSequence) {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.computer = [];
        this.player = [];
        this.initiate = false;
        this.level = 0;
        this.currentLevel = 0;
        // this function will take the user's input and save it into playerSequence variable, then call the function checkClick to compare players input with computer's input
        $('.btn').on('click', (event) => {
            console.log(event.currentTarget.id)
            const playerClick = event.currentTarget.id
            this.player.push(playerClick);
            this.checkClick(this.player.length - 1)
            this.roundManager()
        })

    }
    // this function initiates the game by prompting a random color
    init() {
        $('.start').on('click', () => {
            this.nextSequence()
            this.initiate = true;
        })
    }
    // this function generates a random color prompt, everytime it  is invoked it will increase the level by one, and it also stores the value of the random color prompt in a variable gameSequence
    nextSequence() {
        this.player = []
        this.level++
        $('.start').text('level: ' + this.level)
        const randomColor = this.colors[Math.floor(Math.random() * 4)]
        this.computer.push(randomColor)
        $('#' + randomColor).fadeOut(100).fadeIn(100)
        // flash and play music

    }
    // this function's control flow verify the equality of playerSequence with gameSequence, if it is equal we fire nextSequence for another round
    checkClick(round) {
        console.log(round)
        if (this.player[round] === this.computer[round]) {
            if (this.player.length === this.computer.length) {
                setTimeout(() => {
                    this.nextSequence();
                }, 1000)
            }
        } else {
            $('.start').text('GAME OVER');
            setTimeout(() => {
            }, 1000);
            $('.start').text("Start")
            this.reStart()
            console.log('game over')
        }
    }
    // this function will resets game values
    reStart() {
        this.level = 0;
        this.computer = []
        this.initiate = false;
    }
    // this function creates rounds 
    roundManager() {

    }
}
const game = new Simon();
game.init()