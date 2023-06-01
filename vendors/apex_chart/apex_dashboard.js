if ($("#gradient_line_chart").length > 0) {
  var options = {
    series: [
      {
        name: "series1",
        data: [200, 400, 300, 400, 200, 400, 200, 300, 200, 300],
      },
      {
        name: "series2",
        data: [500, 300, 400, 200, 500, 200, 400, 300, 500, 200],
      },
    ],
    chart: {
      height: 370,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#FFAB2D", "#00ADA3"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      strokeDashArray: 6,
      borderColor: "#dadada",
    },
    yaxis: {
      labels: {
        style: {
          colors: "#B5B5C3",
          fontSize: "12px",
          fontFamily: "Poppins",
          fontWeight: 400,
        },
        formatter: function (value) {
          return value + "k";
        },
      },
    },
    xaxis: {
      categories: [
        "Week 01",
        "Week 02",
        "Week 03",
        "Week 04",
        "Week 05",
        "Week 06",
        "Week 07",
        "Week 08",
        "Week 09",
        "Week 10",
      ],
      labels: {
        style: {
          colors: "#B5B5C3",
          fontSize: "12px",
          fontFamily: "Poppins",
          fontWeight: 400,
        },
      },
    },
    fill: {
      type: "solid",
      opacity: 0.05,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  chart = new ApexCharts(
    document.querySelector("#gradient_line_chart"),
    options
  );
  chart.render();
}
if ($("#area_chart").length > 0) {
  var options = {
      chart: {
        height: 280,
        type: "area",
        toolbar: { show: !1 },
        zoom: { enabled: !0 },
      },
      plotOptions: {
        bar: { horizontal: !1, columnWidth: "15%", endingShape: "rounded" },
      },
      dataLabels: { enabled: !1 },
      series: [
        { name: "Total Collections", data: [0, 55, 31, 57, 22] },
        { name: "Total Collections", data: [5, 45, 41, 67, 52] },
      ],
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
      colors: ["#5F4ECF", "#99D4E5"],
      legend: { position: "bottom" },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.5,
        },
      },
      grid: {
        borderColor: "#C6DAED",
        // strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        show: true,
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            fontSize: "12px",
          },
        },
      },
    },
    chart = new ApexCharts(document.querySelector("#area_chart"), options);
  chart.render();
}

if ($("#line-chart").length > 0) {
  var options = {
    chart: {
      type: "area",
      height: 300,
      foreColor: "#8C87C2",
      fontFamily: "Rubik, sans-serif",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#58C3AE", "#7395FF"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Buy",
        data: generateDayWiseTimeSeries(0, 30),
      },
      {
        name: "Sell",
        data: generateDayWiseTimeSeries(1, 30),
      },
    ],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        offsetX: -10,
        offsetY: 0,
      },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100, 100],
      },
    },
  };
  (chart = new ApexCharts(
    document.querySelector("#line-chart"),
    options
  )).render();
}
if ($("#area_chart2").length > 0) {
  var options = {
      chart: {
        height: 280,
        type: "area",
        toolbar: { show: !1 },
        zoom: { enabled: !0 },
      },
      plotOptions: {
        bar: { horizontal: !1, columnWidth: "15%", endingShape: "rounded" },
      },
      dataLabels: { enabled: !1 },
      series: [
        { name: "Total Collections", data: [0, 35, 31, 67, 102] },
        { name: "Total Collections", data: [5, 45, 31, 37, 52] },
      ],
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
      colors: ["#5F4ECF", "#99D4E5"],
      legend: { position: "bottom" },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.0,
          opacityTo: 0.0,
        },
      },
      grid: {
        borderColor: "#C6DAED",
        // strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        show: true,
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            fontSize: "12px",
          },
        },
      },
    },
    chart = new ApexCharts(document.querySelector("#area_chart2"), options);
  chart.render();
}
if ($("#area_chart3").length > 0) {
  var options = {
      chart: {
        height: 280,
        type: "area",
        toolbar: { show: !1 },
        zoom: { enabled: !0 },
      },
      plotOptions: {
        bar: { horizontal: !1, columnWidth: "15%", endingShape: "rounded" },
      },
      dataLabels: { enabled: !1 },
      series: [
        { name: "Total Collections", data: [0, 100, 51, 37, 52] },
        { name: "Total Collections", data: [51, 54, 20, 37, 72] },
      ],
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
      colors: ["#5F4ECF", "#99D4E5"],
      legend: { position: "bottom" },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.0,
          opacityTo: 0.0,
        },
      },
      grid: {
        borderColor: "#C6DAED",
        // strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        show: true,
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            fontSize: "12px",
          },
        },
      },
    },
    chart = new ApexCharts(document.querySelector("#area_chart3"), options);
  chart.render();
}
if ($("#area_chart4").length > 0) {
  var options = {
    chart: {
      height: 450,
      type: "area",
      stacked: !0,
      toolbar: { show: !1, autoSelected: "zoom" },
    },
    colors: ["#2a77f4", "#a5c2f1"],
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: [1.5, 1.5], dashArray: [0, 4] },
    grid: { padding: { left: 0, right: 0 }, strokeDashArray: 3 },
    markers: { size: 0, hover: { size: 0 } },
    series: [
      // { name: "New Visits", data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120] },
      {
        name: "Unique Visits",
        data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
      },
    ],
    xaxis: {
      label: {
        show: false,
      },
      type: "month",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: !0 },
      axisTicks: { show: !0 },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
    legend: { position: "top", horizontalAlign: "right" },
    legend: {
      show: false,
    },
    xaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  chart = new ApexCharts(document.querySelector("#area_chart4"), options);
  chart.render();
}
/* -------------------------------------------------------------------------- */
/*                                     chart                                    */
/* -------------------------------------------------------------------------- */

