<template>
  <div class="container my-4">
    <div class="w-50 ml-4">
      <v-text-field
        variant="solo"
        prepend-inner-icon="mdi-magnify"
        label="Search Keywords"
      >
      </v-text-field>
    </div>
    <div class="row">
      <div class="col-3">
        <v-card class="rounded-lg" elevation="6">
          <v-card-text>
            <div class="text-center">
              <v-avatar>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                ></v-img>
              </v-avatar>
              <div class="text-h6">Vikas Bhagaria</div>
              <div class="text-grey text-subtitle-2">Research Analyst</div>

              <div class="mt-4">
                <div class="text-h6">2.27%</div>
                <div class="text-grey text-subtitle-2">Annualised ROI</div>
              </div>
              <div class="my-2">
                <div class="row">
                  <div class="col-6">
                    <div class="text-h6">N/A</div>
                    <div class="text-grey text-subtitle-2">Accuracy</div>
                  </div>
                  <div class="col-6">
                    <div class="text-h6">N/A</div>
                    <div class="text-grey text-subtitle-2">Success Rate</div>
                  </div>
                  <div class="col-6">
                    <div class="text-h6">2</div>
                    <div class="text-grey text-subtitle-2">Live Reco</div>
                  </div>
                  <div class="col-6">
                    <div class="text-h6">146</div>
                    <div class="text-grey text-subtitle-2">Total Reco</div>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="col-9">
        <v-card>
          <v-card-text>
            <div class="text-h5">Portfolio Overview</div>
            <div class="d-flex">
              <div class="text-orange border-bottom d-inline">Stocks</div>
              <div class="mx-5">Sectors</div>
              <div>Stocks Covered <sup class="text-orange">34</sup></div>
            </div>
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6">
                <DonutChart />
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="my-4">
      <div class="row">
        <div class="col-4">
          <v-card>
            <v-card-text>
              <div class="text-h5">About</div>
              <div class="mt-3">
                <p>
                  I am a SEBI Registered Research Analyst with over 12 Years of
                  Experience in Financial Markets
                </p>
              </div>

              <div class="my-4">
                <span class="text-primary">Company : </span>
                <span class="font-weight-bold">Chart & Trade</span>
              </div>
              <div class="my-4">
                <span class="text-primary"> SEBI Registered Number: </span>
                <span class="font-weight-bold">INH12345678</span>
              </div>
              <div class="d-flex">
                <v-icon
                  v-for="(social, i) in socialLinks"
                  :key="i"
                  class="mr-1"
                  :color="social.color"
                >
                  {{ social.icon }}</v-icon
                >
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div class="col-8">
          <v-card>
            <v-card-text>
              <div class="text-h5">Expert Vs Sensex</div>

              <div class="mt-4">
                <ExpertVsSensex></ExpertVsSensex>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>

    <div class="my-4">
      <v-card class="pa-5">
        <v-card-text class="my-5">
          <div class="container">
            <div class="border rounded-lg py-4">
              <div class="row">
                <div class="col-4 d-flex flex-column align-center">
                  <div>If you would have invested</div>
                  <div class="text-h3">1L</div>
                  <div>
                    in <span class="text-primary">Profit Tiger</span> in
                  </div>
                  <div class="d-flex justify-space-between">
                    <div
                      v-for="(item, i) in ['1M', '3M', '6M', '1Y', 'MAX']"
                      :key="i"
                      :class="[
                        'px-3 py-1 rounded-lg',
                        { 'bg-primary': i === 0 },
                      ]"
                    >
                      {{ item }}
                    </div>
                  </div>
                </div>
                <div class="col-4 d-flex align-center">
                  <v-divider></v-divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
                <div class="col-4 d-flex flex-column align-center">
                  <div>Your current value would be</div>
                  <div class="text-h3">3.12 Cr</div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <div class="my-4">
      <div class="row">
        <div class="col-12 col-xl-6">
          <v-card>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <div class="text-h6 font-weight-bold">
                  Recommendations (Equity)
                </div>
                <div class="d-flex">
                  <div>1M / 3M/ 6M</div>
                  <div>
                    <v-icon>mdi-edit</v-icon>
                    Edit
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  v-for="i in 6"
                  :key="i"
                  :class="[
                    'col-12 border-bottom py-3',
                    { 'border-end': i % 2 !== 0 },
                  ]"
                >
                  <RecommendationCard />
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div class="col-12 col-xl-6">
          <v-card>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <div class="text-h6 font-weight-bold">
                  Recommendations (Options)
                </div>
                <div class="d-flex">
                  <div>1M / 3M/ 6M</div>
                  <div>
                    <v-icon>mdi-edit</v-icon>
                    Edit
                  </div>
                </div>
              </div>
              <div class="row">
                <div
                  v-for="i in 6"
                  :key="i"
                  :class="[
                    ' border-bottom py-3',
                    { 'border-end': i % 2 !== 0 },
                  ]"
                >
                  <RecommendationCard />
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getDashboardData } from "../../api/user";
import DonutChart from "../../components/charts/DonutChart.vue";
import ExpertVsSensex from "../../components/charts/ExpertVsSensexLineChart.vue";
import RecommendationCard from "../../components/RecommendationCard.vue";
export default {
  components: {
    ExpertVsSensex,
    DonutChart,
    RecommendationCard,
  },
  setup() {
    onMounted(async () => {
      const res = await getDashboardData();
      console.log("res: ", res);
    });

    const socialLinks = ref([
      {
        icon: "mdi-linkedin",
        color: "indigo",
      },
      {
        icon: "mdi-twitter",
        color: "blue",
      },
      {
        icon: "mdi-youtube",
        color: "red",
      },
      {
        icon: "mdi-web",
        color: "grey",
      },
    ]);
    return { socialLinks };
  },
};
</script>
