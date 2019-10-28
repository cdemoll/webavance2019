<template>
  <v-app id="app">
    <NavbarLogin />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavbarLogin from '@/components/NavbarLogin'

export default {
  name: 'app',
  components: {
    NavbarLogin
  },
  data: () => ({
    //
  })
}
</script>
