/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const str = x.toString();
    const strLength = str.length;
    let index = strLength - 1;
    
    if (strLength % 2 === 1) {
        const newStr = str.slice(0, (strLength / 2 - 0.5)) + str.slice((strLength / 2 + 0.5))
        const newStrLength = newStr.length
        let index = newStrLength - 1

        for (let i = 0; i < newStrLength / 2; i++) {
            if (newStr[i] !== newStr[index]) {
                return false;
            }
            
            index--;
        }
    }

    if (strLength % 2 === 0) {
        for (let i = 0; i < strLength / 2; i++) {
                if (str[i] !== str[index]) {
                    return false;
                }

                index--;
            }
    }


    return true;
};