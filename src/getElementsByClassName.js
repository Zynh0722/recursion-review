// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matchingElements = [];

  var checkChildren = function(node) {
    // Take node, check if class list of that node contains class list.
    // If it does contain the class list:
    if (_.contains(node.classList, className)) {
      matchingElements.push(node);
    }

    // Loop through all the children and check the children by
    // calling the same recursive function
    _.each(node.childNodes, function(child) {
      checkChildren(child);
    });

  };

  checkChildren(document.body);

  return matchingElements;

};
