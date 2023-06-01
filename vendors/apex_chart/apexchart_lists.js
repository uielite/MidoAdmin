$(document).ready(function(){
     
    var options = {
        series: [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
        chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: 7,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
      },
      title: {
        text: 'Social Media',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      yaxis: {
        min: -10,
        max: 40,
        title: {
          text: 'Engagement',
        },
      }
      };

      var chart = new ApexCharts(document.querySelector("#apex_1"), options);
      chart.render();
});
$(document).ready(function(){
      
  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#apex_2"), options);
  chart.render();
});

// apex_3 
$(document).ready(function(){
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#apex_3"), options);
chart.render();
});

// apex_4 
$(document).ready(function(){

var options = {
  series: [{
  name: 'Network',
  data: [{
      x: 'Dec 23 2017',
      y: null
    },
    {
      x: 'Dec 24 2017',
      y: 44
    },
    {
      x: 'Dec 25 2017',
      y: 31
    },
    {
      x: 'Dec 26 2017',
      y: 38
    },
    {
      x: 'Dec 27 2017',
      y: null
    },
    {
      x: 'Dec 28 2017',
      y: 32
    },
    {
      x: 'Dec 29 2017',
      y: 55
    },
    {
      x: 'Dec 30 2017',
      y: 51
    },
    {
      x: 'Dec 31 2017',
      y: 67
    },
    {
      x: 'Jan 01 2018',
      y: 22
    },
    {
      x: 'Jan 02 2018',
      y: 34
    },
    {
      x: 'Jan 03 2018',
      y: null
    },
    {
      x: 'Jan 04 2018',
      y: null
    },
    {
      x: 'Jan 05 2018',
      y: 11
    },
    {
      x: 'Jan 06 2018',
      y: 4
    },
    {
      x: 'Jan 07 2018',
      y: 15,
    },
    {
      x: 'Jan 08 2018',
      y: null
    },
    {
      x: 'Jan 09 2018',
      y: 9
    },
    {
      x: 'Jan 10 2018',
      y: 34
    },
    {
      x: 'Jan 11 2018',
      y: null
    },
    {
      x: 'Jan 12 2018',
      y: null
    },
    {
      x: 'Jan 13 2018',
      y: 13
    },
    {
      x: 'Jan 14 2018',
      y: null
    }
  ],
}],
  chart: {
  type: 'area',
  height: 350,
  animations: {
    enabled: false
  },
  zoom: {
    enabled: false
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
fill: {
  opacity: 0.8,
  type: 'pattern',
  pattern: {
    style: ['verticalLines', 'horizontalLines'],
    width: 5,
    height: 6
  },
},
markers: {
  size: 5,
  hover: {
    size: 9
  }
},
title: {
  text: 'Network Monitoring',
},
tooltip: {
  intersect: true,
  shared: false
},
theme: {
  palette: 'palette1'
},
xaxis: {
  type: 'datetime',
},
yaxis: {
  title: {
    text: 'Bytes Received'
  }
}
};

var chart = new ApexCharts(document.querySelector("#apex_4"), options);
chart.render();
});


$(document).ready(function(){
  var options = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }, {
    name: 'Series 2',
    data: [20, 30, 40, 80, 20, 80],
  }, {
    name: 'Series 3',
    data: [44, 76, 78, 13, 43, 10],
  }],
    chart: {
    height: 350,
    type: 'radar',
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1
    }
  },
  title: {
    text: 'Radar Chart - Multi Series'
  },
  stroke: {
    width: 2
  },
  fill: {
    opacity: 0.1
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ['2011', '2012', '2013', '2014', '2015', '2016']
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart344"), options);
  chart.render();
});

$(document).ready(function(){
  var options = {
    series: [{
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
    data: [53, 32, 33, 52, 13, 44, 32]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart4556"), options);
  chart.render();



});
$(document).ready(function(){
var options = {
  series: [{
  data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
}],
  chart: {
  type: 'line',
  height: 350
},
stroke: {
  curve: 'stepline',
},
dataLabels: {
  enabled: false
},
title: {
  text: 'Stepline Chart',
  align: 'left'
},
markers: {
  hover: {
    sizeOffset: 4
  }
}
};

var chart = new ApexCharts(document.querySelector("#apex_9"), options);
chart.render();
});

      
var options = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Points',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#apex_10"), options);
chart.render();