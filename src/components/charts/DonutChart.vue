<template>
  <div>
    <apexchart
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    >
    </apexchart>
  </div>
</template>
<script>
export default {
  data() {
    return {
      series: [44, 55],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
        },
      },
    };
  },
};
</script>
