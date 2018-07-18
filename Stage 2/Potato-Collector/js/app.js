let allEnemies = [];
let allGems = [];
let paused = true;
let constants = {
    FONT: '20pt ArcadeClassic',
    FONT_COLOR: 'white',
    ENTITY_HEIGHT: 50,
    ENTITY_WIDTH: 50,
    MIN_SPEED: 20,
    MAX_SPEED: 100,
    PLAYER_START_X: 300,
    PLAYER_START_Y: 470,
    PLAYER_MOVEMENT: 50,
    POSITION_X: [0, 100, 200, 300, 400, 500, 600],
    POSITION_Y: [160, 230, 310, 390],
    LEFT_BOUNDARY: 0,
    TOP_BOUNDARY: 20,
    RIGHT_BOUNDARY: 600,
    BOTTOM_BOUNDARY: 470
};


$(document).ready(function() {
    let modalDialog = document.getElementById('modal-dialog');
    document.getElementById('skillsList')
        .onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            modalDialog.classList.toggle('popped');
        };

    gameMusic.play();
    gameMusic.volume(0.3);

    $("#playGame").click(function() {
        $("#startScreen").fadeOut('fast');
        gameSelect.play();
        gameMusic.fade(0.3, 0.7, 1000);
        paused = false;
    });

    $("#playAgain").click(function() {
        $("#gameOver").hide()
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        paused = false;
    });

    $("#contactsShow").click(function() {
        gameSelect.play();
        gameMusic.fade(0.3, 0.7, 1000);
        $("#contacts").fadeIn('fast');
    });

    $("#contactsClose").click(function() {
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#contacts").fadeOut('fast');
    });

    $("#historyShow").click(function() {
        gameSelect.play();
        gameMusic.fade(0.3, 0.7, 1000);
        $("#history").fadeIn('fast');
    });

    $("#historyClose").click(function() {
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#history").fadeOut('fast');
    });

    $("#howToOpen").click(function() {
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#howTo").fadeIn('fast');
    });

    $("#howToClose").click(function() {
        gameSelect.play();
        gameMusic.fade(0.3, 0.7, 1000);
        $("#howTo").fadeOut('fast');
    });

    $("#skillsList").click(function() {
        gameSelect.play();
    });

    $("#screenshotsShow").click(function() {
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#screenshots").fadeIn('fast');
    });

    $("#screenshotsClose").click(function() {
        gameSelect.play();
        gameMusic.fade(0.3, 0.7, 1000);
        $("#screenshots").fadeOut('fast');
    });
    // Power Beam Skill
    $("#powerBeam").click(function() {
        const firstNumber = getRandomInt(0, 30);
        const secondNumber = getRandomInt(0, 10);
        const operations = ['+', '-', '*', '/'];
        const operation = getRandomArrayElement(operations);
        const condition = firstNumber + " " + operation + " " + secondNumber;
        const conditionResult = eval(condition);

        document.getElementById("arithmeticsh2").innerHTML = condition;
        document.getElementById("arithmeticsResult").oninput = e => {
            if (+e.target.value === conditionResult) {
                gameMusic.fade(0.3, 0.7, 1000);
                $("#powerBeamOpen").fadeOut('fast');
                $("#power-beam-effect").show().fadeOut();
                powerBeam.play();
                allEnemies.pop();
                stats.subtractGems(5);
                document.getElementById('arithmeticsResult').value = "";

            }
        };
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#powerBeamOpen").fadeIn('fast');
    });
    // Ice Cannon Skill
    $("#iceCannon").click(function() {
        const words = {
            "sorry": ["извините", "простите", "виноват"],
            "table": ["стол", "таблица"],
            "house": ["дом", "жилище", "здание"],
            "cat": ["кот", "кошка", "котэ"],
            "guy": ["парень", "малый", "чучело", "трос"],
            "bird": ["птица", "пташка", "тюрьма"],
            "neighbor": ["сосед", "соседка", "граничить"],
            "pig": ["свинья", "поросенок", "поросёнок", "хрюшка"],
            "flower": ["цветок"]
        };
        const arrayOfWords = Object.keys(words);
        const arrayOfWordsLength = arrayOfWords.length;
        const condition = arrayOfWords[getRandomInt(0, arrayOfWordsLength - 1)];
        const solution = words[condition];

        document.getElementById("translateh2").innerHTML = condition;
        document.getElementById("translateResult").oninput = e => {
            if (solution.includes(e.target.value.toLowerCase())) {
                gameMusic.fade(0.3, 0.7, 1000);
                $("#iceCannonOpen").fadeOut('fast');
                $("#ice-cannon-effect").show().fadeOut();
                iceCannon.play();
                for (i = 0; i < 2; i++) {
                    allEnemies.pop();
                }
                stats.subtractGems(10);
                document.getElementById('translateResult').innerHTML = "";
                document.getElementById('translateResult').value = "";
            }
        };
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#iceCannonOpen").fadeIn('fast');
    });
    // Fireball Skill
    $("#fireBall").click(function() {
        const listeningWords = {
            "sounds/listening/bird.mp3": ["bird", "flier"],
            "sounds/listening/cat.mp3": ["cat"],
            "sounds/listening/cow.mp3": ["cow"],
            "sounds/listening/dog.mp3": ["dog"],
            "sounds/listening/horse.mp3": ["horse"],
            "sounds/listening/monkey.mp3": ["monkey"],
            "sounds/listening/rooster.mp3": ["rooster", "cock", "chicken"]
        };
        const arrayOfWords = Object.keys(listeningWords);
        const arrayOfWordsLength = arrayOfWords.length;
        const condition = arrayOfWords[getRandomInt(0, arrayOfWordsLength - 1)];
        const solution = listeningWords[condition];
        const audio = document.createElement("audio");
        audio.setAttribute("src", condition);
        audio.setAttribute("controls", "");
        document.getElementById('media').appendChild(audio);
        document.getElementById("listeningResult").oninput = e => {
            if (solution.includes(e.target.value.toLowerCase())) {
                gameMusic.fade(0.3, 0.7, 1000);
                $("#fireBallOpen").fadeOut('fast');
                $("#fire-ball-effect").show().fadeOut();
                fireBall.play();
                for (i = 0; i < getRandomInt(0, 3); i++) {
                    allEnemies.pop();
                }
                stats.subtractGems(15);
                document.getElementById('media').innerHTML = "";
                document.getElementById('listeningResult').value = "";
            }
        };
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#fireBallOpen").fadeIn('fast');
    });
    // Water Blast Skill
    $("#waterBlast").click(function() {
        const jobsWords = {
            "images/Jobs/sailor.png": ["sailor", "seaman"],
            "images/Jobs/chef.png": ["chef", "cook"],
            "images/Jobs/doctor.png": ["doctor"],
            "images/Jobs/farmer.png": ["farmer"],
            "images/Jobs/pilot.png": ["pilot"],
            "images/Jobs/policeman.png": ["policeman"],
            "images/Jobs/priest.png": ["priest", "monk"],
            "images/Jobs/soldier.png": ["soldier"],
            "images/Jobs/taxi-driver.png": ["taxi-driver", "driver", "taxi driver"]
        };
        const arrayOfWords = Object.keys(jobsWords);
        const arrayOfWordsLength = arrayOfWords.length;
        const condition = arrayOfWords[getRandomInt(0, arrayOfWordsLength - 1)];
        const solution = jobsWords[condition];
        const jobImage = document.createElement("img");
        jobImage.style.border = "0px";
        jobImage.setAttribute("src", condition);
        document.getElementById('mediaJobs').appendChild(jobImage);
        document.getElementById("jobsResult").oninput = e => {
            if (solution.includes(e.target.value.toLowerCase())) {
                gameMusic.fade(0.3, 0.7, 1000);
                $("#waterBlastOpen").fadeOut('fast');
                $("#water-blast-effect").show().fadeOut();
                waterBlast.play();
                for (i = 0; i < getRandomInt(0, 5); i++) {
                    allEnemies.pop();
                }
                stats.subtractGems(20);
                document.getElementById('mediaJobs').innerHTML = "";
                document.getElementById('jobsResult').value = "";
            }
        };
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#waterBlastOpen").fadeIn('fast');
    });


    $("#startScreen-open").click(function() {
        gameSelect.play();
        gameMusic.fade(0.7, 0.3, 1000);
        $("#startScreen").fadeIn('fast');
    });

    $(".toggle-music").click(function() {
        if ($(this).hasClass('on')) {
            gameMusic.pause();
            $(this).hide();
            $(".toggle-music.off").show();
        }
        if ($(this).hasClass('off')) {
            gameMusic.play();
            $(this).hide();
            $(".toggle-music.on").show();
        }
    });

});


