# Sankey order of operations / checkboxes:
---
> CSS
[] Style nodes and links with basic sankey options.
  [] hover and mouse move tricks to indicate which line we're on
---
> Javascripts
[] Import sankey.js from https://github.com/d3/d3-sankey
[] First define our margins (and units)
  > Be sure to include height and width which will subtract margins
  > We do the above so we have space to add our labels and ticks through d3
[] Format the numbers
[] Add a predefined color scale! for readability
[] "append" an svg to something like #canvas according to margins defined
[] Set variables for sankey
[] define a path (var path = sankey.links())
[] bring in json data (d3.json(data stuff here))
  [] inside the json function define sankey vars
  [] add the 'links' to diagram
---
> HTML
* After importing cdn's
