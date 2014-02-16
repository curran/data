// This script tests the hierarchy parser in `parseHierarchy.js`.
//
// By Curran Kelleher 2/15/2014

var parseHierarchy = require('./parseHierarchy');

// The convention assumed is that the first entry
// is the root of the tree, and subsequent entries
// are children of that node, even though they are
// not at deeper indentation levels.
assertEqual(parseHierarchy([
  'A',
  'B'
]), {
  "name": "A",
  "children": [ { "name": "B" } ]
});

assertEqual(parseHierarchy([
  'A',
  'B',
  ' C'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [ { "name": "C" } ]
    }
  ]
});

assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  ' D'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [
        { "name": "C" },
        { "name": "D" }
      ]
    }
  ]
});

assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  ' D',
  ' E'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [
        { "name": "C" },
        { "name": "D" },
        { "name": "E" }
      ]
    }
  ]
});
assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  ' D',
  'E'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [
        { "name": "C" },
        { "name": "D" }
      ]
    },
    { "name": "E" }
  ]
});
assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  'D',
  'E'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [ { "name": "C" } ]
    },
    { "name": "D" },
    { "name": "E" }
  ]
});

assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  '  D',
  ' E',
  'F'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [
        {
          "name": "C",
          "children": [ { "name": "D" } ]
        },
        { "name": "E" }
      ]
    },
    { "name": "F" }
  ]
});
assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  'D',
  ' E',
  'F'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [ { "name": "C" } ]
    },
    {
      "name": "D",
      "children": [ { "name": "E" } ]
    },
    { "name": "F" }
  ]
});

assertEqual(parseHierarchy([
  'A',
  'B',
  ' C',
  '  D',
  '   E',
  ' F',
  ' G',
  'H'
]), {
  "name": "A",
  "children": [
    {
      "name": "B",
      "children": [
        {
          "name": "C",
          "children": [
            {
              "name": "D",
              "children": [ { "name": "E" } ]
            }
          ]
        },
        { "name": "F" },
        { "name": "G" }
      ]
    },
    { "name": "H" }
  ]
});
function assertEqual(actual, expected){
  var strActual = JSON.stringify(actual, null, 2),
      strExpected = JSON.stringify(expected, null, 2);
  if(strActual !== strExpected){
    console.log('expected ' + strExpected);
    console.log('got ' + strActual);
  }
}
