<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                v-model="input.login"
                prepend-icon="person"
                type="text"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                name="password"
                v-model="input.password"
                prepend-icon="lock"
                type="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="secondary">
              <router-link
                :to="{ name: 'register' }"
                style="color: inherit; text-decoration: inherit;"
                >Register</router-link
              >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary">
              <router-link
                :to="{ name: 'dashboard' }"
                style="color: inherit; text-decoration: inherit;"
                >Login</router-link
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginView',
  data: () => ({
    input: {
      login: '',
      password: ''
    },
    drawer: null
  }),
  methods: {}
}
</script>
