<template>
  <v-app-bar color="primary" dark app>
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
    <v-toolbar-title class="text-uppercase font-weight-bold"
      >Stock Ants</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn variant="outlined" :to="{ name: 'LoginPage' }"> Login </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
