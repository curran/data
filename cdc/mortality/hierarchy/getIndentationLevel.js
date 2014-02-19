// This module provides a function that computes the number of 
// indentation characters present for a given string.
//
// Curran Kelleher 2/19/2014

// Returns the number of 4-space indents there are
// on the given line, using either white space character
// used in the original data file.
function getIndentationLevel(line) {
  for(var i = 0; isIndentCharacter(line, i); i++){}
  return i;
}

function isIndentCharacter(str, i) {
  var code = str.charCodeAt(i);
  // These two codes were observed in use as indentation
  // characters in the original data file.
  return code === 65533 || code === 32;
}
module.exports = getIndentationLevel;
