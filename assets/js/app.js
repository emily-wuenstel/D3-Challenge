// @TODO: YOUR CODE HERE!
//Define SVG first to hold the chart and margins. Set height and width to adjust for margins

var svgHeight = 960;
var svgWidth = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80, 
    left: 100
}

var height = svgHeight - margin.left - margin.right;
var width = svgWidth - margin.top - margin.bottom;

//Get data for healthcare vs income and age vs obesity
d3.csv("assets/data/data.csv").then(function(rawData) {

    rawData.forEach(function(data) {
        data.healthcare = +data.healthcare;
        data.income = +data.income;
        data.age = +data.age;
        data.obesity = +data.obesity;
    });

})

// Create SVG wrapper to hold chart 

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Append SVG group

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

