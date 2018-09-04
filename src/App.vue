<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" fixed app>
      <v-list>
        <v-list-tile
          v-for="item in drawerMenu "
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
      Welcome SuperUser!
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in toolbarMenu"
          :key="item.title"
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      drawerMenu: [
        {icon: 'dashboard', title: 'Home', link: '/'},
        {icon: 'person', title: 'Profile', link: '/profile'},
        {icon: 'face', title: 'Clients', link: '/clients'},
        {icon: 'shop', title: 'Products', link: '/products'},
        {icon: 'folder_special', title: 'Projects', link: '/projects'}
      ],

      toolbarMenu: [
        {icon: 'supervisor_account', title: 'Wag', link: '/meetups'},
        {icon: 'room', title: 'Maging', link: '/meetup/new'},
        {icon: 'person', title: 'Bobo', link: '/profile'},
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
    }
  }
}
</script>
<!-- <template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" fixed>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
        {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
        {icon: 'person', title: 'Profile', link: '/projects'},
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
    }
  }
}
</script> -->
