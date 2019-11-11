<template>
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
    <v-btn text href="https://twitter.com/CareEshop" target="_blank">
      <span class="mr-2">TWITTER</span>

      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarLogin',
  data: () => ({
    //
  })
}
</script>
