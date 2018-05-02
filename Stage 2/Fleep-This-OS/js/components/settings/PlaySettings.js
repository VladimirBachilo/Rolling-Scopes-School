import { Settings } from "./Settings.js";

export class PlaySettings extends Settings {
    constructor(wrapper, game_context) {
        super(wrapper, game_context);

        setTimeout(()=>{
            const timer = document.getElementById("timer");
            const home = document.getElementById("home");
            const quit = document.getElementById("quit");

            timer.addEventListener( "webkitAnimationEnd", ()=> {
                this.timeOut()
            }, {once: true});
            home.addEventListener( "click", ()=> {
                this.clickHome()
            }, {once: true});
            quit.addEventListener( "click", ()=> {
                this.clickQuit()
            }, {once: true});
        }, 2000);

        this.play_cards = document.querySelectorAll(".card");
        for (let i = 0; i < this.play_cards.length; i++) {
            this.gamePlayEvents(this.play_cards[i], this.state);
        };
    };

    timeOut() {
        setTimeout(()=>{
            super.clearScreen();
            this.game_context.endGame();
        }, 500);
    };

    clickHome() {
        super.clearScreen();
        this.state.card_type = "";
        this.state.game_diff = "";
        this.game_context.initGame(this.game_context);
    };

    clickQuit() {
        super.clearScreen();
        this.game_context.endGame();
    };

    gamePlayEvents(card, state) {
        const self = this;
        card.addEventListener( "click", function checkCardEvent() {
            if (!this.classList.contains("flipped")) {
                if (state.firstSelectedCardFlipped === false && state.secondSelectedCardFlipped === false) {
                    this.classList.add("flipped");
                    state.firstSelectedCard = this;
                    state.firstSelectedCardId = this.querySelector('#img').getAttribute("name");
                    state.firstSelectedCardFlipped = true;
                } else if (state.firstSelectedCardFlipped === true && state.secondSelectedCardFlipped === false) {
                    this.classList.add("flipped");
                    state.secondSelectedCard = this;
                    state.secondSelectedCardId = this.querySelector('#img').getAttribute("name");
                    state.secondSelectedCardFlipped = true;
                    if (state.firstSelectedCardId == state.secondSelectedCardId) {
                        self.gameCardsMatch();
                    } else {
                        self.gameCardsMismatch();
                    }
                }
            }
        });
    };

    gameCardsMatch() {
        const firstSelectedCard = this.state.firstSelectedCard;
        const secondSelectedCard = this.state.secondSelectedCard;
        this.resetState();

        setTimeout(()=>{
            this.state.correct++;
            if (this.state.correct == this.state.all/2) {
                this.state.isWon = true;
                this.timeOut();
            };
        }, 500 );

        setTimeout(()=> {
            firstSelectedCard.parentElement.classList.add("correct");
            secondSelectedCard.parentElement.classList.add("correct");
            firstSelectedCard.classList.remove("flipped");
            secondSelectedCard.classList.remove("flipped");
        }, 1000 );
        this.state.tries++;
    };

    gameCardsMismatch() {
        const firstSelectedCard = this.state.firstSelectedCard;
        const secondSelectedCard = this.state.secondSelectedCard;
        this.resetState();

        setTimeout(()=>{
            firstSelectedCard.parentElement.firstChild.checked = false;
            secondSelectedCard.parentElement.firstChild.checked = false;
            firstSelectedCard.classList.remove("flipped");
            secondSelectedCard.classList.remove("flipped");
        }, 500 );

        this.state.wrong++;
        this.state.tries++;
    };

    resetState() {
        this.state.firstSelectedCard = {};
        this.state.firstSelectedCardFlipped = false;
        this.state.secondSelectedCard = {};
        this.state.secondSelectedCardFlipped = false;
    }
}
