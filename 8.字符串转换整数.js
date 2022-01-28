/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function (s) {
    if (s.length == 0) {
        return 0
    }
    let sum = "";
    for (var i = 0; i < s.length; i++) {

        if (s.charAt(i) == "-" && s.charAt(i + 1) && isNaN(s.charAt(i + 1)) == false) {
            sum += s.charAt(i)
            console.log("1")
        } else if (parseInt(s.charAt(i)) <= 9 && parseInt(s.charAt(i)) >= 0) {
            sum += s.charAt(i)
            console.log("2")
        } else if (s.charAt(i) == " ") {
            console.log("3")
            if (sum.length !== 0) {
                break
            }
            continue
        } else if (s.charAt(i) == "+" && s.charAt(i + 1) && isNaN(s.charAt(i + 1)) == false) {
            console.log("4")
            sum += s.charAt(i)
        } else {
            console.log("5")
            if (sum == "") {
                sum = 0
            }
            return parseInt(sum)
        }

        if (parseInt(sum) <= Math.pow(-2, 31)) {
            return Math.pow(-2, 31)
        } else if (parseInt(sum) >= (Math.pow(2, 31) - 1)) {
            return Math.pow(2, 31) - 1
        }
    }
    if (sum.length == 0) {
        return 0
    }
    if(isNaN(parseInt(sum)) == true){
        return 0
    }
    console.log(sum)
    return parseInt(sum)
};