import { Builder } from "../utility/Builder.js";

import { PlayCard } from "../cards/PlayCard.js";

import { Screen } from "./Screen.js";

export class PlayScreen extends Screen {
    constructor(wrapper, game_context) {
        super(wrapper, game_context, "game-play");

        this.options = this.game_context.options;
        this.icons = this.game_context.icons;

        this.diff = this.state.game_diff;
        this.type = this.state.card_type;

        const background = this.options[this.type].background_img;
        document.body.style.backgroundImage = "url(" + background + ")";

        this.adjustSection();

        setTimeout(()=>{
            this.addHomeButton();
            this.addQuitButton();
        }, 2000);
    };

    adjustSection() {
        const size = this.options[this.diff].size;
        const rows = size.rows;
        const cols = size.cols
        const card_width = 150;
        const card_height = 150;
        const both_sides_card_margin = 20;
        const additional_spacing = 4;
        const height = rows * (card_height + both_sides_card_margin) + additional_spacing;
        const width = cols * (card_width + both_sides_card_margin) + additional_spacing;

        this.state.all = rows * cols;

        this.section.style.height = height + "px";
        this.section.style.width = width + "px";
        this.section.style.marginTop = -height/2 + "px";
        this.section.style.marginLeft = -width/2 + "px";
    };

    makeCards() {
        this.hand = [];

        let cards;
        if (this.type === "windows") {
            cards = this.icons.win_icons;
        } else if (this.type === "ios") {
            cards = this.icons.ios_icons;
        } else if (this.type === "ubuntu") {
            cards = this.icons.ubu_icons;
        };

        cards = this.shuffle(cards);

        for ( let i = 0; i < this.state.all/2 ; i++ ) {
            this.hand.push(cards[i], cards[i]);
        };
        this.hand = this.shuffle(this.hand);
    };

    addTimer() {
        let time;
        if (this.diff === "diff-easy") {
            time = "20000";
        } else if (this.diff === "diff-medium") {
            time = "40000";
        } else if (this.diff === "diff-hard") {
            time = "60000";
        };

        const timer_style = "animation: timer " + time + "ms linear;";
        this.timer = new Builder(this.wrapper, "span", "timer", "timer");
        setTimeout(()=>{
            this.timer.style = timer_style;
        }, 2000);
    };

    addCards() {
        super.addArticle("game-field");

        for (let i  = 0; i < this.state.all; i++) {
            let play_card = new PlayCard(this.article, this.game_context);

            this.card_front = play_card.addCardFront();
            let front_img = new Builder(this.card_front, "img","");
            front_img.src = this.options[this.type].logo_img;

            this.card_back = play_card.addCardBack();
            let back_img = new Builder(this.card_back, "img", "", "img");
            back_img.src = this.hand[i].img;
            back_img.name = this.hand[i].id;

        };
    };

    addHomeButton() {
        this.home = super.addButton(this.wrapper, "home-button", "home");
        this.home_img = new Builder(this.home, "img");
        this.home_img.src = this.icons.play_icons.home_icon;
        setTimeout(()=>{
            this.home.style.opacity = 1;
        }, 2500);
    };

    addQuitButton() {
        this.quit = super.addButton(this.wrapper, "quit-button", "quit");
        this.quit_img = new Builder(this.quit, "img");
        this.quit_img.src = this.icons.play_icons.quit_icon;
        setTimeout(()=>{
            this.quit.style.opacity = 1;
        }, 2500);
    };

    shuffle(obj) {
        let temp, random, len = obj.length;
        for(let i = 0; i < len; i++) {
            random = parseInt(Math.random() * len);
            temp = obj[i];
            obj[i] = obj[random];
            obj[random] = temp;
        };
        return obj;
    };
};
