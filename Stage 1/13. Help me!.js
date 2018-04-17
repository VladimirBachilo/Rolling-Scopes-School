module.exports = function count(s, pairs) {
    if (pairs[0][1] < 100) {
        var N = 1;
        for (var i = 0; i < pairs.length; i++) {
            N *= pairs[i][0] ** pairs[i][1];
        }
        if (N > 10000000) {
            N /= pairs[pairs.length - 2];
            N /= pairs[pairs.length - 3];
        }
        var k = 0;
        for (var i = 0; i < N; i++) {
            for (var j = 0; j < s.length; j++) {

                if (s.charAt(j) == 1) {
                    var a = N;
                    var b = i + j;
                    while (b != 0) {
                        var reminder = a % b;
                        a = b;
                        b = reminder;
                    }
                    if (a != 1) {
                        break;
                    } else if (j == s.length - 1) {
                        k++;
                    }
                } else if (s.charAt(j) == 0) {
                    var a = N;
                    var b = i + j;
                    while (b != 0) {
                        var reminder = a % b;
                        a = b;
                        b = reminder;
                    }
                    if (a == 1) {
                        break;
                    } else if (j == s.length - 1) {
                        k++;
                    }
                }

            }
        }
    }

    return k % 1000000007;
}
