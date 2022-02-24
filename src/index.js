  module.exports = function check(str, bracketsConfig) {
    let faz = [];
    let brackets = new Map(bracketsConfig);

    for (let i = 0; i < str.length; i++) {

        if (str[i] == brackets.get(faz[faz.length - 1])) {
            faz.pop();
        }
         else {
            faz.push(str[i])
        }

    }


   return faz.length !== 0 ? false : true;

}
