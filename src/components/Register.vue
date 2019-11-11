<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submitform" method="post">
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
                placeholder="enter your login"
                v-model="Logind"
              ></v-text-field>

              <v-text-field
                label="Name"
                name="Name"
                prepend-icon="person"
                type="text"
                placeholder="enter your name"
                v-model="Named"
              ></v-text-field>

              <v-text-field
                label="Firstname"
                name="Firstname"
                prepend-icon="person"
                type="text"
                placeholder="enter your firstname"
                v-model="Firstnamed"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="text"
                v-model="passwordd"
              ></v-text-field>

              <v-text-field
                id="PswConfirm"
                label="Confirm"
                name="password"
                prepend-icon="lock"
                type="text"
                v-model="confirmd"
              ></v-text-field>
              <v-btn color="secondary" type="submit">Save</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  /*  props: {
       source: String
     },
     data: () => ({
       drawer: null
     }),
   */

  data: () => {
    return {
      Logind: '',
      Named: '',
      Firstnamed: '',
      passwordd: '',
      confirmd: ''
    }
  },
  methods: {
    submitform: () => {
      console.log('Form submitted successfully')
    }
  }
}
</script>
