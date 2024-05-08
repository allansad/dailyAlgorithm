/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    if (strs[0] === "") {
        return "";
    }

    let returnStr = "";
    let count = 0;

    function prefix() {
        for (let i = 0; i < strs.length - 1; i++) {
            if (strs[i][count] === strs[i + 1][count]) {
                continue;
            } else {
                return returnStr;
            }
        }
        returnStr += strs[0][count];
        count++;

        if (count === strs[0].length) {
            return returnStr;
        } else {
            prefix();
        }
    }
    prefix();

    return returnStr;
};