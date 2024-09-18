<template>
    <div>
      <h1>ALL PRODUCTS</h1>
      <v-container>
        <v-row>
          <v-col
            v-for="(product, index) in products"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="mx-auto my-4" max-width="400px">
              <v-img
                :src="product.image"
                height="200px"
                class="white--text align-end"
              >
              </v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-subtitle>{{ product.description }}</v-card-subtitle>
              <v-card-text>
                <div>Quantity: {{ product.quantity }}</div>
                <div>Price: {{ product.price }} ฿</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="buyProduct(product)">Buy</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
<script>
/* eslint-disable */
  import axios from "axios";
  export default {
    data() {
      return {
        products: [],
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get("http://localhost:5000/products");
          this.products = response.data;
          console.log(this.products);
          
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      buyProduct(product) {
        console.log(`Buying product: ${product.title}`);
      },
    },
    created() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-block: 2rem;
  }
  .card {
    margin-block: 2rem;
  }
  </style>
  