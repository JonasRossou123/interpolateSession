const interpolate = (value, session = {}, options = {}) => {
    //TODO
    const regex = new RegExp(`(?<=${options.leftDelimiter})(.*?)(?=${options.rightDelimiter})`, 'g');
    const variablesInString = value.match(regex);
    console.log(variablesInString)
    let newStr = value;

    if (variablesInString != null){
        variablesInString.forEach(element => {
            let regexReplacer = new RegExp(`${options.leftDelimiter}\\b${element}\\b${options.rightDelimiter}`, 'g');
            session.hasOwnProperty(element) ? newStr = newStr.replace(regexReplacer, session[element]) : newStr = newStr.replace(regexReplacer, "");
        });
    }
    return newStr;
};

const result = interpolate('Hi {firstname, how are you today?', {firstname: 'Jonas'}, {leftDelimiter: '{', rightDelimiter: '}'});
console.log(result)

module.exports = { interpolate }

