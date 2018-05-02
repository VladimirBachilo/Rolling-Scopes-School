import { Builder } from "../utility/Builder.js";

import { TypeCard } from "../cards/TypeCard.js";
import { DiffCard } from "../cards/DiffCard.js";

import { Screen } from "./Screen.js";

export class InitScreen extends Screen {
    constructor(wrapper, game_context) {
        super(wrapper, game_context, "game-init");
    };

    addHeading() {
        const title = "FLIP THIS OS";
        super.addHeading(title);
    };

    addSettCards() {
        super.addArticle("game-menu");

        const type_card = new TypeCard(this.article, this.game_context);
        this.card_front = type_card.addCardFront();
        const type_front = new Builder(this.card_front, "p","card-name", "", "", "Card Type");
        type_card.addCardBack();

        const diff_card = new DiffCard(this.article, this.game_context);
        this.card_front = diff_card.addCardFront();
        const diff_front = new Builder(this.card_front, "p","card-name", "", "", "Difficulty");
        diff_card.addCardBack();
    };

    addPlay() {
        const name = "Play"
        super.addButton(this.section, "game-start-button", "game-start-button", "<p>" + name + "</p>");
        setTimeout(()=>{
            this.footer.style.opacity = 1;
        }, 2500);
    };
};
