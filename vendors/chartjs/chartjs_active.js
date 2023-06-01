
(function ($) {
    "use strict";

    const ctx = document.getElementById("sales-chart").getContext('2d');
    const gradientStroke1 = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke1.addColorStop(0, "#f53c79");
    gradientStroke1.addColorStop(1, "#f0ae00");

    const gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke2.addColorStop(0, "#4400eb");
    gradientStroke2.addColorStop(1, "#44ecf5");

    const gradientStroke3 = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke3.addColorStop(0, "#36b9d8");
    gradientStroke3.addColorStop(1, "#4bffa2");
    
    ctx.height = 200;

    new Chart(ctx, {
        type: 'line',
        legend: {
            display: false
        },
        data: {
            labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            type: 'line',
            defaultFontFamily: 'Poppins',
            datasets: [{
                label: "Clothes",
                data: [30, 50, 30, 50, 80, 50, 90],
                backgroundColor: 'transparent',
                borderColor: "#1BC167",
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#1BC167",

            }, {
                label: "Foods",
                data: [40, 20, 40, 20, 40, 20, 40],
                backgroundColor: 'transparent',
                borderColor: "#508FF4",
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: '#fff',
                pointBackgroundColor: "#508FF4",
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                display: false,
                mode: 'index',
                titleFontSize: 10,
                titleFontColor: '#706F9A',
                bodyFontColor: '#706F9A',
                backgroundColor: '#fff',
                titleFontFamily: '"Muli", sans-serif',
                bodyFontFamily: '"Muli", sans-serif',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display:false,
                    }, 
                    ticks: {
                        max: 160, 
                        min: 0, 
                        stepSize: 20
                    }
                }]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    });

})(jQuery);


(function ($) {
    "use strict";
    //doughut chart
    const ctx = document.getElementById("doughutChart").getContext('2d');
    ctx.height = 220;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            defaultFontFamily: 'Poppins', 
            datasets: [{
                data: [45, 25], 
                backgroundColor: [
                    "rgba(223, 103, 193, .7)",
                    "rgba(106, 224, 189, .9)"
                ],
                hoverBackgroundColor: [
                    "rgba(242, 23, 128, .5)",
                    "rgba(242, 23, 128, .4)"
                ]

            }],
            // labels: [
            //     "green",
            //     "green",
            //     "green",
            //     "green"
            // ]
        },
        options: {
            responsive: true
        }
    });

})(jQuery);


(function ($) {
    "use strict";
    //doughut chart
    const ctx = document.getElementById("doughutChart2").getContext('2d');
    ctx.height = 220;
    new Chart(ctx, {
        type: 'pie',
        data: {
            defaultFontFamily: 'Poppins', 
            datasets: [{
                data: [45, 25 , 20, 15, 5], 
                backgroundColor: [
                    "#3B76EF",
                    "#00B382",
                    "#79A9F7",
                    "#FF7B36",
                    "#E8205E",
                ],
                hoverBackgroundColor: [
                    "#FF7B36",
                    "#FF7B36",
                    "#FF7B36",
                    "#FF7B36",
                ]

            }],
            // labels: [
            //     "green",
            //     "green",
            //     "green",
            //     "green"
            // ]
        },
        options: {
            responsive: true
        }
    });

})(jQuery);

