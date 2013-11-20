var svg = d3.select(".images")
  .append('svg')
  .attr('class', 'chart')
  .attr('width', this.graphWidth)
  .attr('height', this.graphHeight),
  defs = svg.append('svg:defs');
defs
  .append('svg:pattern')
  .attr('id', 'veg')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 1000)
  .attr('height', '700')
  .append('svg:image')
  .attr('xlink:href', 'vegetables.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 1000)
  .attr('height', 700);
defs
  .append('svg:pattern')
  .attr('id', 'bread')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 1000)
  .attr('height', 750)
  .append('svg:image')
  .attr('xlink:href', 'bread.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 500)
  .attr('height', 1100);
defs
  .append('svg:pattern')
  .attr('id', 'beverages')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 1024)
  .attr('height', 791)
  .append('svg:image')
  .attr('xlink:href', 'beverages.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 1124)
  .attr('height', 751);
defs
  .append('svg:pattern')
  .attr('id', 'dairy')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width',675)
  .attr('height', 593)
  .append('svg:image')
  .attr('xlink:href', 'dairy.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 505)
  .attr('height', 853);
defs
  .append('svg:pattern')
  .attr('id', 'meat')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 1024)
  .attr('height', 681)
  .append('svg:image')
  .attr('xlink:href', 'meat.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 600)
  .attr('height', 401);
defs
  .append('svg:pattern')
  .attr('id', 'fruit')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 722)
  .attr('height', 703)
  .append('svg:image')
  .attr('xlink:href', 'fruit.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 1002)
  .attr('height', 720);

defs
  .append('svg:pattern')
  .attr('id', 'sauces')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 580)
  .attr('height', 380)
  .append('svg:image')
  .attr('xlink:href', 'sauces.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 470)
  .attr('height', 600);

defs
  .append('svg:pattern')
  .attr('id', 'other')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 500)
  .attr('height', 330)
  .append('svg:image')
  .attr('xlink:href', 'other.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 500)
  .attr('height', 330);

  defs
  .append('svg:pattern')
  .attr('id', 'peanut')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 500)
  .attr('height', 330)
  .append('svg:image')
  .attr('xlink:href', 'peanut.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 520)
  .attr('height', 330);