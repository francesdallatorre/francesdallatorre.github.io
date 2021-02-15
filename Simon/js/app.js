class Simon {
    constructor(colors, computer, player, playerClick, start, level, speed, greenAudio, redAudio, yellowAudio, blueAudio, wrongAudio, winnerAudio) {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.computer = [];
        this.player = [];
        this.playerClick;
        this.initiate = false;
        this.level = 0;
        this.speed = 2000;
        this.greenAudio = new Audio('https://dl.dropboxusercontent.com/s/0gv5xq9bggrc1fc/a_note1.wav');
        this.redAudio = new Audio('https://dl.dropboxusercontent.com/s/vf22bxhw2lmintz/b_note1.wav');
        this.yellowAudio = new Audio('https://dl.dropboxusercontent.com/s/0ml89c51jtlpfva/f_note1.wav');
        this.blueAudio = new Audio('https://dl.dropboxusercontent.com/s/fm5d186yliwwm5w/g_note1.wav')
        this.wrongAudio = new Audio('https://dl.dropboxusercontent.com/s/r37z5gz4atss8aa/family_fortunes__wrong_answer.mp3')


        // this block of code is actively listening for click events, and will take the user's input and save it into playerSequence variable, then call the function checkClick to compare players input with computer's input.
        $('.btn').on('click', (event) => {
            if (this.initiate) {
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
            } else {
                alert('press on to play')
            }
        })


    }
    // this function initiates the game by clicking the on button
    init() {
        let onOff = 0
        $('.start').on('click', (event) => {
            onOff++
            console.log(onOff)
            if (onOff % 2 !== 0 && !this.initiate) {
                $('.start').css('background-color', 'rgb(255, 102, 102)');
                this.initiate = true;
                this.nextSequence()
                setTimeout(() => {
                    $('.announce').text('Go!')
                    setTimeout(() => {
                        $('.announce').text('')
                    }, 500);
                }, 500);
            } else if (onOff % 2 === 0) {
                this.reset()
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
    roundManager() {
        this.player = []
        if (this.level === 3) {
            $('.count').text(this.level)
            this.announceWinner()
        } else {
            this.nextSequence()
        }

    }
    // this function generates a random color prompt, everytime it  is invoked it will increase the level by one, and it also stores the value of the random color prompt in a variable gameSequence
    nextSequence() {
        this.level++;
        $('.count').text(this.level)
        // generate a random color and store it in computer array
        const randomColor = this.colors[Math.floor(Math.random() * 4)]
        this.computer.push(randomColor)
        // set timeout to create an ilusion of speed
        setTimeout(() => {
            $('#' + randomColor).addClass(randomColor + "-flash")
            setTimeout(() => {
                $('#' + randomColor).removeClass(randomColor + "-flash")
            }, 500);
        }, this.speed);

    }

    // this function's control flow verify the equality of playerSequence with gameSequence, if it is equal we fire nextSequence for another round
    checkClick(round) {
        // compare players array with computer's array, if the match 
        if (this.player[round] === this.computer[round]) {
            if (this.player.length === this.computer.length) {
                this.roundManager()
            }
        } else {
            this.gameOver()
        }
    }
    // this function will stop the game, announce the winner, and display score
    announceWinner() {
        $('.announce').text('YOU WON!');
        $('.score').text(`score: ${this.computer.length} `)
        setTimeout(() => {
            this.reset()
        }, 1000);
    }
    // this function will resets game values
    reset() {
        this.level = 0;
        this.computer = [];
        this.player = []
        this.initiate = false;
        $('.count').text('0');
        $('.start').css('background-color', 'red');
        $('.score').text('');
        $('.announce').text('')
    }
    // this function announces game over, score, and after 2 seconds resets game values
    gameOver() {
        $('.announce').text('GAME OVER').css('color', 'red');
        this.wrongAudio.play()
        if (this.computer.length > 0) {
            $('.score').text(`score: ${this.computer.length - 1} `)
        } else {
            $('.score').text(`score: ${this.computer.length} `)
        }
        setTimeout(() => {
            this.reset()
        }, 3000);
    }
}
const game = new Simon();
game.init()