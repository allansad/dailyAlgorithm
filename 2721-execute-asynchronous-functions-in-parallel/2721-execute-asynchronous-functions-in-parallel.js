/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const resultArray = [];
        let count = 0;

        for (const index in functions) {
            functions[index]().then(result => {
                resultArray[index] = result;
                count++;

                if (count === functions.length) {
                resolve(resultArray);
                }
            }).catch(err => reject(err));
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */