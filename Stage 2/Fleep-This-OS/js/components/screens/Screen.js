import { Builder } from "../utility/Builder.js";

export class Screen {
    constructor(wrapper, game_context, section_class) {
        this.wrapper = wrapper;
        this.game_context = game_context;
        this.state = game_context.state;

        this.addSection(section_class);
    };

    addSection(section_class){
        this.section = new Builder(this.wrapper, "section", section_class, "section", "", "");
    }

    addHeading(title) {
        this.heading = new Builder(this.section, "h1", "game-title", "", "", title);
        setTimeout(()=>{
            this.heading.style.opacity = 1;
        }, 1000);
    };

    addArticle(article_class) {
        this.article = new Builder(this.section, "article",  article_class, "", "", "");
        setTimeout(()=>{
            this.article.style.opacity = 1;
        }, 2000);
    };

    addButton(wrapper, child_class, id, child_insides) {
        this.footer = new Builder(wrapper, "div", child_class, id, "", child_insides);
        return this.footer;
    };

};
