var options = {
    colors : ['#3B76EF', '#A66DD4','#63C7FF'],
    series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20]
  },{
    name: 'PRODUCT c',
    data: [13, 23, 20]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    columnWidth: '10%',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: 0,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  xaxis: {
    type: 'category',
    categories: ['Q 1', 'Q 1', 'Q 1',
    ],
  },
  legend: {
      show: false,
    position: 'right',
    offsetY: 10
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#stackbar_active"), options);
  chart.render();