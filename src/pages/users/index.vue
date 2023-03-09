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
    <div class="row g-5">
      <div v-for="(user, i) in users" :key="i" class="col-3">
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
                  :src="`src/assets/images/${user.img}`"
                ></v-img>
                <div class="row d-flex justify-space-between align-center mt-2">
                  <div class="col-9">
                    <div class="text-primary text-h6">
                      {{ user.name }}
                    </div>
                    <div class="text-tonal text-subtitile-2">
                      {{ user.position }}
                    </div>
                  </div>
                  <div class="col-3">
                    <v-btn
                      size="small"
                      icon="mdi-chevron-right"
                      color="primary"
                    >
                    </v-btn>
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

<script>
import { ref } from "vue";
export default {
  setup() {
    const users = ref([
      {
        name: "Vikas Bhagaria",
        position: "Research Analyst",
        img: "vikas.png",
      },
      {
        name: "Jai Goel",
        position: "Analyst",
        img: "jai.png",
      },
      {
        name: "Neelam Shah",
        position: "Financial Advisor",
        img: "neelam.png",
      },
      {
        name: "Manish Sai",
        position: "Research Analyst",
        img: "manish.png",
      },
      {
        name: "Sara Patel",
        position: "Analyst",
        img: "sara.png",
      },
      {
        name: "Raj Madan",
        position: "Financial Analyst",
        img: "raj.png",
      },
      {
        name: "Arun Kumar",
        position: "Research Analyst",
        img: "arun.png",
      },
      {
        name: "Jai Goel",
        position: "Analyst",
        img: "jai.png",
      },
    ]);

    return {
      users,
    };
  },
};
</script>
