var data = [ 4, 8, 15, 16, 23, 42 ];

// hard coded
var section = d3.selectAll('section')
  section.append('div')
    .style('width', '40px')
    .html('4');
  section.append('div')
    .style('width', '80px')
    .html('8');
  section.append('div')
    .style('width', '150px')
    .html('15');
  section.append('div')
    .style('width', '160px')
    .html('16');
  section.append('div')
    .style('width', '230px')
    .html('23');
  section.append('div')
    .style('width', '420px')
    .html('42')

// auto
d3.select('.chart2')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width',
    function(data) {
        return data * 10 + 'px';
    })
    .text(
      function(data) {
        return data;
      });
