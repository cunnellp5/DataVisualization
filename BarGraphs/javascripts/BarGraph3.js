// var data = [ 4, 8, 15, 16, 23, 42, 55, 33 ,91, 3, 5, 9, 8, 15, 16, 23, 42, 55, 33 ,91, 3, 5, 9 ];
// function RandGen () {
//   const data = []
//   while (data.length < 10) {
//     data.push(Math.floor(Math.random() * 100))
//   }
//   return data
// }
//
// var data = RandGen()
(function() {
  'use strict';
var width = 960;
var height = 500;

var y = d3.scaleLinear()
  .range([height, 0]);

var chart = d3.select('.chart1')
  .attr('width', width)
  .attr('height', height);

d3.tsv('data.tsv', type, function(error, data) {
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  var barWidth = width / data.length;

  var bar = chart.selectAll('g')
      .data(data)
    .enter().append('g')
      .attr('transform', function(d, i) { return 'translate(' + i * barWidth + ',0)' ; });

  bar.append('rect')
    .attr('y', function(d) { return y(d.value); })
    .attr('height', function(d) { return height - y(d.value); })
    .attr('width', barWidth - 1);

  bar.append('text')
    .attr('x', barWidth / 2)
    .attr('y', function(d) { return y(d.value) + 3; })
    .attr('dy', '.75em')
    .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value;
  return d;
}
}());
// *******************
//  chart 2 code below:
(function() {
  'use strict';
var width = 960,
    height = 500;

var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.1);

var y = d3.scaleLinear()
    .range([height, 0]);

var chart = d3.select(".chart2")
    .attr("width", width)
    .attr("height", height);

d3.tsv("../views/abc.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + x(d.name) + ",0)"; });

  bar.append("rect")
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.bandwidth());

  bar.append("text")
      .attr("x", x.bandwidth() / 2)
      .attr("y", function(d) { return y(d.value) + 3; })
      .attr("dy", ".75em")
      .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}
}());



(function() {
  'use strict';


}());
