//BAR CHART: https://www.chartjs.org/docs/latest/charts/bar.html
//STACKED BAR CHART: https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html
//COLOR SCALES: https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/009481/0/148/130/white



const ctxAmtrak = document.getElementById("chart-amtrak-flight-co2e");
const ctxOptions = document.getElementById("chart-amtrak-co2-options");

new Chart(ctxAmtrak, {
  type: "bar",
  data: {
    labels: [
      "PDX > OAK Flight",
      "Travel CO2 limit, 2020",
      "2030",
      "2040",
      "2050",
    ],
    datasets: [
      {
        label: "travel CO2 limit",
        data: [.3,.4,.4,.2,.06],
        borderWidth: 1,
        backgroundColor: "#0A2F51"
      },
      {
        label: "total CO2 limit",
        data: [0,3,2.5,1.4,.7],
        borderWidth: 1,
        backgroundColor: "#1D9A6C",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    //indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Total Emissions Limit vs. Travel Limit to Hit Climate Targets (tons CO2)",
      },
    },
  },
});

new Chart(ctxOptions, {
  type: "bar",
  data: {
    labels: [
      "Flight",
      "Car",
      "Train",
      "Bus",
    ],
    datasets: [
      {
        label: "tons CO2e",
        data: [.3,.32,.2,.08],
        borderWidth: 1,
        backgroundColor: [
          "#0A2F51",
          "#188977",
          "#1D9A6C",
          "#99D492",
        ],
      },

    ],
  },
  options: {
    responsive: true,
    //indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Carbon Emissions by Travel Method (tons CO2)",
      },
      legend: {
        display: false,
      },
    },
  },
});
