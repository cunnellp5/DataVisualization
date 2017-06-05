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
// ****************************************************************
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

// part 3 ******************

(function() {
  'use strict';
var margin = {top: 40, right: 30, bottom: 60, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1)

var y = d3.scaleLinear()
  .range([height, 0]);

  var xAxis = d3.axisBottom()
      .scale(x);

  var yAxis = d3.axisLeft()
      .scale(y)
      .ticks(10, '%')

var chart = d3.select('.chart3')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.tsv('../views/data.tsv', type, function(error, data) {
  x.domain(data.map(function(d) { return d.name; }))
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  var t = d3.transition()
  .duration(1000)
  .ease(d3.easeLinear);

  chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
      .transition(t)
      .style('fill', 'green')

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)

// y label
  chart.append('g')
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Values");
// x label
  chart.append('g')
    .append("text")
      .attr("x", 10)
      .attr("y", 440)
      // .attr("dy", "3.71em")
      .style("text-anchor", "end")
      .text("Names");


var rotate = d3.transition()
    .duration(1000)
    .ease(d3.easeLinear);

chart.selectAll('.bar')
    .data(data)
  .enter().append('rect')
    .attr('y', function(d) { return y(d.value); })

    .attr('x', function(d) { return x(d.name); })
    .attr('height', function(d) { return height - y(d.value); })
    .attr('width', x.bandwidth())
})

function type(d) {
  d.value = +d.value;
  return d;
}
}());
