<template>
  <v-app>
    <Navbar />

    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/NavbarLogin'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login,
    Navbar
  },
  data: () => ({
    //
  })
}
</script>
