
function isAnyInt(str) {
  var t = typeof str;
  if (t !== typeof "")
    throw new Error('the argument has to be a string, not a ['+t+']');
  return (str >= 0 || str < 0) && (str|0) ==/*[sic]*/ str;
}

function isBase10Int(str, allowTail) {
  var t = typeof str;
  if (t !== typeof "")
    throw new Error('the argument has to be a string, not a ['+t+']');
  return (str >= 0 || str < 0) && (
    !allowTail ? (str|0)+"" === str : (str|0) ==/*[sic]*/ v);
}

module.exports.isAnyInt = isAnyInt;
module.exports.isBase10Int = isBase10Int;
