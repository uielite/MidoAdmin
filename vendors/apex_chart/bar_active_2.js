var options = {
  colors : ['#AFD7FF'],
    series: [{
    name: 'Monthly',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
  }, {
    name: 'Yearly',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 265,
    type: 'line',
    toolbar: {
        show: false
      }
  },

  stroke: {
    width: [0, 4]
  },
  dataLabels: {
    enabled: false,
    enabledOnSeries: [1]
  },
  legend: {
    show: false
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
    //   text: 'Monthly',
    },
  
  }, {
    opposite: true,
    title: {
    //   text: 'Yearly'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#bar_active2"), options);
  chart.render();