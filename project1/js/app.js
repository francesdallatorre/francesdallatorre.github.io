class Simon {
    constructor(colors, computer, player, start, level, speed) {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.computer = [];
        this.player = [];
        this.initiate = false;
        this.level = 0;
        this.speed;
        // this function will take the user's input and save it into playerSequence variable, then call the function checkClick to compare players input with computer's input
        $('.btn').on('click', (event) => {
            console.log(event.currentTarget.id)
            const playerClick = event.currentTarget.id
            this.player.push(playerClick);
            this.checkClick(this.player.length - 1)
        })
    }
    // this function initiates the game by prompting a random color
    init() {
        $('.start').one('click', (event) => {
            $('.start').css('background-color', 'rgb(255, 102, 102)')
            this.nextSequence()
            this.initiate = true;
        })
    }
    // this function generates a random color prompt, everytime it  is invoked it will increase the level by one, and it also stores the value of the random color prompt in a variable gameSequence
    nextSequence() {
        // reset the player sequence array so that player has to re input all the previous colors plus a random color
        $('.btn').attr('disabled', 'disabled')
        this.player = []
        this.level++
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
        $('.btn').removeAttr('disabled')
        console.log(round)
        if (this.player[round] === this.computer[round]) {
            if (this.player.length === this.computer.length) {
                this.nextSequence()
            } else if (this.level === 7) {
                $('.game').css('display', 'none')
            }
        } else {
            setTimeout(() => {
            }, 1000);
            this.reStart()
        }
    }
    // this function will resets game values
    reStart() {
        this.level = 0;
        this.computer = []
        this.initiate = false;
        $('.count').text('0');
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
}
const game = new Simon();
game.init()