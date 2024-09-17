<template>
  <div>
    <v-main>
      <router-view />
    </v-main>
    <v-app-bar app color="#603F26" dark>

      <RouterLink to="/"><v-btn text>
          <h1>SHOOPING</h1>
        </v-btn></RouterLink>

      <v-spacer></v-spacer>
      <RouterLink to="/products"><v-btn text>
          product
        </v-btn></RouterLink>
      <v-spacer></v-spacer>
      <span>HI : {{ user.username }}</span>
      <RouterLink to="/account" v-if="this.token">
        <v-btn text><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </v-btn>
      </RouterLink>
      <RouterLink to="bucket" v-if="this.token"><v-btn text><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </v-btn></RouterLink> 
      <RouterLink to="/login"><v-btn text v-if="!this.token">login</v-btn></RouterLink>
      <v-btn text v-if="this.token" @click="logout()">Logout</v-btn>
      <RouterLink to="/register"  v-if="!this.token"><v-btn text>register</v-btn></RouterLink>


    </v-app-bar>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      user: "",
      Id: "", 
      token:null
    }
  },
  methods: {
    async logout() {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        await this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    },
    async fetchUserById() {
      try {
        // console.log("id",this.Id);
         const token = this.token
         console.log("token",token);
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
      if (!this.Id) {
        console.error("No Id found in local storage.");
      } else {
        console.log("Retrieved Id from local storage:", this.Id);
      }
    }
  },
  created() {
    this.token = localStorage.getItem("token");
    this.getLocal()
    this.fetchUserById()
    // โหลด token จาก localStorage เมื่อคอมโพเนนต์ถูกสร้างขึ้น
  },
  watch: {
    // ใช้ watch เพื่อสังเกตการณ์การเปลี่ยนแปลงของ localStorage token
    '$route'() {
      this.token = localStorage.getItem("token"); // อัปเดต token ทุกครั้งเมื่อเส้นทางเปลี่ยน
    },
   
  },
}

</script>
