import { ImgReplacer } from "../utility/ImgReplacer.js";

export class Settings {
    constructor(wrapper, game_context) {
        this.wrapper = wrapper;
        this.game_context = game_context;
        this.state = game_context.state;
        this.options = game_context.options;
        this.choices = document.querySelectorAll("#choice");
    };

    setListeners() {
        for (let i  = 0, len = this.choices.length; i < len; i++) {
            this.clickListener(this.choices[i], this.game_context, this.options);
        };
    };

    clickListener(choice, game_context, options) {
        choice.addEventListener( "click", function choiceEvent() {
            const state = game_context.state;

            const choice_class = this.className;
            const card_fronts = document.querySelectorAll(".card-front");

            const replaced = new ImgReplacer(card_fronts, choice_class, options);

            replaced.card ? state.game_diff = choice_class : state.card_type = choice_class;
        });
    };

    clearScreen() {
        const section = document.getElementById("section");

        const home = document.getElementById("home");
        const quit = document.getElementById("quit");
        const timer = document.getElementById("timer");

        const onPlayScreen = (timer !== null);

        this.removeChildrenStyle(section);
        document.body.style.backgroundImage = "";

        if (onPlayScreen) {
            this.wrapper.removeChild(home);
            this.wrapper.removeChild(quit);
            this.wrapper.removeChild(timer);
            this.removeCardEvents(this.play_cards, this.checkCardEvent);
        } else {
            this.start_button.removeEventListener("click",  this.playButtonEvent);
            this.removeCardEvents(this.choices, this.choiceEvent);
        };

        setTimeout(()=>{
            this.wrapper.removeChild(section);
        }, 2000);
    };

    removeChildrenStyle(section) {
        const child_nodes = section.childNodes;
        for (let i  = 0; i < child_nodes.length; i++) {
            child_nodes[i].style = "";
        };
    };

    removeCardEvents(elements, event_function) {
        for (let i  = 0; i < elements.length; i++) {
            elements[i].removeEventListener("click", event_function);
        };
    };
}
