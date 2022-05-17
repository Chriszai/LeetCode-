/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function (tasks, n) {
    if (n == 0) return tasks.length
    var max = 0;
    var num = -1;
    var map = new Map()
    var arr = []
    tasks.forEach(ele => {
        if (map.has(ele)) map.set(ele, map.get(ele) + 1)
        else map.set(ele, 1)
        max = Math.max(max, map.get(ele))
        if(!arr.includes(ele)){
            arr.push(ele)
        }
    })
    arr.forEach(ele => {
        if (map.get(ele) == max) {
            num = num + 1
        }
    })
    console.log(num)
    var y = tasks.length-max-num-n*(max-1)
    if(y<0) return (max-1)*(1+n)+1+num
    else return (max-1)*(1+n)+1+num +y
}