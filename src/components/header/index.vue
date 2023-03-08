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
    <v-navigation-drawer width="180px" v-model="drawer">
      <v-list v-model:opened="open">
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

        <v-list-group value="overview">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Stock Ants Overview"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon], i) in options"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    open: ["overview"],
    options: [
      ["Accounts", "mdi-plus-outline"],
      ["Demand", "mdi-file-outline"],
      ["Supply", "mdi-update"],
    ],
  }),
};
</script>
