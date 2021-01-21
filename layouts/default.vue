<template>
  <v-app color="red">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      :temporary="!screenlg"
      app
      right
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      hide-on-scroll
      class="bg1"
      elevate-on-scroll
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />


      <v-spacer />

      <v-badge offset-x="10" offset-y="27" color="red" dot right overlap>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-badge>
      <v-avatar size="35" color="black" class="mr-2">
        <img src="@/assets/p.jpg" />
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
      <fixed-bot @click="rightDrawer = !rightDrawer"></fixed-bot>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" temporary fixed>
      <v-list> </v-list>
    </v-navigation-drawer>
    {{activeNavBottom}}
    <bottom-nav v-if="!screenlg" v-model="activeNavBottom"></bottom-nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      activeNavBottom: 1,
      screenlg: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'home',
          to: '/',
        },
        {
          icon: 'mdi-book',
          title: 'profile',
          to: '/profile',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerWidth
      if (this.windowHeight > 1264) {
        this.screenlg = true
      } else {
        this.screenlg = false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.v-application {
  background-color: $bg1;
}
.bg1 {
  background-color: $bg1 !important;
}
</style>
