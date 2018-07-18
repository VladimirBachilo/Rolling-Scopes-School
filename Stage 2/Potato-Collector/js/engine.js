/* This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */
let Engine = (function(global) {
    let doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 707;
    canvas.height = 707;
    doc.body.appendChild(canvas);

    function main() {
        let now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Вызов update/render функций, */
        update(dt);
        render();

        lastTime = now;

        win.requestAnimationFrame(main);
    }

    function init() {
        lastTime = Date.now();
        main();

    }

    function update(dt) {
        updateEntities(dt);
        checkCollisions();
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    function render() {
        let rowImages = [
                'images/water-block.png',
                'images/grass-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/grass-block.png'
            ],
            numRows = 7,
            numCols = 7,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }


        renderEntities();
    }

    function renderEntities() {

        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();

        allGems.forEach(function(gem) {
            gem.render();
        });

        stats.render();

    }

    function checkCollisions() {

        function collision(a, b) {
            return a.x < b.x + b.width &&
                a.x + a.width > b.x &&
                a.y < b.y + b.height &&
                a.y + a.height > b.y;
        }

        allEnemies.forEach(function(enemy) {
            if (collision(player, enemy)) {

                player.hit();

                return player.lives > 1 ? player.updateLives('remove', 1) : reset();

            }
        });

        allGems.forEach(function(gem) {
            if (collision(player, gem)) {

                gem.clear();

                stats.updateGems();

            }
        });

        if (player.y == 70) {

            updateLevel();

        }

    }

    function updateLevel() {

        level.update();

    }

    function reset() {

        level.reset();

    }

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/stat-heart.png',
        'images/stat-gem.png',
        'images/gem-blue.png',
        'images/gem-green.png',
        'images/gem-orange.png',
        'images/char-boy.png'
    ]);
    Resources.onReady(init);

    global.canvas = canvas;
    global.ctx = ctx;
})(this);