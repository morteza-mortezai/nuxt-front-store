<template>
  <v-app>
    <!-- top bar start -->
      <v-app-bar elevation="0" color="white" app>
      <div class="CContainer">
        <v-flex class="row align-center">
          <v-menu transition="scale-transition" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" icon v-bind="attrs" v-on="on">
                <v-avatar size="35">
                  <img src="@/assets/p.jpg" class="img-border" />
                </v-avatar>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <template v-for="(item, i) in items">
                  <v-list-item :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-item-group>
              <v-divider></v-divider>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>LogOut</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
          <v-menu transition="scale-transition" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-on="on" v-bind="attrs">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </template>
            <v-list two-line width="300">
              <template v-for="(item, index) in items2">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="require('@/assets/p.jpg')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
          <v-btn icon v-for="(item, index) in menus" :key="index">
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-btn>
          <v-spacer />
        <c-text-field v-if="screenSize>600"></c-text-field>
          <v-spacer />

          <span>profile</span>
        </v-flex>
      </div>
    </v-app-bar>
    <!-- top bar end -->
  
    <!-- middle bar start -->
      <div app class="CContainer pt">
      <v-flex class="row">
        <div class="w-80 d-flex justify-center align-center flex-column py-1">
          <div class="d-flex flex-row-reverse align-center justify-start">
            <h1 class="title">UserID</h1>
            <v-btn outlined class="ml-3" text>Edit Profile</v-btn>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" class="ml-2">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-list dense>
                  <v-list-item-group v-model="selectedItem" color="primary">
                    <template v-for="(item, i) in items">
                      <v-list-item :key="i">
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.text"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list-item-group>
                  <v-divider></v-divider>
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>LogOut</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-dialog>
          </div>
          <div class="flex-grow-1">
            <span> Posts</span>
            <span class="ml-3">1 Follower</span>
            <span class="ml-3">1 Following</span>
          </div>
          <div>
            <span>Name Family</span>
          </div>
        </div>
        <div class="w-20 d-flex flex-row justify-center align-center">
          <v-avatar :size="screenSize>500 ? 130 : 50"><img src="@/assets/p.jpg" alt="" /></v-avatar>
        </div>
      </v-flex>
    </div>
    <!-- middle bar end -->

    <!-- tabs header start -->
    <div app class="CContainer tabs">
      <div
        style="max-width: 500px"
        class="d-flex justify-center justify-space-between mx-auto"
      >
        <nuxt-link
          v-for="tab in tabs"
          :key="tab.name"
          :to="'/profile/' + tab.route"
          class="link"
        >
          <v-icon>mdi-{{ tab.icon }}</v-icon>
          {{ tab.name }}</nuxt-link
        >
      </div>
    </div>
 <!-- tabs header end -->
  <!-- tabs content  start -->
    <v-main>
      <div class="CContainer">
        <nuxt />
      </div>
    </v-main>
      <!-- tabs content  end -->

  </v-app>
</template>

<script>

export default {

  data() {
    return {
      screenSize:null,
      selectedItem: null,
      dialog: false,
      menus: [{ icon: 'compass' }, { icon: 'send-outline' }],
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },

        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      items2: [
        { header: 'Today' },
        {
          avatar: '@/assets/p.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: '@/assets/p.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: '@/assets/p.jpg',
          title: 'Oui oui',
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
      ],
      tabs: [
        { name: 'Posts', route: '', icon: 'bookmark-outline' },
        { name: 'IGTV', route: 'IGTV', icon: 'bookmark-outline' },
        { name: 'Saved', route: 'Saved', icon: 'bookmark-outline' },
        { name: 'Tagged', route: 'Tagged', icon: 'bookmark-outline' },
        { name: 'Store', route: 'Store', icon: 'bookmark-outline' },
      ],
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
      this.screenSize = window.innerWidth
     
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.v-application {
  background-color: #fafafa;
}

.CContainer {
  max-width: 975px;
  margin: 0 auto;
  width: 100%;

  &.tabs {
    margin-top: 40px;
    border-top: 1px solid rgb(228, 227, 227);
    padding: 13px 0 0 0;

    .link {
      position: relative;
      text-decoration: none;
      transition: all 1s;
      color: $txt1;
      opacity: 0.4;

      &::before {
        content: '';
        //  border:1px solid red;
        transition: all 0.4s;
        background-color: transparent;
        display: inline-block;
        height: 1px;
        width: 100%;
        position: absolute;
        top: -14px;
        left: 0;
        z-index: 10;
      }
      i::before {
        color: $txt1;
        opacity: 0.4;
      }
      &.nuxt-link-exact-active {
        opacity: 1;
        i::before {
          opacity: 1;
        }
        &::before {
          background-color: black;
        }
      }
    }
  }
  &.pt {
    padding: 84px 0 0 0;
  }
  .w-80 {
    width: 75%;
    div {
      width: 100%;
      text-align: left;
      flex-grow: 1;
    }
  }
  .w-20 {
    width: 25%;
    img {
      border: 2px solid gray;
    }
  }
}
.img-border {
  padding: 2px;

  border: 1px solid rgb(138, 138, 138);
}
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
