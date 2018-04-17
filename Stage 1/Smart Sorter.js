'use strict'
class Sorter {
    constructor() {
        this.array = [];
        this.compare = function(q, w) {
            return q - w
        };
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let secondArray = [];
        indices.sort(function(q, w) {
            return q - w
        });
        for (let i = 0; i < indices.length; i++) {
            secondArray.push(this.array[indices[i]]);
        }
        secondArray.sort(this.compare);


        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = secondArray[i];

        }
        return this.array;

    }

    setComparator(compareFunction) {
        this.compare = compareFunction;
    }
}

module.exports = Sorter;
