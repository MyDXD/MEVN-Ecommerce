/* eslint-disable */
<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
            <h1 class="text-center">Welcome To My AllStore</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" >
            <h2 class="text-center">Login Page</h2>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <v-card class="elevation-12">
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
              <v-form ref="loginForm" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="username"
                  label="Username"
                  prepend-icon="mdi-account"
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
              </v-form>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login" class="btn">Login</v-btn>
              <v-btn color="secondary" @click="register" class="btn">Register</v-btn>
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
      password: '',
      showPassword: false,
      valid: false
    }
  },
  methods: {
    async login () {
      if (!this.username || !this.password) {
        alert('Please enter both username and password')
        return
      }
  
      try {
        const response = await this.axios.post('http://localhost:3000/api/v1/login', {
          username: this.username,
          password: this.password
        })
  
        const token = response.data.token
        localStorage.setItem('Token', token)
        const id = response.data.id
        localStorage.setItem('Id', id)
        console.log(id)
        this.$router.push('/') 
      } catch (error) {
        console.error(error.message)
        Swal.fire({
          icon: 'error',
          title: 'Error occurred',
          text: 'Something went wrong!'
        })
      }
    },
  
    register () {
      this.$router.push('/register') 
    }
  }
}
</script>
  
  <style scoped>
  .btn {
    border-radius:15px ;
  }
  /* *{
    margin: 0;
    padding: 0;
  } */
  /* .v-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  } */
  /* h1{
    display: flex;
    align-content: center;
    justify-content: center;
    padding-left:40% ;
  }
  h2{

  } */
  </style>
  
