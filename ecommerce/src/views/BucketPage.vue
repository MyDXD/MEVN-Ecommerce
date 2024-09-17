<template>
  <div>
    <h1>My Bucket</h1>
    <v-container>
      <v-row>
        <!-- Loop through the number of cards -->
        <v-col
          v-for="(store, index) in 12"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"
              height="200px"
            ></v-img>

            <v-card-title> Store {{ index + 1 }} </v-card-title>

            <v-card-subtitle> Electronic </v-card-subtitle>

            <v-card-text>
              <p>$ 50</p>
            </v-card-text>

            <v-card-actions>
              <v-btn color="blue lighten-2" text> ADD TO Bucket </v-btn>

              <!-- Display buttons and count -->
              <v-spacer></v-spacer>

              <v-btn icon @click="decrease(index)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <!-- Display the count value -->
              <span class="mx-2">{{ quantities[index] }}</span>

              <v-btn icon @click="increase(index)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>

              <v-btn icon @click="toggleShow(index)">
                <v-icon>{{
                  storeStatus[index] ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="storeStatus[index]">
                <v-divider></v-divider>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium similique, incidunt tempore adipisci illo
                  accusamus reiciendis quia placeat et enim. Ipsa quo commodi
                  assumenda id animi. Quaerat, itaque nostrum facere iure
                  debitis cum autem facilis sed repudiandae accusantium
                  voluptate qui.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    storeStatus: Array(12).fill(false),
    quantities: Array(12).fill(0),
  }),
  methods: {
    toggleShow(index) {
      this.$set(this.storeStatus, index, !this.storeStatus[index]);
    },
    increase(index) {
      this.$set(this.quantities, index, this.quantities[index] + 1);
    },
    decrease(index) {
      if (this.quantities[index] > 0) {
        this.$set(this.quantities, index, this.quantities[index] - 1);
      }
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-block: 2rem;
}
.mx-2 {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
