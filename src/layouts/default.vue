<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        absolute
        temporary
        dark
    >
      <div
          class="d-flex justify-center pa-5"
      >
        <!--<v-img
          src="../assets/exat-w150-white.png"
          min-width="150px"
          max-width="150px"
          contain
        />-->
        <img
            src="../assets/exat-w150-white.png"
            alt="logo"
        />
      </div>
      <v-list dense>
        <v-list-item-group :value="menuId">
          <v-list-item
              v-for="(route, index) in routes"
              :key="index"
              link
              :href="route.href"
          >
            <v-list-item-action>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ route.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        clipped-left
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>EXAT Traffic DevTools - Made with ❤️by Promlert Lovichit</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--<v-container
        class="fill-height"
        fluid
      >-->
      <slot/>
      <!--</v-container>-->
    </v-main>

    <!--<v-footer app>
      <span>&copy; 2020</span>
    </v-footer>-->
  </v-app>
</template>

<script>
const routes = [
  {
    title: 'Schematic Map (Old)',
    href: '/schematic_old',
    icon: 'mdi-map',
  },
  {
    title: 'Entrance-Exit Routes',
    href: '/cost_tolls',
    icon: 'mdi-directions-fork',
  },
  {
    title: 'Routes Data',
    href: '/routes',
    icon: 'mdi-contain',
  },
];

export default {
  name: 'App',

  props: {
    menuId: Number,
  },

  data: () => ({
    drawer: null,
    routes,
  }),

  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>
