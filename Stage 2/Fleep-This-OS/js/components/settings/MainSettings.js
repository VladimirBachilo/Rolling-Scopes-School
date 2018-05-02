import { Settings } from "./Settings.js";

export class MainSettings extends Settings {
    constructor(wrapper, game_context){
        super(wrapper, game_context);
        super.setListeners();
        this.start_button = document.getElementById("game-start-button");
        let self = this;
        this.start_button.addEventListener( "click", function playButtonEvent() {
            self.playButton();
        });
    };

    playButton() {
        if (!this.state.card_type && !this.state.game_diff) {
            alert("Choose the card type and game difficulty!");
        } else if (this.state.game_diff === "") {
            alert("Choose the game difficulty!");
        } else if (this.state.card_type === "") {
            alert("Choose the card type!");
        } else {
            super.clearScreen();
            this.state.isWon = false;
            this.state.correct = 0;
            this.state.wrong = 0;
            this.state.tries = 0;
            this.game_context.playGame();
        }
    };
};
