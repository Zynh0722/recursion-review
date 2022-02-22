// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // instantiate an empty output string
  var output = '';

  // Case: undefined or function
    // skip case

  if (!(typeof obj === 'function' || typeof obj === 'undefined')) {
    if (typeof obj === 'null' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {
      output += obj;
    } else if (typeof obj === 'string') {
      output += '"' + obj + '"';
    } else if (Array.isArray(obj)) {
      var tempArray = [];
      for (var value of obj) {
        tempArray.push(stringifyJSON(value));
      }
      output += '[' + tempArray.join(',') + ']';
    } else if (typeof obj === 'object') {
      output += '{';
      var tempArray = [];
      for (var key in obj) {
        if (!(typeof obj[key] === 'function' || typeof obj[key] === 'undefined')) {
          var tempStr = '"' + key + '":';
          tempStr += stringifyJSON(obj[key]);
          tempArray.push(tempStr);
        }
      }
      output += tempArray.join(',');
      output += '}';
    }


    // Case: null, Boolean, Number
      // print the object
    // Case: String
      //print " object "

    // Case: Array
      // print [
      // stringify each element in array
      // print ]

    // Case: Object
      // print {
      // print key + :
      // stringify value
      // print }
  }




  // return output string
};
