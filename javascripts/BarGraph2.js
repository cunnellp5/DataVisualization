// var data = [ 4, 8, 15, 16, 23, 42, 55, 33 ,91, 3, 5, 9, 8, 15, 16, 23, 42, 55, 33 ,91, 3, 5, 9 ];
function RandGen () {
  const data = []
  while (data.length < 10) {
    data.push(Math.floor(Math.random() * 100))
  }
  return data
}

var data = RandGen()

var width = 420;
var barHeight = 20;

var x = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width]);

var chart = d3.select('.chart2')
  .attr('width', width)
  .attr('height', barHeight * data.length);

var bar = chart.selectAll('g')
    .data(data)
  .enter().append('g')
    .attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });

bar.append('rect')
  .attr('width', x)
  .attr('height', barHeight - 1);

bar.append('text')
  .attr('x', function(d) { return x(d) - 3; })
  .attr('y', barHeight / 2)
  .attr('dy', '.35em')
  .text(function(d) { return d; });


var x = d3.scaleLinear()
    .range([0, width]);

var chart = d3.select(".chart3")
    .attr("width", width);

d3.tsv("data.tsv", type, function(error, data) {
    x.domain([0, d3.max(data, function(d) { return d.value; })]);

  chart.attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { 
        return "translate(0," + i * barHeight + ")";
      });

  bar.append("rect")
      .attr("width", function(d) { return x(d.value); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", function(d) { return x(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.value; });
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}
