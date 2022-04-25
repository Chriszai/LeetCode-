/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// var calcEquation = function (equations, values, queries) {
//     var map = new Map()
//     var arr = []
//     var sum = 1
//     values.forEach(ele => {
//         sum = ele * sum;
//     });
//     sum = sum / values[0]
//     map.set(equations[0][0], values[0] * sum)
//     for (var i = 0; i < equations.length; i++) {
//         if (map.has(equations[i][0])) {
//             map.set(equations[i][1], map.get(equations[i][0]) / values[i])
//         }
//         else {
//             var tem = equations[i]
//             equations[i] = equations[i + 1]
//             equations[i + 1] = tem

//             tem = values[i]
//             values[i] = values[i + 1]
//             values[i + 1] = tem
//             i--
//         }
//     }
//     for (var j = 0; j < queries.length; j++) {
//         var num = map.get(queries[j][0]) / map.get(queries[j][1])
//         if (isNaN(num)) num = -1
//         arr.push(num)
//     }
//     return arr
// };
var calcEquation = function(equations, values, queries) {
    let nvars = 0;
    const variables = new Map();

    const n = equations.length;
    for (let i = 0; i < n; i++) {
        if (!variables.has(equations[i][0])) {
            variables.set(equations[i][0], nvars++);
        }
        if (!variables.has(equations[i][1])) {
            variables.set(equations[i][1], nvars++);
        }
    }

    // 对于每个点，存储其直接连接到的所有点及对应的权值
    const edges = new Array(nvars).fill(0);
    for (let i = 0; i < nvars; i++) {
        edges[i] = [];
    }
    for (let i = 0; i < n; i++) {
        const va = variables.get(equations[i][0]), vb = variables.get(equations[i][1]);
        edges[va].push([vb, values[i]]);
        edges[vb].push([va, 1.0 / values[i]]);
    }

    const queriesCount = queries.length;
    const ret = [];
    for (let i = 0; i < queriesCount; i++) {
        const query = queries[i];
        let result = -1.0;
        if (variables.has(query[0]) && variables.has(query[1])) {
            const ia = variables.get(query[0]), ib = variables.get(query[1]);
            if (ia === ib) {
                result = 1.0;
            } else {
                const points = [];
                points.push(ia);
                const ratios = new Array(nvars).fill(-1.0);
                ratios[ia] = 1.0;

                while (points.length && ratios[ib] < 0) {
                    const x = points.pop();
                    for (const [y, val] of edges[x]) {
                        if (ratios[y] < 0) {
                            ratios[y] = ratios[x] * val;
                            points.push(y);
                        }
                    }
                }
                result = ratios[ib];
            }
        }
        ret[i] = result;
    }
    return ret;
};
