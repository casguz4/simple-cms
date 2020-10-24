<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" left>
      <v-list nav>
        <v-subheader>Menu</v-subheader>

        <v-list-item-group v-model="activeNav" color="primary">
          <v-list-item
            v-for="({ name, icon, path }, i) in navLinks"
            :key="i"
            link
          >
            <v-list-item-icon>
              <v-icon :text="icon">{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link :to="path" class="router-link">
                <v-list-item-title :text="name">{{ name }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Simple CMS</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data() {
    return {
      drawer: false,
      navLinks: [],
      activeNav: 0,
    };
  },

  // mounted() {
  //   this.navLinks = this.$router.options.routes;
  // },
  created() {
    this.navLinks = this.$router.options.routes.map((el) => ({
      icon: el.meta.icon,
      name: el.name,
      path: el.path,
    }));
  },
};
</script>

<style lang="scss" scoped>
a[class*="router-link"] {
  text-decoration: none;
}
</style>