let Enemy = function(positionY, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = getRandomInt(-1000, -100);
    this.y = positionY;
    this.height = constants.ENTITY_HEIGHT;
    this.width = constants.ENTITY_WIDTH;
    this.speed = speed;
};
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.x > canvas.width) {
        this.x = getRandomInt(-1000, -100);
    }
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


let Enemies = function() {
    this.enemiesArray = [];
};
Enemies.prototype.spawn = function(number) {
    for (let i = 0; i < number; i++) {
        let speed = getRandomInt(constants.MIN_SPEED, constants.MAX_SPEED);
        let position = getRandomInt(0, 3);
        this.enemiesArray[allEnemies.length] = new Enemy(constants.POSITION_Y[position], speed);
        allEnemies.push(this.enemiesArray[allEnemies.length]);
    }

};
Enemies.prototype.reset = function() {
    let enemyCount = allEnemies.length;
    for (i = 0; i < enemyCount; i++) {
        allEnemies.splice(i, allEnemies.length);
    }
};

let enemies = new Enemies();


let Gem = function(positionX, positionY) {
    let gemArray = ['gem-blue.png', 'gem-green.png', 'gem-orange.png'];
    this.sprite = 'images/' + gemArray[getRandomInt(0, 2)];
    this.height = constants.ENTITY_HEIGHT;
    this.width = constants.ENTITY_WIDTH;
    this.x = positionX;
    this.y = positionY;
};
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Gem.prototype.clear = function() {
    this.x = -100;
    gemCollect.play();
};
Gem.prototype.reset = function() {
    gem = new Gem();
};

