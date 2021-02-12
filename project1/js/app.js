
let = new Audio('/Users/francesdallatorre/Desktop/github_pages/project1/sounds/37749__quilt__blues-for-the-masses-03.ogg')
class Simon {
    constructor(colors, computer, player, playerClick, start, level, speed, greenAudio, redAudio, yellowAudio, blueAudio, wrongAudio, winnerAudio) {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.computer = [];
        this.player = [];
        this.playerClick;
        this.initiate = false;
        this.level = 0;
        this.speed;
        this.greenAudio = new Audio('https://dl.dropboxusercontent.com/s/0gv5xq9bggrc1fc/a_note1.wav');
        this.redAudio = new Audio('https://dl.dropboxusercontent.com/s/vf22bxhw2lmintz/b_note1.wav');
        this.yellowAudio = new Audio('https://dl.dropboxusercontent.com/s/0ml89c51jtlpfva/f_note1.wav');
        this.blueAudio = new Audio('https://dl.dropboxusercontent.com/s/fm5d186yliwwm5w/g_note1.wav')
        this.wrongAudio = new Audio('https://dl.dropboxusercontent.com/s/r37z5gz4atss8aa/family_fortunes__wrong_answer.mp3')
        this.winnerAudio = new Audio('https://freesound.org/people/Mativve/sounds/391539/download/391539__mativve__electro-win-sound.wav')

        // this block of code is actively listening for click events, and will take the user's input and save it into playerSequence variable, then call the function checkClick to compare players input with computer's input.
        $('.btn').on('click', (event) => {
            console.log(event.currentTarget.id)
            this.playerClick = event.currentTarget.id
            setTimeout(() => {
                $('.' + this.playerClick).addClass(this.playerClick + '-flash')
                this.playSounds()
                setTimeout(() => {
                    $('.' + this.playerClick).removeClass(this.playerClick + '-flash')
                }, 200);
            }, 50);
            this.player.push(this.playerClick);
            this.checkClick(this.player.length - 1)
        })

    }

    // this function initiates the game by clicking the on button
    init() {
        $('.start').on('click', (event) => {
            if (this.initiate === false) {
                $('.start').css('background-color', 'rgb(255, 102, 102)');
                this.initiate = true;
                this.nextSequence();
                // and if clicked again it resets the game
            } else {
                this.reStart()
            }
        })
    }
    playSounds() {
        if (this.playerClick === 'green') {
            this.greenAudio.play()
        } else if (this.playerClick === 'red') {
            this.redAudio.play()
        } else if (this.playerClick === 'yellow') {
            this.yellowAudio.play()
        } else if (this.playerClick === 'blue') {
            this.blueAudio.play()
        }
    }

    // this function generates a random color prompt, everytime it  is invoked it will increase the level by one, and it also stores the value of the random color prompt in a variable gameSequence
    nextSequence() {
        // increase level by one
        this.level++
        this.speed = 1000;

        if (this.level > 3) {
            this.speed = 500
        } else if (this.level > 7) {
            this.speed = 200
        }
        // announce winner when a level is reached and reStart
        if (this.level === 10) {
            this.announceWinner()
            this.reStart()
        }
        // empty player's array for each round
        this.player = []
        // display level on the game board screen
        $('.count').text(this.level)
        // generate a random color and store it in computer array
        const randomColor = this.colors[Math.floor(Math.random() * 4)]
        this.computer.push(randomColor)
        // set timeout to create an ilusion of speed
        setTimeout(() => {
            $('#' + randomColor).addClass(randomColor + "-flash")
            // play sounds
            setTimeout(() => {
                $('#' + randomColor).removeClass(randomColor + "-flash")
            }, this.speed);
        }, this.speed);

    }
    // this function's control flow verify the equality of playerSequence with gameSequence, if it is equal we fire nextSequence for another round
    checkClick(round) {
        // comparte players array with computer's array
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
        $('.announce').text('YOU WON!');
        this.winnerAudio.play()
        $('.score').text(`score: ${this.computer.length - 1}`)
    }
    // this function will resets game values
    reStart() {
        this.level = 0;
        this.computer = [];
        this.initiate = false;
        $('.count').text('0');
        $('.start').css('background-color', 'red');
    }
    gameOver() {
        $('.announce').text('GAME OVER').css('color', 'red');
        this.wrongAudio.play()
        $('.score').text(`score: ${this.computer.length - 1}`)
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
const game = new Simon();
game.init()