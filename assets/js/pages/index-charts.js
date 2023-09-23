$(function() {
	"use strict";



// chart 1
var options = {
    series: [{
        name: "Users",
        data: [450, 650, 440, 160, 350, 414, 555, 257, 400, 555, 257]
    }],
    chart: {
        foreColor: '#9a9797',
        type: "bar",
        //width: 130,
        height: 270,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#3461ff"
        },
        sparkline: {
            enabled: !1
        }
    },
    markers: {
        size: 0,
        colors: ["#3461ff", "#12bf24"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "40%",
            endingShape: "rounded"
        }
    },
	legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -20
    },
    dataLabels: {
        enabled: !1
    },
    grid: {
        show: false,
        borderColor: '#eee',
        strokeDashArray: 4,
    },
    stroke: {
        show: !0,
       // width: 3,
        curve: "smooth"
    },
    colors: ["#3686FC"],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return "" + val + ""
            }
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();

// Chart 1 End

   
// chart 7
var options = {
    series: [{
        name: "Messages",
        data: [450, 650, 440, 160, 671, 414, 555, 901, 555]
    }],
    chart: {
        foreColor: '#9a9797',
        type: "line",
        //width: 130,
        height: 270,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 1,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#3461ff"
        },
        sparkline: {
            enabled: 0
        }
    },
    markers: {
        size: 0,
        colors: ["#3461ff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "55%",
            distributed: true,
        }
    },
    grid: {
        show: true,
        borderColor: '#ededed',
        strokeDashArray: 4,
    },
    dataLabels: {
        enabled: !1
    },
    legend: {
        show: false
      },
    stroke: {
        show: !0,
        width: 4,
        curve: "smooth"
    },
    colors: ["#3686FC"],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart7"), options);
  chart.render();



});