// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
  }

  var output = '';

  if (obj === null ||
      typeof obj === 'number' ||
      typeof obj === 'boolean') {
    output += obj;

  } else if (typeof obj === 'string') {
    output += '"' + obj + '"';

  } else if (Array.isArray(obj)) {
    var tempArray = [];

    // Stringify and append all values in array to tempArray
    for (var value of obj) {
      tempArray.push(stringifyJSON(value));
    }

    // Concatinate values in tempArray with commas then append to output
    output += '[' + tempArray.join(',') + ']';

  } else if (typeof obj === 'object') {

    // Assemble object key value pairs in format "key":stringify(value)
    var tempArray = [];
    for (var key in obj) {
      if (!(typeof obj[key] === 'function' || typeof obj[key] === 'undefined')) {
        var tempStr = '"' + key + '":';
        tempStr += stringifyJSON(obj[key]);
        tempArray.push(tempStr);
      }
    }

    output += '{' + tempArray.join(',') + '}';
  }

  return output;
};