let gem = new Gem();

let Gems = function() {
    this.gemsArray = [];
};
Gems.prototype.spawn = function(number) {
    for (let i = 0; i < number; i++) {
        let positionX = getRandomInt(0, 6);
        let positionY = getRandomInt(0, 3);
        this.gemsArray[allGems.length] = new Gem(constants.POSITION_X[positionX], constants.POSITION_Y[positionY]);
        allGems.push(this.gemsArray[allGems.length]);
    }

};
Gems.prototype.reset = function() {
    let gemsCount = allGems.length;
    for (i = 0; i < gemsCount; i++) {
        allGems.splice(i, allGems.length);
    }
};

let gems = new Gems();

let Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = constants.PLAYER_START_X;
    this.y = constants.PLAYER_START_Y;
    this.height = constants.ENTITY_HEIGHT;
    this.width = constants.ENTITY_WIDTH;
    this.lives = 3;
};
Player.prototype.update = function() {
    this.xNow = this.x;
    this.yNow = this.y;
};
Player.prototype.reset = function() {
    this.x = constants.PLAYER_START_X;
    this.y = constants.PLAYER_START_Y;
};
Player.prototype.hit = function() {
    this.x = constants.PLAYER_START_X;
    this.y = constants.PLAYER_START_Y;
    $("#collision").show().fadeOut();
    playerHit.play();
};
Player.prototype.updateLives = function(action, value) {

    if (action === "add") {
        this.lives = this.lives + value;
    }
    if (action === "remove") {
        this.lives = this.lives - value;
    }
    stats.updateLives(this.lives);

};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(key) {

    if (key === 'left' && this.x != constants.LEFT_BOUNDARY) {
        this.x = this.xNow + -constants.PLAYER_MOVEMENT;
    }

    if (key === 'up' && this.y != constants.TOP_BOUNDARY) {
        this.y = this.yNow + -constants.PLAYER_MOVEMENT;
    }

    if (key === 'right' && this.x != constants.RIGHT_BOUNDARY) {
        this.x = this.xNow + constants.PLAYER_MOVEMENT;
    }

    if (key === 'down' && this.y != constants.BOTTOM_BOUNDARY) {
        this.y = this.yNow + constants.PLAYER_MOVEMENT;
    }

};

