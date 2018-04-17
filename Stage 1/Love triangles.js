/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    if (preferences.length < 3) {
        return 0;
    }
    let count = 0;
    let temp = {};
    preferences.forEach(function(item, i, preferences) {
        temp[i + 1] = item;
    });
    for (let k in temp) {
        if (temp[temp[temp[k]]] == k && temp[k] != k) {
            count++;
            delete temp[temp[temp[k]]];
            delete temp[temp[k]];
            delete temp[k];
        }
    }
    return count;
}
