This directory contains a data module with only the cause of disease hierarchy as a D3-compatible tree data structure.

  * `parseHierarchy.js` contains code that parses an indented list into a tree structure compatible with [D3's Hierarchy Layout](https://github.com/mbostock/d3/wiki/Hierarchy-Layout)
  * `test.js` tests the `parseHierarchy` module with simple test cases for indented lists
  * `extractHierarchy.js` applies `parseHierarchy` to extract the cause of disease tree from `../mortality_underyling_cause_by_years.csv`
  * `getIndentationLevel.js` is a module that gets the indentation level for a given string
  * `hierarchy.js` is an AMD module containing the cause of disease hierarchy as a D3-compatible tree data structure. This is the output from running `node extractHierarchy.js`.
