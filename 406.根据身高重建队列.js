/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function (people) {
    var res = []
    people.sort(function (a, b) {
        if (a[0] < b[0]) {
            return 1
        } else if (a[0] > b[0]) {
            return -1
        } else {
            if (a[1] <= b[1]) {
                return -1
            } else {
                return 1
            }
        }
    })
    res.push(people[0])
    for (var i = 1; i < people.length; i++) {
        res.splice(people[i][1], 0, people[i]);
    }
    return res
};