export class ImgReplacer {
    constructor(card_fronts, choice, options) {
        const img = document.createElement("img");
        img.width = 321;
        img.height = 321;

        const option = options[choice];
        const parent = card_fronts[option.card];
        const child = parent.firstChild;
        img.src = option.logo_img;

        parent.replaceChild(img, child);
        return option;
    };
};
