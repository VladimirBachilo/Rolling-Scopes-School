let recipes = [
  "A less-dense and wonderfully moist carrot cake with canned mandarin oranges rather than pineapple. A friend shared the recipe with me and I made it to celebrate the birth of my son (a birthday cake).",
  "These are great for outdoor grilling. Simple and very tasty. The glaze at the end gives them a lot of concentrated flavor.",
  "Easy baked egg breakfast sandwiches. Another frugal recipe that can be made ahead and frozen, then microwaved for fast breakfasts on the run. Try using other cheeses for extra flavor. I used Colby-Jack Slices. My boys loved this recipe!",
  "Competitor Padua cracked his way to victory when he made this bread pudding during Episode 1's nutty chocolate dessert challenge. Padua received praise from the judges for his toasted caramel praline sauce, made from walnuts, sugar and heavy cream",
  "The herb mixture in this recipe plays two roles: Half of it serves as a flavorful rub for the chicken and the other half is mixed with yogurt for a cool table sauce.",
  "In a medium mixing bowl, beat cream cheese until fluffy. Add condensed milk, lemon juice, and lemon rind. Mix until smooth. Pour mixture into crust. Refrigerate at least 2 hours before serving. Garnish with whipped cream and mint leaves if desired."
];

class PopUp {
  constructor(strings) {
    this.slidePosition = 0;
    this.strings = strings;
    this.popUp = document.getElementById("popUp");
    this.content = document.getElementById("content");
    this.indicators = document.getElementById("indicators");
    this.checkBox = document.getElementById("checkBox");
    this.child_content = this.content.childNodes;
    this.child_indicators = this.indicators.childNodes;
  }
  enableHandlers() {
    document.getElementById("left").onclick = () => this.slide(0);
    document.getElementById("right").onclick = () => this.slide(1);
    document.getElementById("close").onclick = () => this.close();
    document.getElementById("checkBox").onclick = () =>
      this.disableNotification();
  }
  slide(flag) {
    this.child_content[this.slidePosition].classList.remove("active");
    this.child_indicators[this.slidePosition].classList.remove("active");

    if (flag == 0) {
      this.slidePosition--;
      if (this.slidePosition < 0) this.slidePosition = this.strings.length - 1;
    } else {
      this.slidePosition++;
      if (this.slidePosition >= this.strings.length) this.slidePosition = 0;
    }

    this.child_content[this.slidePosition].className += " active";
    this.child_indicators[this.slidePosition].className += " active";
  }
  show() {
    this.popUp.style.visibility = "visible";
  }
  close() {
    this.popUp.style.visibility = "hidden";
  }
  disableNotification() {
    let state = this.checkBox.checked;
    if (state == true) {
      localStorage.setItem("popUp_disable", true);
    } else {
      localStorage.removeItem("popUp_disable");
    }
  }
  addStrings() {
    for (let i = 0; i < this.strings.length; i++) {
      let new_string = document.createElement("p");
      if (i == this.strings.length - 1) new_string.className = "active";
      let text = document.createTextNode(this.strings[i]);
      new_string.appendChild(text);
      this.content.insertBefore(new_string, this.content.firstChild);
    }
  }
  addIndicators() {
    for (let i = 0; i < this.strings.length; i++) {
      let circle = document.createElement("div");
      circle.className = "circle";
      if (i == 0) circle.className += " active";
      this.indicators.appendChild(circle);
    }
  }
}

function createPopUp() {
  if (!localStorage.getItem("popUp_disable")) {
    let pop_up = new PopUp(recipes);
    pop_up.addStrings();
    pop_up.addIndicators();
    pop_up.enableHandlers();
    pop_up.show();

    document.onkeydown = checkKey;

    function checkKey(e) {
      e = e || window.event;
      if (e.keyCode == "37") {
        pop_up.slide(0);
      } else if (e.keyCode == "39") {
        pop_up.slide(1);
      } else if (e.keyCode == "27") {
        pop_up.close(1);
      }
    }

  }
}

setTimeout(createPopUp, 5000);
