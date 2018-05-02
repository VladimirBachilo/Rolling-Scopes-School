import { Builder } from "../utility/Builder.js";

export class Card {
    constructor(wrapper, game_context, label_class) {
        this.wrapper = wrapper;
        this.options = game_context.options;
        this.label_class = label_class;
        this.addLabel();
        this.addCardDiv();
    };

    addLabel() {
        this.label = new Builder(this.wrapper, "label", this.label_class, "", "", '<input type="checkbox"/>');
    };

    addCardDiv() {
        this.card_div = new Builder(this.label, "div","card");
    };

    addCardFront() {
        this.card_front = new Builder(this.card_div, "div", "card-front img-front");
        return this.card_front;
    };

    addCardBack() {
        this.card_back = new Builder(this.card_div, "div", "card-back");
        return this.card_back;
    };
};