/* ----- Apex Hospital Expense Chart ----- */

if ($("#bar_line").length > 0) {
  var options1 = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: ["35%"],
        endingShape: "flat",
      },
    },
    xaxis: {
      rotate: -45,
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    colors: ["#356EFF", "#30C0B3"],

    markers: {
      size: 6,
      colors: ["#ff0"],
      strokeColor: "#F65365",
      strokeWidth: 3,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    grid: {
      borderColor: "#F6F6F6",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#bar_line"), options1);

  chart1.render();
}

if ($("#bar_line2").length > 0) {
  var options2 = {
    chart: {
      height: 200,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 44, 55, 57, 56],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: ["15%"],
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    xaxis: {
      rotate: -45,
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "aug",
        "sep",
        "oct",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    colors: ["#6C5DD3", "#6C5DD3"],

    markers: {
      size: 6,
      colors: ["#ff0"],
      strokeColor: "#F65365",
      strokeWidth: 3,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    grid: {
      borderColor: "#F6F6F6",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#bar_line2"), options2);

  chart1.render();
}
if ($("#bar_line10").length > 0) {
  var options1 = {
    chart: {
      height: 250,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    series: [
      { name: "Complete", data: [40, 70, 20, 90, 36, 80, 30, 91, 60] },
      { name: "Doing", data: [10, 30, 50, 20, 76, 40, 20, 51, 10] },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: ["35%"],
        endingShape: "flat",
      },
    },
    xaxis: {
      rotate: -45,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    colors: ["#3C21F7", "#FFCA1F"],

    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: "smooth" },
    // states: {
    //   normal: {
    //     filter: {
    //       type: "none",
    //       value: 0,
    //     },
    //   },
    //   hover: {
    //     filter: {
    //       type: "none",
    //       value: 0,
    //     },
    //   },
    //   active: {
    //     allowMultipleDataPointsSelection: false,
    //     filter: {
    //       type: "none",
    //       value: 0,
    //     },
    //   },
    // },
    // xaxis: {
    //   axisBorder: {
    //     show: false,
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    //   labels: {
    //     show: false,
    //     style: {
    //       // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
    //       fontSize: "12px",
    //       // fontFamily: KTApp.getSettings()['font-family']
    //     },
    //   },
    // },
    yaxis: {
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    grid: {
      borderColor: "#F6F6F6",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#bar_line10"), options1);

  chart1.render();
}

if ($("#circle_chart").length > 0) {
  var options = {
    series: [85, 60, 67, 50],
    chart: {
      height: 315,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Income", "Income", "Imcome", "Income"],
    colors: ["#ec8153", "#70b944", "#498bd9", "#6647bf"],
  };

  chart = new ApexCharts(document.querySelector("#circle_chart"), options);
  chart.render();
}
if ($("#chart4").length > 0) {
  var options = {
    series: [70],
    chart: {
      type: "radialBar",
      offsetY: 0,
      height: 350,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        track: {
          background: "#F1EAFF",
          strokeWidth: "100%",
          margin: 5,
        },

        hollow: {
          margin: 30,
          size: "45%",
          background: "#F1EAFF",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: "22px",
            color: "#886CC0",
            fontWeight: 700,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
    grid: {
      padding: {
        top: -10,
      },
    },
    /* stroke: {
    dashArray: 4,
colors:'#6EC51E'
  }, */
    fill: {
      type: "gradient",
      colors: "#FF63E6",
      gradient: {
        shade: "white",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    labels: ["Average Results"],
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();
}
if ($("#chart5").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [50, 45, 25, 40, 35, 35],
      },
    ],
    chart: {
      type: "area",
      height: 290,
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.0,
        opacityTo: 0.0,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#F3663A", "#F3663A"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#F3663A", "#F3663A"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#F3663A", "#F3663A"],
    markers: {
      colors: ["#F3663A", "#F3663A"],
      strokeColor: ["#F3663A", "#F3663A"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();
}
if ($("#chart6").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [50, 45, 25, 40, 35, 35],
      },
    ],
    chart: {
      type: "area",
      height: 90,
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.0,
        opacityTo: 0.0,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#BA8DFF", "#6A0CE5"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#FF8787", "#6A0CE5"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#FF8787", "#6A0CE5"],
    markers: {
      colors: ["#6A0CE5", "#6A0CE5"],
      strokeColor: ["#6A0CE5", "#6A0CE5"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart6"), options);
  chart.render();
}
if ($("#chart7").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [50, 45, 25, 40, 35, 35],
      },
    ],
    chart: {
      type: "area",
      height: 90,
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.0,
        opacityTo: 0.0,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#43E1EC", "#6A0CE5"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#6A0CE5", "#6A0CE5"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#43E1EC", "#6A0CE5"],
    markers: {
      colors: ["#6A0CE5", "#6A0CE5"],
      strokeColor: ["#6A0CE5", "#6A0CE5"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart7"), options);
  chart.render();
}
if ($("#chart8").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [30, 25, 45, 30, 55, 55],
      },
    ],
    chart: {
      type: "area",
      height: 160,
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#6A0DE5", "#6A0DE5"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#6A0DE5", "#6A0DE5"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#6A0DE5", "#6A0DE5"],
    markers: {
      colors: ["#6A0DE5", "#6A0DE5"],
      strokeColor: ["#6A0DE5", "#6A0DE5"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart8"), options);
  chart.render();
}

if ($("#chart9").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [40, 20, 20, 40, 36, 40, 30, 41, 30],
      },
    ],
    chart: {
      type: "area",
      height: "200px",
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.5,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 5,
      colors: ["#4318FF", "#4318FF"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#E9E3FF", "#E9E3FF"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#E9E3FF", "#E9E3FF"],
    markers: {
      colors: ["#20c997", "#6C5DD3"],
      strokeColor: ["#20c997", "#20c997"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart9"), options);
  chart.render();
}
if ($("#chart10").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [30, 25, 55, 30, 55, 55],
      },
    ],
    chart: {
      type: "area",
      height: "200px",
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 2,
      colors: ["#6C5DD3", "#6C5DD3"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#ff4d4f", "#ff4d4f"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#ff4d4f", "#ff4d4f"],
    markers: {
      colors: ["#ff4d4f", "#ff4d4f"],
      strokeColor: ["#ff4d4f", "#ff4d4f"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart10"), options);
  chart.render();
}
if ($("#chart11").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [30, 25, 45, 30, 55, 55],
      },
    ],
    chart: {
      type: "area",
      height: "60px",
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 5,
      colors: ["#2392FF", "#20c997"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#20c997", "#20c997"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#20c997", "#20c997"],
    markers: {
      colors: ["#20c997", "#6C5DD3"],
      strokeColor: ["#20c997", "#20c997"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart11"), options);
  chart.render();
}
if ($("#chart12").length > 0) {
  var options = {
    series: [
      {
        name: "",
        data: [30, 25, 45, 30, 55, 55],
      },
    ],
    chart: {
      type: "area",
      height: "60px",
      offsetY: 0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [20, 100, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 5,
      colors: ["#D21DC6", "#D21DC6"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: ["#D21DC6", "#D21DC6"],
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          // colors: KTApp.getSettings()['colors']['gray']['gray-500'],
          fontSize: "12px",
          // fontFamily: KTApp.getSettings()['font-family']
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: KTApp.getSettings()['font-family']
      },
      y: {
        formatter: function (val) {
          return "$" + val + " ";
        },
      },
    },
    colors: ["#D21DC6", "#D21DC6"],
    markers: {
      colors: ["#20c997", "#6C5DD3"],
      strokeColor: ["#20c997", "#20c997"],
      strokeWidth: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart12"), options);
  chart.render();
}

if ($("#earning_chart").length > 0) {
  var options = {
    chart: {
      height: 305,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 210,
        hollow: {
          margin: 5,
          size: "40%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
          },
        },
      },
    },
    colors: ["#007bff", "#00cccc", "#6f42c1"],
    series: [76, 67, 61],
    labels: ["New", "Old", "Others"],
    legend: {
      show: true,
      floating: true,
      fontSize: "12px",
      position: "left",
      offsetX: 0,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      itemMargin: {
        horizontal: 1,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#earning_chart"), options);

  chart.render();
}
if ($("#dbount_chart").length > 0) {
  var options = {
    chart: {
      height: "260",
      type: "radialBar",
    },

    series: [87, 75, 62],
    colors: ["#4d69fa"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "16px",
          },
          value: {
            fontSize: "14px",
          },
          total: {
            show: false,
          },
        },
      },
    },
    labels: ["Account", "Services", "Restaurant", "Others"],
    colors: ["#496ECC", "#80CF00", "#FFC717", "#C8C8C8"],
  };

  var chart = new ApexCharts(document.querySelector("#dbount_chart"), options);

  chart.render();
}

function generateDayWiseTimeSeries(s, count) {
  var values = [
    [
      274, 248, 273, 48, 285, 229, 69, 51, 16, 141, 388, 325, 333, 220, 333,
      376, 213, 97, 90, 255, 172, 205, 117, 16, 247, 85, 392, 66, 278, 373, 224,
      37, 139, 89, 280, 150, 134, 325, 195, 279, 242, 62, 72, 239, 131, 376, 71,
      231, 148, 264, 214, 300, 380, 326, 67, 150, 114, 258, 379, 176, 310, 47,
      371, 29, 311, 90, 270, 173, 237, 281, 93, 33, 384, 189, 180, 379, 203,
      220, 1, 299, 203, 393, 227, 381, 225, 71, 219, 312, 342, 338, 247, 293,
      374, 295, 390, 320, 237, 109, 28, 45, 137, 218, 26, 24, 234, 192, 130,
      302, 260, 112, 349, 84, 7, 161, 331, 179, 190, 72, 41, 108, 329, 331, 157,
      43, 260, 228, 264, 229, 264, 181, 314, 397, 167, 137, 111, 386, 158, 242,
      235, 126, 83, 374, 149, 395, 124, 225, 246, 16, 326, 90, 66, 167, 144, 57,
      293, 137, 102, 260, 336, 129, 25, 249, 183, 263, 274, 357, 275, 335, 221,
      344, 226, 5, 251, 28, 214, 67, 189, 243, 251, 112, 326, 277, 53, 262, 18,
      353, 112, 96, 237, 320, 129, 309, 285, 306, 103, 214, 296, 380, 377, 389,
      195, 343, 232, 136, 348, 39, 341, 148, 171, 176, 325, 380, 334, 389, 398,
      288, 217, 257, 388, 17, 24, 364, 380, 269, 267, 220, 180, 227, 249, 165,
      243, 2, 95, 319, 355, 327, 35, 84, 225, 260, 366, 270, 185, 148, 174, 276,
      208, 175, 355, 40, 276, 348, 206, 273, 286, 363, 196, 68, 37, 136, 40,
      282, 150, 293, 203, 219, 265, 328, 203, 361, 281, 188, 144, 351, 98, 31,
      394, 340, 53, 367, 326, 316, 114, 358, 374, 151, 367, 167, 82, 230, 14,
      98, 223, 118, 89, 279, 312, 61, 317, 38, 135, 75, 42, 338, 296, 256, 263,
      381, 221, 112, 175, 77, 151, 367, 108, 337, 297, 185, 309, 286, 133, 41,
      269, 358, 222, 351, 321, 302, 310, 89, 199, 309, 79, 26, 78, 290, 162,
      290, 245, 88, 32, 243, 27, 206, 11, 100, 389, 317, 1, 9, 96, 9, 195, 390,
      341, 20, 90, 64, 118, 262, 246, 42, 394, 93, 138, 283, 232, 208, 249, 95,
    ],
    [
      133, 327, 59, 94, 62, 378, 229, 98, 103, 256, 257, 315, 118, 114, 295,
      118, 142, 301, 256, 101, 87, 289, 43, 287, 173, 350, 254, 199, 224, 44,
      155, 111, 97, 344, 334, 5, 96, 306, 60, 62, 39, 373, 27, 196, 316, 362,
      31, 339, 180, 97, 71, 235, 45, 93, 76, 261, 170, 151, 140, 198, 197, 69,
      2, 291, 272, 42, 229, 140, 279, 350, 329, 254, 315, 315, 6, 341, 6, 344,
      231, 13, 65, 300, 24, 331, 311, 110, 85, 5, 191, 273, 146, 200, 171, 190,
      225, 387, 4, 104, 167, 366, 4, 325, 168, 118, 396, 24, 161, 385, 167, 345,
      41, 2, 86, 82, 258, 397, 317, 58, 159, 252, 254, 200, 214, 64, 376, 37,
      90, 87, 98, 35, 304, 118, 194, 199, 146, 100, 171, 302, 159, 361, 158,
      331, 374, 268, 155, 310, 72, 74, 28, 18, 120, 254, 93, 77, 362, 121, 241,
      297, 267, 24, 92, 61, 21, 123, 275, 79, 261, 201, 100, 346, 177, 50, 105,
      80, 15, 333, 234, 47, 306, 75, 95, 243, 283, 150, 23, 237, 82, 46, 69,
      182, 87, 109, 203, 264, 349, 323, 5, 350, 222, 75, 259, 355, 351, 175, 44,
      265, 27, 231, 272, 102, 111, 178, 318, 360, 190, 132, 51, 347, 14, 130,
      47, 41, 67, 308, 205, 366, 217, 94, 157, 218, 86, 358, 391, 300, 184, 306,
      222, 54, 361, 18, 236, 310, 267, 27, 150, 292, 386, 298, 388, 282, 59,
      220, 44, 276, 87, 160, 279, 85, 223, 260, 306, 125, 326, 332, 149, 274,
      73, 138, 85, 144, 205, 281, 253, 282, 6, 47, 37, 244, 254, 59, 277, 257,
      302, 236, 398, 72, 358, 224, 395, 310, 43, 398, 201, 275, 284, 240, 217,
      335, 340, 130, 61, 185, 43, 101, 34, 351, 363, 85, 185, 256, 31, 369, 372,
      328, 48, 121, 201, 20, 273, 232, 218, 387, 86, 231, 35, 323, 283, 391,
      331, 99, 203, 204, 275, 397, 72, 151, 52, 385, 398, 256, 94, 92, 75, 75,
      247, 56, 340, 103, 379, 327, 297, 287, 103, 337, 181, 90, 260, 57, 70,
      370, 46, 175, 35, 301, 196, 340, 330, 272, 289, 221,
    ],
  ];
  var i = 0;
  var series = [];
  var x = new Date("19 Nov 2020").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

// chart exhcange price
(function () {
  var options = {
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591],
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592],
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34],
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86],
          },
          {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01],
          },
          {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25],
          },
          {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99],
          },
          {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81],
          },
          {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96],
          },
          {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39],
          },
          {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27],
          },
          {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55],
          },
          {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02],
          },
          {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01],
          },
          {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06],
          },
          {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89],
          },
          {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5],
          },
          {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86],
          },
          {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07],
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#58C3AE",
          downward: "#6C5DD3",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  var chart = document.querySelector("#chart-exhcange-price");
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// line chart 2
if ($("#line-column-chart2").length > 0) {
  var options = {
      series: [
        {
          name: "2020",
          type: "column",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
        {
          name: "2019",
          type: "line",
          data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16],
        },
      ],
      chart: {
        height: 300,
        type: "line",
        toolbar: {
          show: !1,
        },
      },
      stroke: {
        width: [0, 3],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "10%",
        },
      },
      dataLabels: {
        enabled: !1,
      },
      legend: {
        show: !1,
      },
      colors: ["#51459E", "#FBD569"],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    chart = new ApexCharts(
      document.querySelector("#line-column-chart2"),
      options
    );
  chart.render();
}
