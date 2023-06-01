(function ($) {
  "use strict";
  //pie chart
  const ctx = document.getElementById("pieChart4");
  ctx.height = 100;
  new Chart(ctx, {
      type: 'pie',
      data: {
          defaultFontFamily: 'Poppins',
          datasets: [{
              data: [45, 25, 20, 10],
              backgroundColor: [
                  "rgba(242, 85, 33, .9)",
                  "rgba(242, 85, 33, .7)",
                  "rgba(242, 85, 33, .5)",
                  "rgba(0,0,0,0.07)"
              ],
              hoverBackgroundColor: [
                  "rgba(242, 85, 33, .9)",
                  "rgba(242, 85, 33, .7)",
                  "rgba(242, 85, 33, .5)",
                  "rgba(0,0,0,0.07)"
              ]

          }],
          labels: [
              "one",
              "two",
              "three", 
              "four"
          ]
      },
      options: {
          responsive: true
      }
  });
})(jQuery);