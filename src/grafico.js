document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("digitalizationChart").getContext("2d");
  var digitalizationChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: [
        {
          label: "Adopción de Tecnologías Digitales (%)",
          data: [10, 15, 20, 30, 45, 60, 75, 90],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Porcentaje de Adopción",
          },
        },
        x: {
          title: {
            display: true,
            text: "Año",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Evolución de la Digitalización en la Industria Alimentaria en España",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.raw + "%";
            },
          },
        },
      },
    },
  });
});
