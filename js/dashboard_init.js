!(function (a) {
    "use strict";
    a(function () {
        if (a("#bar").length) {
            var e = a("#bar").get(0).getContext("2d");
            e.height =20;
            new Chart(e, {
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Revenue",
                            backgroundColor: "#1ccab8",
                            borderColor: "transparent",
                            borderWidth: 2,
                            categoryPercentage: 0.5,
                            hoverBackgroundColor: "#00d8c2",
                            hoverBorderColor: "transparent",
                            data: [30, 39, 20, 31, 41, 25, 20, 39, 20, 31, 41, 25],
                        },
                    ],
                },
                options: {
                    // responsive: !0,
                    responsive: true,
                    // maintainAspectRatio: !0,
                    maintainAspectRatio: false,
                    legend: { display: !1, labels: { fontColor: "#50649c" } },
                    tooltips: {
                        enabled: !0,
                        callbacks: {
                            label: function (e, a) {
                                return a.datasets[e.datasetIndex].label + " $ " + e.yLabel + "k";
                            },
                        },
                    },
                    scales: {
                        xAxes: [
                            {
                                barPercentage: 0.35,
                                categoryPercentage: 0.4,
                                display: !0,
                                gridLines: { color: "transparent", borderDash: [0], zeroLineColor: "transparent", zeroLineBorderDash: [2], zeroLineBorderDashOffset: [2] },
                                ticks: { fontColor: "#a4abc5", beginAtZero: !0, padding: 12 },
                            },
                        ],
                        yAxes: [
                            {
                                gridLines: { color: "#8997bd29", borderDash: [3], drawBorder: !1, drawTicks: !1, zeroLineColor: "#8997bd29", zeroLineBorderDash: [2], zeroLineBorderDashOffset: [2] },
                                ticks: {
                                    fontColor: "#a4abc5",
                                    beginAtZero: !0,
                                    padding: 12,
                                    callback: function (e) {
                                        if (!(e % 10)) return "$" + e + "k";
                                    },
                                },
                            },
                        ],
                    },
                },
            });
        }
    });
})(jQuery),
    $("#world-map-markers").vectorMap({
        map: "world_mill_en",
        scaleColors: ["#eff0f1", "#eff0f1"],
        normalizeFunction: "polynomial",
        hoverOpacity: 0.7,
        hoverColor: !1,
        regionStyle: { initial: { fill: "#7474b126" } },
        markers: [
            { latLng: [55.75, 37.62], name: "Russia" },
            { latLng: [-25.27, 133.77], name: "Australia" },
            { latLng: [20.59, 78.96], name: "India" },
            { latLng: [39.52, -87.12], name: "Brazil" },
        ],
        series: { regions: [{ values: { US: "#868ff363", AU: "#868ff363", BR: "#868ff363", RU: "#868ff363" }, attribute: "fill" }] },
        markerStyle: { initial: { stroke: "#7474b126" }, hover: { stroke: "rgba(112, 112, 112, 0.30)" } },
        backgroundColor: "transparent",
        markers: [
            { latLng: [37.09024, -95.712891], name: "USA", style: { fill: "#f93b7a" } },
            { latLng: [55.754093, 37.620407], name: "Russia", style: { fill: "#0aafff" } },
            { latLng: [-21.943369, 123.102198], name: "Australia", style: { fill: "#7551e9" } },
            { latLng: [-11.409874, -41.280857], name: "Brazil", style: { fill: "#ffc212" } },
        ],
    });

    


//# sourceMappingURL=dashboard.js.map
