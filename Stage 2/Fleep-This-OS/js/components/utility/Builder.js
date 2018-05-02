export class Builder {
    constructor(parent="", child, child_class, child_id = "", child_style = "", child_insides = "") {
        this.elem = document.createElement(child);
        this.elem.className = child_class;
        this.elem.id = child_id;
        this.elem.style = child_style;
        this.elem.innerHTML = child_insides;
        parent.appendChild(this.elem);
        return this.elem;
    };
};
