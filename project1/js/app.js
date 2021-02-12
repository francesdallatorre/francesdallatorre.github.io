
let = new Audio('/Users/francesdallatorre/Desktop/github_pages/project1/sounds/37749__quilt__blues-for-the-masses-03.ogg')
class Simon {
    constructor(colors, computer, player, start, level, speedAudio, greenAudio, redAudio, yellowAudio, blueAudio) {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.computer = [];
        this.player = [];
        this.initiate = false;
        this.level = 0;
        this.speed;
        // this.greenAudio = new Audio();
        // this.redAudio = new Audio();
        // this.yellowAudio = new Audio();
        // this.blueAudio = new Audio()

        // this function will take the user's input and save it into playerSequence variable, then call the function checkClick to compare players input with computer's input
        $('.btn').on('click', (event) => {
            console.log(event.currentTarget.id)
            const playerClick = event.currentTarget.id
            setTimeout(() => {
                $('.' + playerClick).addClass(playerClick + '-flash')
                setTimeout(() => {
                    $('.' + playerClick).removeClass(playerClick + '-flash')
                }, 200);
            }, 50);
            this.player.push(playerClick);
            this.checkClick(this.player.length - 1)
        })


    }
    // this function initiates the game by prompting a random color
    init() {
        $('.start').on('click', (event) => {
            if (this.initiate === false) {
                $('.start').css('background-color', 'rgb(255, 102, 102)');
                this.initiate = true;
                this.nextSequence();
            } else {
                $('.start').text('Off')
                $('.start').css('color', 'white')
                this.reStart()
            }
        })
    }

    // this function generates a random color prompt, everytime it  is invoked it will increase the level by one, and it also stores the value of the random color prompt in a variable gameSequence
    nextSequence() {
        // reset the player sequence array so that player has to re input all the previous colors 
        this.level++
        if (this.level === 4) {
            this.announceWinner()
            this.reStart()
        }
        this.player = []
        this.speed = 1000;
        $('.count').text(this.level)
        const randomColor = this.colors[Math.floor(Math.random() * 4)]
        this.computer.push(randomColor)
        setTimeout(() => {
            $('#' + randomColor).addClass(randomColor + "-flash")
            // play sounds
            setTimeout(() => {
                $('#' + randomColor).removeClass(randomColor + "-flash")
            }, 1000);
        }, 1000);
    }
    // this function's control flow verify the equality of playerSequence with gameSequence, if it is equal we fire nextSequence for another round
    checkClick(round) {
        if (this.player[round] === this.computer[round]) {
            if (this.player.length === this.computer.length) {
                this.nextSequence()
            }
        } else {
            this.gameOver()
            setTimeout(() => {
                this.reStart()
            }, 1000);
        }
    }
    announceWinner() {
        $('.announce').text('YOU WON!')


    }
    // this function will resets game values
    reStart() {
        this.level = 0;
        this.computer = [];
        this.initiate = false;
        // $('.count').text('0');
        // $('.start').css('background-color', 'red');
        // $('.start').text('On');
    }
    gameOver() {
        $('.announce').text('GAME OVER').css('color', 'red');
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
const game = new Simon();
game.init()