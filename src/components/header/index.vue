<template>
  <div>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase font-weight-bold"
        >Stock Ants</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn variant="outlined" :to="{ name: 'LoginPage' }"> Login </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <h1>Stock Ants</h1>
      <v-menu>
        <v-menu-item>
          Stockants overview
        </v-menu-item>
      </v-menu>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
