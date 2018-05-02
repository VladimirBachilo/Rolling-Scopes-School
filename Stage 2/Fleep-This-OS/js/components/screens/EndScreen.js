import { Builder } from "../utility/Builder.js";

import { TypeCard } from "../cards/TypeCard.js";
import { DiffCard } from "../cards/DiffCard.js";

import { Screen } from "./Screen.js";

export class EndScreen extends Screen {
    constructor(wrapper, game_context) {
        super(wrapper, game_context, "game-end");
    };

    addHeading() {
        const title = (this.state.isWon) ? "CONGRATULATIONS" : "YOU LOST";
        super.addHeading(title);
    };

    addResults() {
        super.addArticle("game-menu");

        const type_card = new TypeCard(this.article, this.game_context);
        this.type_front = type_card.addCardFront();
        this.getScore();
        type_card.addCardBack();

        const diff_card = new DiffCard(this.article, this.game_context);
        this.diff_front = diff_card.addCardFront();
        this.getStatistics();
        diff_card.addCardBack();
    };

    addReplay() {
        const name = "Replay"
        super.addButton(this.section, "game-start-button", "game-start-button", "<p>" + name + "</p>");
        setTimeout(()=>{
            this.footer.style.opacity = 1;
        }, 2500);
    };


    getScore() {
        const score = Math.floor((2*this.state.correct/this.state.all)*100);
        const type_div = new Builder(this.type_front, "div");
        const type_p1 = new Builder(type_div, "p","card-score", "", "", "Score");
        const type_p2 = new Builder(type_div, "p","card-tries", "", "", score+" / 100");
        const type_p3 = new Builder(type_div, "p","card-change-type", "", "", "Change Card Type");
    };

    getStatistics() {
        const diff_div = new Builder(this.diff_front, "div");
        const diff_p1 = new Builder(diff_div, "p","card-tries", "", "", "Correct");
        const diff_p2 = new Builder(diff_div, "p","card-tries", "", "", this.state.correct);
        const diff_p3 = new Builder(diff_div, "p","card-tries", "", "", "Wrong");
        const diff_p4 = new Builder(diff_div, "p","card-tries", "", "", this.state.wrong);
        const diff_p5 = new Builder(diff_div, "p","card-tries", "", "", "tries");
        const diff_p6 = new Builder(diff_div, "p","card-tries", "", "", this.state.tries);
        const diff_p7 = new Builder(diff_div, "p","card-change-diff", "", "", "Change Difficulty");
    };
};
