<template>
    <div>
      <v-app-bar app color="primary" dark>
      <v-btn text @click="navigateTo('Home')"><h1>SHOOPING</h1></v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="navigateTo('landding')">Me</v-btn> 
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    navigateTo (routeName) {
      if (this.$route.name !== routeName) {
        this.$router.push({ name: routeName })
      }
    }
  }
}

</script>
