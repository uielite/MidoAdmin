var options = {
  chart: {
    height: 200,
    type: "radialBar",
  },

  series: [67],
  colors: ["#63C7FF"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "55%",
      },
      track: {
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          opacity: 0.15
        }
      },
      style: {
        fontSize: '14px',
        fontFamily: "'Muli', sans-serif",
        fontWeight: '700',
        colors: '#000'
    },
      dataLabels: {
        name: {
          offsetY: 18,
          color: "#A3A5AD",
          fontSize: "13px",
          fontWeight: 700,
          fontFamily: "'Muli', sans-serif",
        },
        value: {
          offsetY: -18,
          color: "#4D4F5C",
          fontSize: "21px",
          fontWeight: 900,
          show: true,
          fontFamily: "'Muli', sans-serif",
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Profit"]
};

var chart = new ApexCharts(document.querySelector("#radial_1"), options);

chart.render();


var options = {
  chart: {
    height: 200,
    type: "radialBar",
  },

  series: [48],
  colors: ["#6DD4B1"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "55%",
      },
      track: {
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          opacity: 0.15
        }
      },
      style: {
        fontSize: '14px',
        fontFamily: "'Muli', sans-serif",
        fontWeight: '700',
        colors: '#000'
    },
      dataLabels: {
        name: {
          offsetY: 18,
          color: "#A3A5AD",
          fontSize: "13px",
          fontWeight: 700,
          fontFamily: "'Muli', sans-serif",
        },
        value: {
          offsetY: -18,
          color: "#4D4F5C",
          fontSize: "21px",
          fontWeight: 900,
          show: true,
          fontFamily: "'Muli', sans-serif",
        }
      }
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Profit"]
};

var chart = new ApexCharts(document.querySelector("#radial_2"), options);

chart.render();

