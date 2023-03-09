<template>
  <v-card elevation="4" class="rounded-md">
    <v-card-text>
      <div class="py-2 border-bottom d-flex justify-space-between">
        <div>
          <div
            class="pa-1 bg-green-lighten-4 text-green font-weight-bold rounded-lg"
          >
            LIVE
          </div>
        </div>
        <div class="pa-1 bg-primary rounded-lg">
          <v-icon> mdi-arrow-expand-horizontal </v-icon>
          <span>TRADE</span>
        </div>
      </div>
      <div class="my-2 d-flex justify-space-between align-center">
        <div>
          <div class="text-subtitle-1">Atul Kumar</div>
          <div class="text-grey text-subtitle-2">Chart & Trade</div>
        </div>
        <div class="bg-grey-lighten-3 pa-1">Short Term</div>
      </div>
      <div class="my-3 d-flex justify-space-between align-center">
        <div>
          <div class="text-h6">Eicher Motors Ltd.</div>
          <div class="d-flex">
            <div class="border rounded-lg mr-2 px-1 text-indigo-darken-3">
              more
            </div>
            <div class="border rounded-lg mr-2 px-1 text-indigo-darken-3">
              login
            </div>
            <div class="border rounded-lg px-1 text-red">
              <v-icon>mdi-file-pdf-box</v-icon>
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-subtitle-1">
            <v-icon size="small"> mdi-currency-rupee </v-icon>
            <span> 18671 </span>
          </div>
          <div class="text-caption text-grey">
            {{ dayjs() }}
          </div>
        </div>
      </div>
      <div class="my-2">
        <div class="row ma-0 d-flex justify-space-between align-center">
          <div class="col-8">
            <div class="row d-flex justify-space-between">
              <v-card class="col-3 bg-grey-lighten-2 pa-2 rounded-lg">
                <div class="text-grey">Reco Price</div>
                <div>
                  <v-icon size="small">mdi-currency-rupee</v-icon>
                  <span> 17415.2 </span>
                </div>
              </v-card>
              <v-card class="col-3 bg-grey-lighten-2 pa-2 rounded-lg">
                <div class="text-grey">Reco Price</div>
                <div>
                  <v-icon size="small">mdi-currency-rupee</v-icon>
                  <span> 17415.2 </span>
                </div>
              </v-card>
              <v-card class="col-3 bg-grey-lighten-2 pa-2 rounded-lg">
                <div class="text-grey">Reco Price</div>
                <div>
                  <v-icon size="small">mdi-currency-rupee</v-icon>
                  <span> 17415.2 </span>
                </div>
              </v-card>
            </div>
            <div class="text-caption mt-1 text-grey">
              {{ dayjs() }}
            </div>
          </div>
          <div class="col-2 d-flex flex-column align-center">
            <div class="bg-success px-2 rounded-xl">BUY</div>
            <div class="text-caption text-grey">Recommendation</div>
          </div>
        </div>
      </div>
      <div class="text-right mt-2">
        <v-btn size="small" color="red" class="px-4 py-1 rounded-xl">
          Check Real-Time <span><v-icon>mdi-chevron-down</v-icon></span>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import dayjs from "dayjs";
export default {
  setup() {
    return {
      dayjs,
    };
  },
};
</script>
