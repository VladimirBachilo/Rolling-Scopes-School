import { Builder } from "../utility/Builder.js";

import { Card } from "./Card.js";

export class TypeCard extends Card {
    constructor(wrapper, game_context) {
        super(wrapper, game_context, "card-type");
    };

    addCardBack() {
        this.card_back = super.addCardBack();

        const div_win = new Builder(this.card_back, "div","windows", "choice");
        const win_img = new Builder(div_win, "img");
        win_img.src = this.options.windows.logo_img_small;

        const div_ios = new Builder(this.card_back, "div","ios", "choice");
        const ios_img = new Builder(div_ios, "img");
        ios_img.src = this.options.ios.logo_img_small;

        const div_ubu = new Builder(this.card_back, "div","ubuntu", "choice");
        const ubu_img = new Builder(div_ubu, "img");
        ubu_img.src = this.options.ubuntu.logo_img_small;

    };
};
