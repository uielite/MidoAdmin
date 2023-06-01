
$(document).ready(function () {
    "use strict";

    // Line Chart
    $("#sparklinedash").sparkline([10, 15, 26, 27, 28, 31, 34, 40, 41, 44, 49, 64, 68, 69, 72], {
        type: "bar",
        height: "50",
        barWidth: "4",
        resize: !0,
        barSpacing: "5",
        barColor: "#f53c79"
    });


    $("#sparkline8").sparkline([79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10], {
        type: "line",
        width: "100%",
        height: "50",
        lineColor: "#f53c79",
        fillColor: "rgba(245, 60, 121, .5)",
        minSpotColor: "#f53c79",
        maxSpotColor: "#f53c79",
        highlightLineColor: "rgba(0, 0, 0, 0.2)",
        highlightSpotColor: "#f53c79"
    });

    $("#sparkline9").sparkline([27, 31, 35, 28, 45, 52, 24, 4, 50, 11, 54, 49, 72, 59, 75], {
        type: "line",
        width: "100%",
        height: "50",
        lineColor: "#fd712c",
        fillColor: "rgba(253, 113, 44, .5)",
        minSpotColor: "#fd712c",
        maxSpotColor: "#fd712c",
        highlightLineColor: "rgba(0, 0, 0, 0.2)",
        highlightSpotColor: "#fd712c"
    });


    // Bar Chart


    $("#spark-bar").sparkline([33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38], {
        type: "bar",
        height: "200",
        barWidth: 10,
        barSpacing: 7,
        barColor: "rgba(242, 23, 128, .5)"
    });

    $('#StackedBarChart').sparkline([
        [1, 4, 2],
        [2, 3, 2],
        [3, 2, 2],
        [4, 1, 2]
    ], {
            type: "bar",
            height: "200",
            barWidth: 10,
            barSpacing: 7, 
            stackedBarColor: ['#36b9d8', '#4bffa2', 'rgba(68, 0, 235, .8)']
        });

    $("#tristate").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        height: "200",
        barWidth: 10,
        barSpacing: 7, 
        colorMap: ['#36b9d8', '#4bffa2', 'rgba(68, 0, 235, .8)'], 
        negBarColor: 'rgba(245, 60, 121, .8)'
    });

    // Composite

    $("#composite-bar").sparkline([73, 53, 50, 67, 3, 56, 19, 59, 37, 32, 40, 26, 71, 19, 4, 53, 55, 31, 37, 67, 10, 21], {
        type: "bar",
        height: "200",
        barWidth: "10",
        resize: !0,
        // barSpacing: "7",
        barColor: "#f53c79", 
        width: '100%'
    });

    // $("#composite-bar").sparkline([40, 26, 71, 19, 75, 57, 47, 4, 53, 55, 31, 37, 67, 10, 21, 73, 53, 50, 67, 3, 56, 19, 70, 58, 48, 26, 72, 59, 37, 32], {
    //     type: "line",
    //     height: "200",
    //     lineColor: "#f53c79",
    //     fillColor: "transparent",
    //     composite: !0,
    //     highlightLineColor: "#f53c79",
    //     highlightSpotColor: "#f53c79"
    // });

    $("#sparkline-composite-chart").sparkline([5, 6, 7, 2, 0, 3, 6, 8, 1, 2, 2, 0, 3, 6], {
        type: 'line',
        width: '100%',
        height: '200', 
        barColor: '#f53c79', 
        colorMap: ['#f53c79', '#f0ae00']
    });

    $("#sparkline-composite-chart").sparkline([5, 6, 7, 2, 0, 3, 6, 8, 1, 2, 2, 0, 3, 6], {
        type: 'bar',
        height: '150px',
        width: '100%',
        barWidth: 10,
        barSpacing: 5,
        barColor: '#34C73B',
        negBarColor: '#34C73B',
        composite: true
    });


    //Pie
    $("#sparkline11").sparkline([24, 61, 51], {
        type: "pie",
        height: "200",
        resize: !0,
        sliceColors: ["rgba(68, 236, 245, .8)", "rgba(245, 60, 161, .8)", "rgba(240, 174, 0, .8)"]
    });

    // Bullet
    $("#bullet-chart").sparkline([10, 12, 12, 9, 7], {
        type: 'bullet',
        height: '100',
        width: '100%',
    });

    //Boxplot
    $("#boxplot").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
        type: 'box'});


});