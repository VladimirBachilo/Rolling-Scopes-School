import { Game } from "./components/game/Game.js";

window.onload = function() {
    let wrapper = document.getElementById("wrapper");
    let game = new Game(wrapper);
    let game_context = game;
    game.initGame(game_context);
};
