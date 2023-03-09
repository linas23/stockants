<template>
  <div>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        class="text-uppercase font-weight-bold"
        @click="$router.push('/')"
        >Stock Ants</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn variant="outlined" :to="{ name: 'LoginPage' }"> Login </v-btn>
    </v-app-bar>
    <v-navigation-drawer width="180px" v-model="drawer">
      <div class="h-100 d-flex flex-column justify-space-between">
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Home" exact></v-list-item>
          <v-list-group value="overview">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Stock Ants Overview"
                :to="{ name: 'userspage' }"
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
        <v-list v-model:opened="open">
          <v-list-item
            prepend-icon="mdi-pencil-remove"
            title="Edit"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-mace" title="Hide"></v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    open: ["overview"],
    options: [
      ["Accounts", "mdi-plus-outline"],
      ["Demand", "mdi-file-outline"],
      ["Supply", "mdi-update"],
    ],
  }),
};
</script>
