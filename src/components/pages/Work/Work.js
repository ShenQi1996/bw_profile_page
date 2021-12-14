import React from "react";
import "./Work.scss";
import Chart from "react-apexcharts";
const Work = () => {
  let infro = {
    chartOptions: {
      title: {
        text: "Front-End",
        style: {
          fontSize: "30",
          color: "#fff",
        },
      },
      labels: ["JavaScript", "HTML", "CSS/SASS", "Ract JS", "REST API"],
      dataLabels: {
        style: {
          fontSize: "1rem",
        },
      },
      legend: {
        fontSize: "20rem",
        labels: {
          colors: "#fff",
        },
      },
      tooltip: {
        style: {
          fontSize: "1rem",
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: "660",
          options: {
            chart: {
              width: "350",
            },
            title: {
              text: "Front-End",
              style: {
                fontSize: "20",
                color: "#fff",
              },
            },
            legend: {
              fontSize: "15rem",
              labels: {
                colors: "#fff",
              },
            },
          },
        },
      ],
    },
    series: [20, 20, 20, 20, 20],
  };
  return (
    <div className="work" id="Work">
      <Chart
        options={infro.chartOptions}
        series={infro.series}
        type="donut"
        width="550"
      />
    </div>
  );
};

export default Work;
