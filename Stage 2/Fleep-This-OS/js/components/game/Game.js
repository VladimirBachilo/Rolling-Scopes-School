import { InitScreen } from "../screens/InitScreen.js";
import { PlayScreen } from "../screens/PlayScreen.js";
import { EndScreen } from "../screens/EndScreen.js";

import { MainSettings } from "../settings/MainSettings.js";
import { PlaySettings } from "../settings/PlaySettings.js";

import { options } from "../json/options.json";
import { icons } from "../json/icons.json";

export class Game {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.state = {
            "card_type" : "",
            "game_diff" : "",
            "firstSelectedCard" : {},
            "secondSelectedCard" : {},
            "firstSelectedCardFlipped" : false,
            "secondSelectedCardFlipped" : false,
            "isWon" : false,
            "all" : 0,
            "correct" : 0,
            "wrong" : 0,
            "tries" : 0
        };

        this.options = options;
        this.icons = icons;
    };

    initGame(game_context) {
        this.game_context = game_context;
        const init = new InitScreen(this.wrapper, this.game_context);
        init.addHeading();
        init.addSettCards();
        init.addPlay();
        const init_settings = new MainSettings(this.wrapper, this.game_context);
    };

    playGame() {
        const play = new PlayScreen(this.wrapper, this.game_context);
        play.makeCards()
        play.addTimer();
        play.addCards();
        const play_settings = new PlaySettings(this.wrapper, this.game_context);
    };


    endGame(){
        const end = new EndScreen(this.wrapper, this.game_context);
        end.addHeading();
        end.addResults();
        end.addReplay();
        const end_settings = new MainSettings(this.wrapper, this.game_context);
    };
};
