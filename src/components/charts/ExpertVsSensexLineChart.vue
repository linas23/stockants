<template>
  <div>
    <div
      class="mb-2 ml-auto d-flex justify-space-between"
      style="max-width: 35%"
    >
      <div
        v-for="(item, i) in ['1M', '3M', '6M', '1Y', 'MAX']"
        :key="i"
        :class="['px-3 py-1 rounded-lg', { 'bg-primary': i === 0 }]"
      >
        {{ item }}
      </div>
    </div>
  </div>
  <div class="border pa-2">
    <apexchart type="line" :options="options" :series="series"></apexchart>
  </div>
  <div class="mt-2 text-h6 font-weight-bold">
    Value of ₹100 invested on 01st December would be ₹111 today.
  </div>
</template>
<script>
export default {
  data: () => ({
    options: {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: [...new Array(30)].map((el, i) => "jan-" + (i + 1)),
      },
    },
    series: [
      {
        name: "Vikas Bhagaria",
        data: [...new Array(30)].map((el) => {
          const random = 80 + Math.random() * 20;
          return parseInt(random);
        }),
      },
      {
        name: "Sensex",
        data: [...new Array(30)].map((el) => {
          const random = 80 + Math.random() * 30;
          return parseInt(random);
        }),
      },
    ],
  }),
};
</script>
