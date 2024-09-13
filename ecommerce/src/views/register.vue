<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <h1 class="text-center">Welcome To My AllStore</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h2 class="text-center">Register Page</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <v-card class="elevation-12">
          <v-card-title class="headline">Register</v-card-title>

          <v-card-text>
            <v-form ref="loginForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                label="E-mail"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                required
              ></v-text-field>

              <!-- New input fields -->
              <v-text-field
                v-model="username"
                label="Username"
                prepend-icon="mdi-account"
                required
              ></v-text-field>
              <v-text-field
                v-model="address"
                label="Address"
                prepend-icon="mdi-home"
                required
              ></v-text-field>
              <v-text-field
                v-model="age"
                label="Age"
                prepend-icon="mdi-cake"
                type="number"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login" class="btn">Login</v-btn>
            <v-btn color="secondary" @click="register" class="btn"
              >Register</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      address: '',
      age: '',
      showPassword: false,
      valid: false
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },

    async register () {
      // Check for required fields
      if (
        !this.email ||
        !this.password ||
        !this.username ||
        !this.address ||
        !this.age
      ) {
        alert('Please fill all the required fields')
        return
      }

      try {
        const response = await this.axios.post(
          'http://localhost:3000/api/v1/register',
          {
            email: this.email,
            password: this.password,
            username: this.username,
            address: this.address,
            age: this.age
          }
        )
        console.log(response)

        // Display success message
        Swal.fire({
          title: 'Good job!',
          text: 'Registration successful!',
          icon: 'success'
        })
        this.$router.push('/login')

        // Optionally redirect to login page
        // this.$router.push("/login");
      } catch (error) {
        console.error(error.message)
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: 'Something went wrong!'
        })
      }
    }
  }
}
</script>

<style scoped>
.btn {
  border-radius: 15px;
}
/* .v-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }
  h1 {
    display: flex;
    align-content: center;
    justify-content: center;
    padding-left: 40%;
  } */
</style>
