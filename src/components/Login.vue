/* eslint-disable space-before-function-paren */
<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height brown lighten-5" fluid>
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
                    v-model="login"
                    prepend-icon="person"
                    type="text"
                    :rules="rules.required"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    v-model="pswd"
                    prepend-icon="lock"
                    type="password"
                    :rules="rules.required"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="secondary">
                  <router-link
                    to="/register"
                    style="color: inherit; text-decoration: inherit;"
                    >register</router-link
                  >
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">
                  <router-link
                    to="/dashboard"
                    style="color: inherit; text-decoration: inherit;"
                    >Login</router-link
                  >
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    login: '',
    pswd: '',
    drawer: null,
    rules: {
      required: v => !!v || 'Login is required'
    }
  }),
  methods: {
    submit: function() {
      this.$emit('loginData', this.login)
      this.$emit('pswdData', this.pswd)
      this.login = ''
      this.pswd = ''
    },
    redirectTo: function(path) {
      this.$router.push(path)
    }
  }
}
</script>
