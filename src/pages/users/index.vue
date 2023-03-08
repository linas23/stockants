<template>
  <div class="container my-4">
    <div class="w-50 ml-4">
      <v-text-field variant="solo" prepend-inner-icon="mdi-magnify" label="Search Keywords">
      </v-text-field>
    </div>
    <div class="row g-5">
      <div v-for="i in 12" :key="i" class="col-3">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              :to="{ name: 'UserPortfolioPage' }"
              v-bind="props"
              :flat="!isHovering"
              :elevation="isHovering ? 6 : 0"
            >
              <v-card-text>
                <v-img
                  height="300px"
                  cover
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1dIOAjqRZTG33LCikcTs75d2G2OJH9vnTA&usqp=CAU"
                ></v-img>
                <div class="row d-flex justify-space-between align-center">
                  <div class="col-9">
                    <div class="text-primary text-h6">Vikas Bhagaria</div>
                    <div class="text-tonal text-subtitile-2">
                      Research Analyst
                    </div>
                  </div>
                  <div class="col-3">
                    <v-btn icon="mdi-chevron-right" color="primary"> </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </v-hover>
      </div>
    </div>
  </div>
</template>
