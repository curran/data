var getIndentationLevel = require('./getIndentationLevel');

// A dataset-specific function that extracts the tree
// of causes of death from the original data file.
function parseHierarchy(lines) {

  // The root of the tree data structure compatible with D3.js.
  // See https://github.com/mbostock/d3/wiki/Tree-Layout
  var tree,

      // An index of nodes in the tree by name.
      // Keys are node names.
      // Values are their nodes in the tree.
      nodes = {},

      stack = [];

  lines.forEach(function (line, i) {
    var indent, name, node;

    // Make the first entry, the root of the tree.
    if( i === 0 ){
      indent = -1; // simulate a -1 indentation level
      tree = createNode(indent, line);
      push(indent, tree);
    } else {
      indent = getIndentationLevel(line);
      name = line.substr(indent);
      node = createNode(indent, name);
      processLine(indent, node);
    }
  });

  function createNode(indent, name){
    var node = {name: name};
    nodes[name] = node;
    return node;
  }

  function processLine(indent, node){

    if(peek().indent === indent) {
      stack.pop();
      addChild(peek().node, node);
      push(indent, node);
    } else if(peek().indent < indent) {
      addChild(peek().node, node);
      push(indent, node);
    } else if(peek().indent > indent) {
      while(peek().indent >= indent){
        stack.pop();
      }
      addChild(peek().node, node);
      push(indent, node);
    }
  }
  
  function addChild(parentNode, childNode){
    if(!parentNode.children){
      parentNode.children = [childNode];
    } else {
      parentNode.children.push(childNode);
    }
  }

  function push(indent, node){
    stack.push({
      indent: indent,
      node: node
    });
  }
  
  function peek(){
    return stack[stack.length - 1];
  }

  return tree;
}

module.exports = parseHierarchy;
