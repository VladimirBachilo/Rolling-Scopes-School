import { Builder } from "../utility/Builder.js";

import { Card } from "./Card.js";

export class DiffCard extends Card {
    constructor(wrapper, game_context) {
        super(wrapper, game_context, "game-difficulty");
    };

    addCardBack() {
        this.diff_back = super.addCardBack();
        const div_easy = new Builder(this.diff_back, "div", "diff-easy", "choice", "", "Easy");
        const div_medium = new Builder(this.diff_back, "div", "diff-medium", "choice", "", "Medium");
        const div_hard = new Builder(this.diff_back, "div", "diff-hard", "choice", "", "Hard");
    };
}
