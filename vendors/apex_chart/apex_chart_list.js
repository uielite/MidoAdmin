options = {
	chart: {
		height: 400,
		type: "bar",
		sparkline: {
			show: !1
		},
		toolbar: {
			show: !1
		}
	},
	colors: ["#fe80b2", "#1e3d73"],
	plotOptions: {
		bar: {
			horizontal: !1,
			columnWidth: "30%",
			endingShape: "rounded"
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !1,
		width: 5,
		colors: ["#ffffff"]
	},
	series: [{
		name: "Mobile",
		enabled: "true",
		data: [44, 90, 90, 60, 115]
	}, {
		name: "Desktop",
		data: [35, 80, 100, 70, 95]
	}],
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function(e) {
				return "$ " + e + " thousands"
			}
		}
	}
};
jQuery("#bar-chart-6").length && (chart = new ApexCharts(document.querySelector("#bar-chart-6"), options)).render();