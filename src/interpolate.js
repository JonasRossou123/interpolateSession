const interpolate = (value, session = {}, options = {}) => {
    //TODO
    const replaceVar = value.substring(value.indexOf(options.leftDelimiter), value.lastIndexOf(options.rightDelimiter)+1);
    return value.replace(replaceVar, session.firstname)
};

//module.exports = { interpolate }

const result = interpolate('Hi {firstname}, how are you today?', { firstname: 'John' }, { leftDelimiter: '{', rightDelimiter: '}' });
console.log(result)