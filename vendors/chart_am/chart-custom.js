

    
  // update 
  if(jQuery('#iq-chart-order').length){
    am4core.ready(function() {

  am4core.useTheme(am4themes_animated);

  var chart = am4core.create("iq-chart-order", am4charts.XYChart);
  chart.colors.list = [
    am4core.color("#1e3d73"),
    am4core.color("#fe517e"),
    am4core.color("#99f6ca"),
    am4core.color("#ffbf43"),
    am4core.color("#9267ff"),
    am4core.color("#1e3d73"),
    am4core.color("#fe517e"),
    am4core.color("#99f6ca"),
    am4core.color("#ffbf43"),
    am4core.color("#9267ff"),
    am4core.color("#1e3d73"),
    am4core.color("#fe517e")
  ];

  chart.data = [{
   "country": "USA",
   "visits": 2025
  }, {
   "country": "China",
   "visits": 1882
  }, {
   "country": "Japan",
   "visits": 1809
  }, {
   "country": "Germany",
   "visits": 1322
  }, {
   "country": "UK",
   "visits": 1122
  }, {
   "country": "France",
   "visits": 1114
  }, {
   "country": "India",
   "visits": 984
  }, {
   "country": "Spain",
   "visits": 711
  }, {
   "country": "Netherlands",
   "visits": 665
  }, {
   "country": "Russia",
   "visits": 580
  }, {
   "country": "South Korea",
   "visits": 443
  }, {
   "country": "Canada",
   "visits": 441
  }];

  chart.padding(40, 40, 40, 40);

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.minGridDistance = 60;
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.disabled = true;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.extraMax = 0.1;
  //valueAxis.rangeChangeEasing = am4core.ease.linear;
  //valueAxis.rangeChangeDuration = 1500;

  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryX = "country";
  series.dataFields.valueY = "visits";
  series.tooltipText = "{valueY.value}"
  series.columns.template.strokeOpacity = 0;
  series.columns.template.column.cornerRadiusTopRight = 10;
  series.columns.template.column.cornerRadiusTopLeft = 10;
  //series.interpolationDuration = 1500;
  //series.interpolationEasing = am4core.ease.linear;
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.verticalCenter = "bottom";
  labelBullet.label.dy = -10;
  labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

  chart.zoomOutButton.disabled = true;

  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  series.columns.template.adapter.add("fill", function (fill, target) {
   return chart.colors.getIndex(target.dataItem.index);
  });

  setInterval(function () {
   am4core.array.each(chart.data, function (item) {
     item.visits += Math.round(Math.random() * 200 - 100);
     item.visits = Math.abs(item.visits);
   })
   chart.invalidateRawData();
  }, 2000)

  categoryAxis.sortBySeries = series;

  });
  }


  // lol 
  if(jQuery('#iq-chart-efficient').length){
    am4core.ready(function() {

  am4core.useTheme(am4themes_animated);

  // Create chart
  var chart = am4core.create("iq-chart-efficient", am4charts.PieChart);
  
  chart.hiddenState.properties.opacity = 0; 

  chart.data = [
    {
      country: "Lithuania",
      value: 260
    },
    {
      country: "Czechia",
      value: 230
    },
    {
      country: "Ireland",
      value: 200
    },
    {
      country: "Germany",
      value: 165
    },
    {
      country: "Australia",
      value: 139
    },
    {
      country: "Austria",
      value: 128
    }
  ];

  var series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = "value";
  series.dataFields.radiusValue = "value";
  series.dataFields.category = "country";
  series.slices.template.cornerRadius = 6;
  series.colors.step = 3;
  series.colors.list = [
    am4core.color("#1e3d73"),
    am4core.color("#fe517e"),
    am4core.color("#ffbf43"),
    am4core.color("#99f6ca"),
    am4core.color("#9267ff"),
    am4core.color("#FF6F91"),
  ];


  series.labels.template.disabled = true;
  
  // series.legend.markers.template.disabled = true;

  series.hiddenState.properties.endAngle = -90;

  // chart.legend = new am4charts.Legend();

  });
  }