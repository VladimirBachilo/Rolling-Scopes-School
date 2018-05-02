import { Card } from "./Card.js";

export class PlayCard extends Card {
    constructor(wrapper, game_context) {
        super(wrapper, game_context, "game-playing");
    };

    addCardBack() {
        super.addCardBack();
        this.card_back.classList.add('img-back');
        return this.card_back;
    };
};
