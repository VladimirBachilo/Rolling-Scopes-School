module.exports = function solveSudoku(matrix) {
// version 2.0
    var solved = false;
    insertNumbers(findNext());
    return matrix;

    function insertNumbers(next) {
        if (!next) {
            solved = true;
            return true;
        };

        for (var n = 1; n < 10; n++) {
            if (isAllowedInRow(n, next[0]) && isAllowedInColumn(n, next[1]) && isAllowedInCell(n, next[0], next[1])) {
                matrix[next[0]][next[1]] = n;
                insertNumbers(findNext());
                if (solved) return;
            }
        }
        matrix[next[0]][next[1]] = 0;
    }

    function findNext() {
        for (var row = 0; row < matrix.length; row++) {
            for (var column = 0; column < matrix[row].length; column++) {
                if (matrix[row][column] === 0) return [row, column];
            }
        }
        return false;
    }

    function isAllowedInRow(n, row) {
        for (var i = 0; i < matrix[row].length; i++) {
            if (matrix[row][i] === n) return false;
        }
        return true;
    }

    function isAllowedInColumn(n, column) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i][column] === n) return false;
        }
        return true;
    }

    function isAllowedInCell(n, row, column) {
        row = Math.floor(row / 3) * 3;
        column = Math.floor(column / 3) * 3;
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                if (matrix[row + r][column + c] === n) return false;
            }
        }
        return true;
    }
};
