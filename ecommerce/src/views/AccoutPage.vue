<template>
  <div>
    <!-- <h1>My Account</h1> -->
    <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <h1 class="text-center">My Account</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <!-- <h2 class="text-center">Register Page</h2> -->
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <v-card class="elevation-12">
          <v-card-title class="headline">Register</v-card-title>

          <v-card-text>
            <h3>E-mail</h3>
           {{ user.email }}
          </v-card-text>
          <v-card-text>
            <h3>Username</h3>
           {{ user.username }}
          </v-card-text>
          <v-card-text>
            <h3>Age</h3>
           {{ user.age }}
          </v-card-text>
          <v-card-text>
            <h3>Address</h3>
           {{ user.address }}
          </v-card-text>

          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
/* eslint-disable */
// import axios from "axios";
export default {
  data() {
    return {
      user: "",
      Id: "", 
      token:""
    };
  },
  methods: {
    async fetchUserById() {
      try {
        // console.log("id",this.Id);
         const token = this.token
        const response = await this.axios.get(`http://localhost:5000/users/${this.Id}`,{
          headers:{Authorization: `Bearer ${this.token}`}
        },{
        });
        this.user = response.data;
        console.log("user",this.user);
      } catch (error) {
        console.error('Error fetching user by ID:', error.message);
      }
    },
    getLocal() {
      this.Id = localStorage.getItem("id");
      this.token = localStorage.getItem("token");
      if (!this.Id) {
        console.error("No Id found in local storage.");
      } else {
        console.log("Retrieved Id from local storage:", this.Id);
      }
    }
   
  },
  mounted() {
    this.getLocal()
    this.fetchUserById()
  },
};
</script>

<style scoped>

</style>