let player = new Player();


let Level = function() {
    this.level = 1;
    enemies.spawn(2);
    gems.spawn(2);
};

Level.prototype.update = function() {
    this.level++;
    if (this.level % 2) {
        enemies.spawn(1);

    }
    gems.reset();
    gems.spawn(getRandomInt(2, 4));
    player.reset();
    stats.updateLevel(this.level);
    stats.updateScore();
    levelUp.play();
};

Level.prototype.reset = function() {
    this.level = 1;
    player.reset();
    enemies.reset();
    gem.reset();
    stats.reset();
    player.updateLives('add', 2);
    enemies.spawn(2);
    gameOver.play();
    gameMusic.fade(0.7, 0.3, 1000);
    paused = true;
    $("#gameOver").show();
};


let level = new Level();


let Stats = function() {
    this.font = constants.FONT;
    this.fontColor = constants.FONT_COLOR;
    this.currentLevel = level.level;
    this.currentLives = player.lives;
    this.currentScore = 0;
    this.currentGems = 0;
};
Stats.prototype.subtractGems = function(numberOfGemsToSubtract) {
    this.currentGems -= numberOfGemsToSubtract;
}
Stats.prototype.render = function() {
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 50, 707, 45);
    this.level();
    this.score();
    this.lives();
    this.gems();
};
Stats.prototype.level = function() {
    ctx.font = this.font;
    ctx.fillStyle = this.fontColor;
    ctx.textAlign = 'start';
    ctx.fillText('Level ' + this.currentLevel, 10, 82);
};
Stats.prototype.updateLevel = function(level) {
    this.currentLevel = level;
};
Stats.prototype.score = function() {
    ctx.font = this.font;
    ctx.fillStyle = this.fontColor;
    ctx.textAlign = 'end';
    ctx.fillText(this.currentScore, 700, 82);
};
Stats.prototype.updateScore = function() {
    this.currentScore = this.currentScore + 600;
};
Stats.prototype.lives = function() {
    ctx.drawImage(Resources.get('images/stat-heart.png'), 425, 62);
    ctx.font = this.font;
    ctx.fontStyle = this.fontColor;
    ctx.textAlign = 'start';
    ctx.fillText('x ' + this.currentLives, 455, 82);
};
Stats.prototype.updateLives = function(lives) {
    this.currentLives = lives;
};
Stats.prototype.gems = function() {
    ctx.drawImage(Resources.get('images/stat-gem.png'), 230, 62);
    ctx.font = this.font;
    ctx.fontStyle = this.fontColor;
    ctx.textAlign = 'start';
    ctx.fillText('x ' + this.currentGems, 260, 82);
};
Stats.prototype.updateGems = function() {
    this.currentGems++;
    this.currentScore = this.currentScore + 300;
};
Stats.prototype.reset = function() {
    $("#gameOver #score").html(this.currentScore);
    if (this.currentGems < 0) {
        this.currentGems = 0;
    }
    $("#gameOver #scorePotatoes").html(this.currentGems);
    this.currentScore = 0;
    this.currentGems = 0;
    this.currentLevel = level.level;
};

let stats = new Stats();



document.addEventListener('keydown', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        87: 'up',
        65: 'left',
        68: 'right',
        83: 'down'
    };
    if (!paused) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function log(log) {
    return console.log(log);
}