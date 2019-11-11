/* eslint-disable prettier/prettier */
<template>
  <div>
    <v-app-bar dark>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
          to="/login"
          style="color: inherit; text-decoration: inherit;"
        >
          <span>CAR</span>
          <span class="font-weight-light">E-shop</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/dashboard">Dashboard</router-link>
      <span v-if="isLoggedIn">
        <a @click="logout">Logout</a>
      </span>
      <v-spacer></v-spacer>
      <v-btn text href="https://twitter.com/CareEshop" target="_blank">
        <span class="mr-2">TWITTER</span>

        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavbarLogin',
  data: () => ({
    //
  }),
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function() {
      this.$store.displatch('/logout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
