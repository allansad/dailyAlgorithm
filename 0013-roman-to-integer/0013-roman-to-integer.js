/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const sLength = s.length
    let returnNumber = 0;

    for (let i = sLength - 1; i >= 0; i--) {
        if (s[i] === "I") {
            returnNumber++;
        }
        
        if (s[i] === "V") {
            returnNumber += 5;
            if (s[i - 1] === "I") {
            returnNumber -= 2;
            }
        }
        
        if (s[i] === "X") {
            returnNumber += 10;
            if (s[i - 1] === "I") {
            returnNumber -= 2;
            }
        }
        
        if (s[i] === "L") {
            returnNumber += 50;
            if (s[i - 1] === "X") {
            returnNumber -= 20;
            }
        }
        
        if (s[i] === "C") {
            returnNumber += 100;
            if (s[i - 1] === "X") {
            returnNumber -= 20;
            }
        }
        
        if (s[i] === "D") {
            returnNumber += 500;
            if (s[i - 1] === "C") {
            returnNumber -= 200;
            }
        }
        
        if (s[i] === "M") {
            returnNumber += 1000;
            if (s[i - 1] === "C") {
            returnNumber -= 200;
            }
        }
    }

    return returnNumber;
};