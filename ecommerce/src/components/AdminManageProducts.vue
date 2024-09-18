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
                <v-btn color="primary" @click="openEditDialog(product)">Edit</v-btn>
                <v-btn color="red" @click="deleteProduct(product._id)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  
        <!-- Dialog สำหรับแก้ไขสินค้า -->
        <v-dialog v-model="editDialog" max-width="500px">
          <v-card>
            <v-card-title>Edit Product</v-card-title>
            <v-card-text>
              <v-form ref="editForm">
                <v-text-field
                  label="Title"
                  v-model="editedProduct.title"
                  required
                ></v-text-field>
  
                <v-textarea
                  label="Description"
                  v-model="editedProduct.description"
                  required
                ></v-textarea>
  
                <v-text-field
                  label="Quantity"
                  v-model="editedProduct.quantity"
                  type="number"
                  required
                ></v-text-field>
  
                <v-text-field
                  label="Price"
                  v-model="editedProduct.price"
                  type="number"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="editDialog = false">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="saveEditedProduct">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        editDialog: false,
        editedProduct: {
          _id: null,
          title: '',
          description: '',
          quantity: 0,
          price: 0,
        },
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
      async deleteProduct(productId) {
        try {
          const response = await axios.delete(`http://localhost:5000/products/${productId}`);
          console.log("Product deleted:", response.data);
          this.products = this.products.filter(product => product._id !== productId);
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      },
      openEditDialog(product) {
        // เปิด Dialog และโหลดข้อมูลสินค้าที่ต้องการแก้ไข
        this.editedProduct = { ...product };
        this.editDialog = true;
      },
      async saveEditedProduct() {
        try {
          const response = await axios.put(`http://localhost:5000/products/${this.editedProduct._id}`, this.editedProduct);
          console.log("Product updated:", response.data);
  
          // อัปเดตสินค้าหลังจากที่แก้ไข
          const index = this.products.findIndex(product => product._id === this.editedProduct._id);
          if (index !== -1) {
            this.products.splice(index, 1, response.data);
          }
  
          // ปิด Dialog
          this.editDialog = false;
        } catch (error) {
          console.error("Error updating product:", error);
        }
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
  